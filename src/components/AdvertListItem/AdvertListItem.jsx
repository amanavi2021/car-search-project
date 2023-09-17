import { useState } from "react";
import Modal from "components/Modal";
import AdvertModal from "components/AdvertModal/AdvertModal";
import getCity from "utils/getCity";
import getCountry from "utils/getCountry";
import Button from "components/Button";
import { Container, ImageAuto, TitleAuto, Model, InfoAuto } from "./AdvertListItem.styled";


export default function AdvertListItem({ advert }) {
    
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => setShowModal(!showModal);

    const {
        id,
        year,
        make,
        model,
        type,
        img,
        // description,
        // fuelConsumption,
        // engineSize,
        // accessories,
        // functionalities,
        rentalPrice,
        rentalCompany,
        address,
        // rentalConditions,
        mileage,
    } = advert;
    
    

     const country = getCountry(address);
    const city = getCity(address);
    

    return (
        <li>
            <Container>
                <ImageAuto
                    src={img}
                    alt={make}
                />
                <TitleAuto>
                    <p>{make} <Model>{model}</Model>, {year}</p>
                    <p>{rentalPrice}</p>
                </TitleAuto>
                <InfoAuto>
                <p>
                    <span>{city} | </span>
                    <span>{country} | </span>
                    <span>{rentalCompany} | </span>

                </p>

                <p>
                    <span>{type} | </span>
                    <span>{model} | </span>
                    <span>{id} | </span>
                    {/* Power liftgate */}
                    
                </p>
                </InfoAuto>
               
                <Button text={"Learn more"} onClick={toggleModal} />
                {showModal && (<Modal onClose={toggleModal}>
                    <AdvertModal advert={advert}/>
                </Modal>)}

            </Container>
        </li>
    )
    
}