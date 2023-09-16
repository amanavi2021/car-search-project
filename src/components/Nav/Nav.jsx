import { NavLink } from "react-router-dom"; 
import { Navigation } from "./Nav.styled";

export default function Nav() {
    return (
        <Navigation>
             <NavLink to="/">
                Home
            </NavLink>    
            <NavLink to="/catalog">
                Catalog
            </NavLink>
            <NavLink to="/favorites">
                Favorites
            </NavLink>
        </Navigation>
    )
}