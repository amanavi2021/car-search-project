// import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import getCity from 'utils/getCity';
import getCountry from 'utils/getCountry';
import {
  Container,
  ContainerInfo,
  ImageAuto,
  TitleAuto,
  Model,
  InfoAuto,
  Description,
    InfoTitle,
    RentalConditionsList,
    ItemValue,
    RentalConditionsListItem, 
  LinkPhone,
  AccesAndFuncList
} from './AdvertModal.styled';

export default function AdvertModal({ advert }) {
  if (!advert) {
    return;
  }

  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    // rentalCompany,
    address,
    rentalConditions,
    mileage,
  } = advert;

  const city = getCity(address);
  const country = getCountry(address);
  const rentalConditionsArray = rentalConditions.split('\n');
  const minAgeArray = rentalConditionsArray[0].split(': ');

  const reg = /(?=\B(?:\d{3})+(?!\d))/g;
  const millageChanged = mileage.toString().replace(reg, ',');
  
    const phoneNumber = `tel:+380730000000`;

  return (
    <Container>
      <ImageAuto src={img} alt={make} />
      <ContainerInfo>
        <div>
          <TitleAuto>
            {make} <Model>{model}</Model>, {year}
          </TitleAuto>
          <InfoAuto>
            <p>
              {city} | {country} | Id: {id} | Year: {year} | Type: {type}
            </p>
            <p>
              Fuel Consumption: {fuelConsumption} | Engine Size: {engineSize}
            </p>
          </InfoAuto>

          <Description>{description}</Description>
        </div>

        <div>
          <InfoTitle>Accessories and functionalities:</InfoTitle>
          <AccesAndFuncList>
            {accessories.map(accessory => (<li key={nanoid()}>{accessory}</li>))}
          </AccesAndFuncList>
          <AccesAndFuncList>
            {functionalities.map(functionality=> (<li key={nanoid()}>{functionality}</li>))}
          </AccesAndFuncList>
        </div>
        <div>
          <InfoTitle>Rental Conditions:</InfoTitle>
          <RentalConditionsList>
            <RentalConditionsListItem>
              {minAgeArray[0]}: <ItemValue>{minAgeArray[1]}</ItemValue>
            </RentalConditionsListItem>
            <RentalConditionsListItem> {rentalConditionsArray[1]}</RentalConditionsListItem>
            <RentalConditionsListItem>{rentalConditionsArray[2]}</RentalConditionsListItem>
            <RentalConditionsListItem>
              Mileage: <ItemValue>{millageChanged}</ItemValue>
            </RentalConditionsListItem>
            <RentalConditionsListItem>
              Price: <ItemValue>{rentalPrice}</ItemValue>
            </RentalConditionsListItem>
          </RentalConditionsList>
        </div>
          </ContainerInfo>
          <LinkPhone to={phoneNumber}>
              Rental car
          </LinkPhone>
    </Container>
  );
}
