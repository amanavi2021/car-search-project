
import { Container } from "./AdvertsSearch.styled";
import brands from './makes.json';
import { nanoid } from "nanoid";


export default function AdvertsSearch() {
    
    return (
        <Container>
            <form>
                <label htmlFor="brand">Car brand</label>
                <input list="car-brands" id="brand" name="brand" autoComplete="off" placeholder="Enter the text"/>
                <datalist id="car-brands">
                    {brands.map(brand => (<option key={nanoid()}
                        value={brand}></option>
                    ))}    
                </datalist>

                <label htmlFor="price">Price/ 1 hour </label>
                <input list="car-prices" id="price" name="price" autoComplete="off" placeholder="To $"/>
                <datalist id="car-prices">
                    <option value="30"></option>
                    <option value="40"></option>
                    <option value="50"></option>
                </datalist>
                <label htmlFor="milleage-from">Сar mileage / km</label>
                <input type='number' id="milleage-from" name="milleage-from" autoComplete="off" placeholder="From"/>
                <input type='number' id="milleage-to" name="milleage-to" autoComplete="off" placeholder="To"/>
                <button type="submit">
                    Search
                </button>
            </form>
        </Container>
    )
}