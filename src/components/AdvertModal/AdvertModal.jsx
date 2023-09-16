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
  ItemValue
} from './AdvertModal.styled';
import getCity from 'utils/getCity';
import getCountry from 'utils/getCountry';

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
    // accessories,
    // functionalities,
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
        </div>
        <div>
          <InfoTitle>Rental Conditions:</InfoTitle>
          <RentalConditionsList>
            <li>
              {minAgeArray[0]}: <ItemValue>{minAgeArray[1]}</ItemValue>
            </li>
            <li> {rentalConditionsArray[1]}</li>
            <li>{rentalConditionsArray[2]}</li>
            <li>
              Mileage: <ItemValue>{millageChanged}</ItemValue>
            </li>
            <li>
              Price: <ItemValue>{rentalPrice}</ItemValue>
            </li>
          </RentalConditionsList>
        </div>
      </ContainerInfo>
    </Container>
  );
}
