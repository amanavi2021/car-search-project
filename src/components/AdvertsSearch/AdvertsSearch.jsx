
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { updateFilters } from 'redux/adverts/advertsSlice';
import makes from './makes.json';
import { Container } from "./AdvertsSearch.styled";

export default function AdvertsSearch() {
 
    const dispatch = useDispatch();

    let prices = [];
     for (let i = 30; i <= 250; i+=10) {
         prices.push(i);
                        
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        const inputs = e.target.elements;
        // const filters = [...e.target.elements].map(element => ({ [element.name]: element.value }));
        const values = {
            make: inputs.make.value,
            price: inputs.price.value,  
            mileageFrom: inputs.mileageFrom.value,
            mileageTo: inputs.mileageTo.value,
        }
        // console.log("make", e.target.elements.make.value);
        dispatch(updateFilters(values));
    };

  
   


    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <label htmlFor="make">Car brand</label>
                <input list="car-makes" id="brand" name="make" autoComplete="off" placeholder="Enter the text"/>
                <datalist id="car-makes">
                    {makes.map(make => (<option key={nanoid()}
                        value={make}></option>
                    ))}    
                </datalist>

                <label htmlFor="price">Price/ 1 hour </label>
                <input list="car-prices" id="price" name="price" autoComplete="off" placeholder="To $"/>
                <datalist id="car-prices">
                    {prices.map(price => (<option key={nanoid()}
                        value={price}></option>))}
                    {/* <option value="30"></option>
                    <option value="40"></option>
                    <option value="50"></option> */}
                </datalist>
                <label htmlFor="mileageFrom">Сar mileage / km</label>
                <input type='number' id="mileageFrom" name="mileageFrom" autoComplete="off" placeholder="From"/>
                <input type='number' id="mileageTo" name="mileageTo" autoComplete="off" placeholder="To"/>
                <button type="submit">
                    Search
                </button>
            </form>
        </Container>
    )
}