// import { NavLink } from "react-router-dom"; 
import { Navigation, NavigateItem } from "./Nav.styled";

export default function Nav() {
    return (
        <Navigation>
             <NavigateItem to="/">
                Home
            </NavigateItem>    
            <NavigateItem to="/catalog">
                Catalog
            </NavigateItem>
            <NavigateItem to="/favorites">
                Favorites
            </NavigateItem>
        </Navigation>
    )
}