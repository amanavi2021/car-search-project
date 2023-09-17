import React from "react";
import { useEffect, useState } from "react";
import { getAdverts, getAdvertsByPage } from "redux/adverts/operations";
import { useDispatch } from "react-redux"; 
import AdvertsList from "components/AdvertsList";
import { Btn } from "./CatalogPage.styled"

export default function CatalogPage() {
    const [page, setPage] = useState(2);
    
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getAdverts());
    }, []);

    const handleClick = () => {
        setPage(page => page + 1);
        dispatch(getAdvertsByPage({page}))
    };

    return (
        <div>
            <AdvertsList />
            <Btn type="button" onClick={handleClick}>
                Load more
            </Btn>
        </div>
    )
}