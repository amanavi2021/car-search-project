import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";

export default function Logo() {
    return (
        <NavLink to="/">
            <img src={logo} alt="Logo"/>
        </NavLink>
    )
}