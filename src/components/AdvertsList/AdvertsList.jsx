import { useSelector } from 'react-redux';
// import { selectorAdverts, selectorCurrentAdverts } from 'redux/adverts/selectors';
import { selectorCurrentAdverts } from 'redux/adverts/selectors';

import AdvertListItem from 'components/AdvertListItem';
import { List } from './AdvertList.styled';

export default function AdvertsList() {
  // const adverts = useSelector(selectorAdverts);
  const adverts = useSelector(selectorCurrentAdverts);
  console.log('adverts', adverts);

  return (
    <List>
      {adverts.map(advert => (
        <AdvertListItem key={advert.id} advert={advert} />
      ))}
    </List>
  );
}
