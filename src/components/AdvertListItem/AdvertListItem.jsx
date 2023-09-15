
export default function AdvertListItem({ advert }) {
    
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
        rentalCompany,
        address,
        rentalConditions,
        mileage,
    } = advert;
    
    const getCountry = address => {
        const addressArray = address.replace(/,/gi, '').split(' ');
        return addressArray[addressArray.length - 1];
    };

    const getSity = address => {
        const addressArray = address.replace(/,/gi, '').split(' ');
        if (addressArray.length < 2) {
          return ""
        }
        return addressArray[addressArray.length - 2];
    };


    const country = getCountry(address);
    const sity = getSity(address);
    

    return (
        <li>
            <div>
                <img
                    src={img}
                    alt={make}
                    width="300"
                />
                <div>
                    <p>{make} <span>{model}</span>, {year}</p>
                    <p>{rentalPrice}</p>
                </div>
                <p>
                    <span>{sity} | </span>
                    <span>{country} | </span>
                    <span>{rentalCompany} | </span>

                </p>

                <p>
                    <span>{type} | </span>
                    <span>{model} | </span>
                    <span>{id} | </span>
                    {/* Power liftgate */}
                    <span>{mileage} | </span>
                    
                </p>
                <button type="button">
                    Learn more
                </button>

            </div>
        </li>
    )
    
}