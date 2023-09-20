import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "components/Modal";
import AdvertModal from "components/AdvertModal/AdvertModal";
import getCity from "utils/getCity";
import getCountry from "utils/getCountry";
import getAccessory from "utils/getAccessory";
import { setFavorite } from "redux/adverts/advertsSlice";
// import { selectorFavoriteAdverts } from "redux/adverts/selectors";
import Button from "components/Button";
import {
    CatalogItem, Container, ImageAuto, TitleAuto, Model,
    // InfoAuto,
    FavoriteBtn, Heart, FavoriteHeart, List, ListItem, InfoAuto
} from "./AdvertListItem.styled";
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
        accessories,
        // functionalities,
        rentalPrice,
        rentalCompany,
        address,
        // rentalConditions,
        // mileage,
    } = advert;
    
    const country = getCountry(address);
    const city = getCity(address);
    const accessory = getAccessory(accessories);
    console.log('acc', accessory);
    // const favotiteAdverts = useSelector(selectorFavoriteAdverts);
    // const isFavorite = favotiteAdverts.includes(advert);
    // console.log("isFavorite", isFavorite);

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
                 <List>
                        <ListItem>{city}</ListItem> 
                        <ListItem>{country}</ListItem> 
                        <ListItem>{rentalCompany}</ListItem> 
                        
                </List>
               
                    <List>
                        <ListItem>{type}</ListItem>
                        <ListItem>{model}</ListItem>
                        <ListItem>{id}</ListItem>
                        <ListItem>{accessory}</ListItem>
                </List>
                </InfoAuto>
               
                <Button text={"Learn more"} onClick={toggleModal} />
                {showModal && (<Modal onClose={toggleModal}>
                    <AdvertModal advert={advert}/>
                </Modal>)}

            </Container>
        </CatalogItem>
    )
    
}