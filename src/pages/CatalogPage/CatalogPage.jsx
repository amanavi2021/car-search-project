import React from "react";
import { useEffect } from "react";
import { getAdverts } from "redux/adverts/operations";
import { useDispatch } from "react-redux"; 
import AdvertsList from "components/AdvertsList";




export default function CatalogPage() {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAdverts());
    }, [dispatch]);

    return (
        <div>
            <p>Catalog Page</p> 
            <AdvertsList />
        </div>
    )
}