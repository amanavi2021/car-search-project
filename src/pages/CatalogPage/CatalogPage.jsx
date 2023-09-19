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
    const filtres = useSelector(selectorFilters);
    const filtredAdverts = advertsAll.filter(advert => {
        return (filtres.make === advert.make)
    });

    console.log("filtredAdverts", filtredAdverts);

    const actualAdverts = filtredAdverts.length ? filtredAdverts : currentAdverts;
    console.log("actualAdverts", actualAdverts);

    return (
        <Container>
            <AdvertsSearch />
            <AdvertsList adverts={actualAdverts}/>
            {showLoadMore && <Btn type="button" onClick={handleClick}>
                Load more
            </Btn>}
            
        </Container>
    )
}