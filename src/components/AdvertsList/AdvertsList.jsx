import { useSelector } from 'react-redux';
import { selectorAdverts } from 'redux/adverts/selectors';
import AdvertListItem from 'components/AdvertListItem';

export default function AdvertsList() {
  const adverts = useSelector(selectorAdverts);
  console.log('adverts', adverts);

  return (
    <ul>
      {adverts.map(advert => (
        <AdvertListItem key={advert.id} advert={advert} />
      ))}
    </ul>
  );
}
