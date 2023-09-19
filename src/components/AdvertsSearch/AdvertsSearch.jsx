
import { Container } from "./AdvertsSearch.styled";

export default function AdvertsSearch() {
    
    return (
        <Container>
            <form>
                <label for="brand">Car brand</label>
                <input list="car-brands" id="brand" name="brand" autoComplete="off" placeholder="Enter the text"/>
                <datalist id="car-brands">
                    <option value="Buick"></option>
                    <option value="Volvo"></option>
                    <option value="HUMMER"></option>
                </datalist>

                <label for="price">Price/ 1 hour </label>
                <input list="car-prices" id="price" name="price" autoComplete="off" placeholder="To $"/>
                <datalist id="car-prices">
                    <option value="30"></option>
                    <option value="40"></option>
                    <option value="50"></option>
                </datalist>
                <label for="milleage-from">Сar mileage / km</label>
                <imput type='number' id="milleage-from" name="milleage-from" autoComplete="off" placeholder="From"/>
                <imput type='number' id="milleage-to" name="milleage-to" autoComplete="off" placeholder="To"/>
                <button type="submit">
                    Search
                </button>
            </form>
        </Container>
    )
}