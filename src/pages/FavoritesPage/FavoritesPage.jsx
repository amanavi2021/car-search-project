import React from "react";
import { useSelector } from "react-redux";
import { selectorFavoriteAdverts } from "redux/adverts/selectors";
import AdvertListItem from "components/AdvertListItem";
import { List } from "../../components/AdvertsList/AdvertList.styled";

export default function FavoritesPage() {
    
    const favoriteAdverts = useSelector(selectorFavoriteAdverts);

    return (
        <div>
            <p>Favorites</p>
        <List>
                {favoriteAdverts.map(advert => (
                    <AdvertListItem
                        key={advert.id}
                        advert={advert}
                        isFavorite={favoriteAdverts.includes(advert)} />
            ))}
            

        </List>
        </div>
       
    )
}