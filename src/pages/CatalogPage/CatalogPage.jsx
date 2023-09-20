import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectorTotal, selectorCurrentAdverts, selectorFilters, selectorAdverts } from "redux/adverts/selectors";
import { getAdverts, getAdvertsByPage } from "redux/adverts/operations";
import { useDispatch } from "react-redux"; 
import AdvertsList from "components/AdvertsList";
import AdvertsSearch from "components/AdvertsSearch";
import { Container, Btn, EmptyImage, EmptyPage, Text} from "./CatalogPage.styled";

export default function CatalogPage() {
    const [page, setPage] = useState(2);
    const total = useSelector(selectorTotal);
    const currentAdvertsCount = useSelector(selectorCurrentAdverts).length;
    const showLoadMore = total > currentAdvertsCount;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAdverts());
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const handleClick = () => {
        setPage(page => page + 1);
        dispatch(getAdvertsByPage({page}))
    };

    const currentAdverts = useSelector(selectorCurrentAdverts);

    const advertsAll = useSelector(selectorAdverts);
    const filters = useSelector(selectorFilters);
    const useFilters = filters.make !== "" || filters.price !== "" || filters.mileageFrom !== "" || filters.mileageTo !== "";
    
    let filteredAdverts = [];
    if (useFilters) {
        filteredAdverts = advertsAll.filter(advert => {
        const price = Number(advert.rentalPrice.replace("$", ''));
       
        return (
            (filters.make === advert.make || filters.make === "")
            &&
             (price <= filters.price || filters.price === "")
             && ((filters.mileageFrom <= advert.mileage || filters.mileageFrom === "")                
             && (advert.mileage <= filters.mileageTo || filters.mileageFrom === ""))
        )
    });
    
    };   

    const actualAdverts = useFilters ? filteredAdverts : currentAdverts;

    return (
        <Container>
            <AdvertsSearch />
            {actualAdverts.length ? (<AdvertsList adverts={actualAdverts} />) :
                (
                    <EmptyPage>
                    <Text>Sorry! No such cars there</Text>
                    <EmptyImage/>
                    </EmptyPage>
                    
                )}            
            {showLoadMore & !useFilters ? (<Btn type="button" onClick={handleClick}>
                Load more
            </Btn>) :
                <p></p>}
            
        </Container>
    )
}