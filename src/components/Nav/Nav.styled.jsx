import { NavLink } from "react-router-dom"; 
import styled from "@emotion/styled";

export const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    gap: 40px;
    margin-left: 120px;
`;

export const NavigateItem = styled(NavLink)`
   font-size: 18px;
   font-weight: 600;
   color: var(--blue-color);
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover {
    color: var(--dark-blue-color);
}
`
