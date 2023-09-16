import React from "react";
import { useEffect } from "react";
import { getAdverts, getAdvertsByPage } from "redux/adverts/operations";
import { useDispatch } from "react-redux"; 
import AdvertsList from "components/AdvertsList";


export default function CatalogPage() {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAdverts());
        // dispatch(getAdvertsByPage());
    }, [dispatch]);

    const handleClick= e => {
        dispatch(getAdvertsByPage(2))
    };

    return (
        <div>
            <AdvertsList />
            <button type="button" onClick={handleClick}>
                Load more
            </button>
        </div>
    )
}