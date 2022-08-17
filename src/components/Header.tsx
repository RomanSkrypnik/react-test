import React from 'react';
import {useFetchHeaderCurrencies} from "../hooks";
import {Container, ListGroup, Nav, Navbar} from "react-bootstrap";

export const Header = () => {
    const {data: currencies} = useFetchHeaderCurrencies();

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Currencies</Navbar.Brand>
                <Nav>
                    <ListGroup horizontal>
                        {
                            currencies?.map(({cc, rate}, idx) =>
                                <ListGroup.Item key={idx}>{cc} | {rate}</ListGroup.Item>
                            )
                        }
                    </ListGroup>
                </Nav>
            </Container>
        </Navbar>
    );
};
