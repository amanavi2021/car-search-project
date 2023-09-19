import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectorTotal, selectorCurrentAdverts, selectorFilters, selectorAdverts } from "redux/adverts/selectors";
import { getAdverts, getAdvertsByPage } from "redux/adverts/operations";
import { useDispatch } from "react-redux"; 
import AdvertsList from "components/AdvertsList";
import AdvertsSearch from "components/AdvertsSearch";
import { Container, Btn } from "./CatalogPage.styled";

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
    // console.log('filters.make !== ""', filters.make !== "");
    // console.log('filters.price !== 0', filters.price !== 0);
     console.log("useFilters", useFilters);
    let filteredAdverts = [];
    if (useFilters) {
        filteredAdverts = advertsAll.filter(advert => {
        const price = Number(advert.rentalPrice.replace("$", ''));
        // console.log("price", Number(advert.rentalPrice.replace("$", '')));

        return (
            (filters.make === advert.make || filters.make === "")
            &&
             (price <= filters.price || filters.price === "")
             && ((filters.mileageFrom <= advert.mileage || filters.mileageFrom === "")                
             && (advert.mileage <= filters.mileageTo || filters.mileageFrom === ""))
        )
    });

     console.log("filtredAdverts", filteredAdverts);          
    }
    

    const actualAdverts = filteredAdverts.length ? filteredAdverts : currentAdverts;
    // console.log("actualAdverts", actualAdverts);

    return (
        <Container>
            <AdvertsSearch />
            <AdvertsList adverts={actualAdverts}/>
            {showLoadMore & !filteredAdverts.length ? (<Btn type="button" onClick={handleClick}>
                Load more
            </Btn>) :
            (<p></p>)}
            
        </Container>
    )
}