import React from "react";
import { useSelector } from "react-redux";
import { selectorFavoriteAdverts } from "redux/adverts/selectors";
import AdvertListItem from "components/AdvertListItem";
import { Container, List } from "./FavoritesPage.styled";
import {EmptyImage, EmptyPage, Text } from "pages/CatalogPage/CatalogPage.styled";

export default function FavoritesPage() {
    
    const favoriteAdverts = useSelector(selectorFavoriteAdverts);

    return (
        <Container>
            {favoriteAdverts.length ? (
             <List>
                {favoriteAdverts.map(advert => (
                    <AdvertListItem
                        key={advert.id}
                        advert={advert}
                        isFavorite={favoriteAdverts.includes(advert)} />
            ))}
          </List>
            )
                :
        (<EmptyPage>
                    <Text>There is no one adverts in favorites </Text>
                    <EmptyImage/>
                    </EmptyPage>)}
            
       
        </Container>
       
    )
}