import { useSelector } from 'react-redux';
// import { selectorAdverts, selectorCurrentAdverts } from 'redux/adverts/selectors';
import { selectorFavoriteAdverts } from 'redux/adverts/selectors';

import AdvertListItem from 'components/AdvertListItem';
import { List } from './AdvertList.styled';

export default function AdvertsList({adverts}) {

  // const adverts = useSelector(selectorCurrentAdverts);

  const favoriteAdverts = useSelector(selectorFavoriteAdverts);
  const favoritesId = favoriteAdverts.map(advert => advert.id);
  
  return (
    <List>
      {adverts.map(advert => (
        <AdvertListItem
          key={advert.id}
          advert={advert}
          isFavorite={favoritesId.includes(advert.id)}
        />
      ))}
    </List>
  );
}
