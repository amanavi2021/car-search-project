import React from "react";
import { useSelector } from "react-redux";
import { selectorFavoriteAdverts } from "redux/adverts/selectors";
import AdvertListItem from "components/AdvertListItem";
import { Container, List } from "./FavoritesPage.styled";

export default function FavoritesPage() {
    
    const favoriteAdverts = useSelector(selectorFavoriteAdverts);

    return (
        <Container>
        <List>
                {favoriteAdverts.map(advert => (
                    <AdvertListItem
                        key={advert.id}
                        advert={advert}
                        isFavorite={favoriteAdverts.includes(advert)} />
            ))}
        </List>
        </Container>
       
    )
}