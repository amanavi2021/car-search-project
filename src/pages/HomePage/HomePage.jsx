import React from "react";
import { Container, Title,ServicesList } from "./HomePage.styled";

export default function HomePage() {
    return (
        <Container>
            <Title> Rent a new car with delivery to the address</Title>
            <ServicesList>
            <li>More than 150 cars in the fleet </li>
            <li>Registration up to 30 minutes </li>
            <li>Possible travel abroad </li>
            <li>Online support 24/7 </li>
            </ServicesList>
        </Container>
    )
}