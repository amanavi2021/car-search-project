import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "components/Modal";
import AdvertModal from "components/AdvertModal/AdvertModal";
import getCity from "utils/getCity";
import getCountry from "utils/getCountry";
import { setFavorite } from "redux/adverts/advertsSlice";
// import { selectorFavoriteAdverts } from "redux/adverts/selectors";
import Button from "components/Button";
import { CatalogItem, Container, ImageAuto, TitleAuto, Model, InfoAuto, FavoriteBtn, Heart, FavoriteHeart } from "./AdvertListItem.styled";
import svg from "../../images/sprite.svg";

export default function AdvertListItem({ advert, isFavorite }) {
    
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
        // mileage,
    } = advert;
    
    const country = getCountry(address);
    const city = getCity(address);
    // const favotiteAdverts = useSelector(selectorFavoriteAdverts);
    // const isFavorite = favotiteAdverts.includes(advert);
    console.log("isFavorite", isFavorite);

    const dispatch = useDispatch();

    const handleClickFavorite = () => {
        dispatch(setFavorite(advert))
    };

    return (
        <CatalogItem>
            <Container>
                <ImageAuto
                    src={img}
                    alt={make}
                />
                <FavoriteBtn type="button"
                    onClick={handleClickFavorite}>
                    {isFavorite ?
                    (<FavoriteHeart width="18" height="18">
                      <use href={svg+'#heart'}></use>
                    </FavoriteHeart> ): (
                      <Heart width="18" height="18">
                      <use href={svg+'#heart'}></use>
                    </Heart>  
                    )}
                    
                 </FavoriteBtn>

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
        </CatalogItem>
    )
    
}