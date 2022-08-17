import React from 'react';
import {useFetchHeaderCurrencies} from "../hooks";
import {Container, ListGroup, Nav, Navbar} from "react-bootstrap";

export const Header = () => {
    const {data} = useFetchHeaderCurrencies();

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Currencies</Navbar.Brand>
                <Nav>
                    <ListGroup horizontal>
                        {
                            data?.map(({cc, rate}, idx) =>
                                <ListGroup.Item key={idx}>{cc} | {rate}</ListGroup.Item>
                            )
                        }
                    </ListGroup>
                </Nav>
            </Container>
        </Navbar>
    );
};
