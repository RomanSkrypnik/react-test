import React from 'react';
import {useFetchCurrencies} from "../hooks";
import {Container, ListGroup, Nav, Navbar} from "react-bootstrap";

export const Header = () => {

    const {isLoading, data} = useFetchCurrencies();

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Currencies</Navbar.Brand>
                <Nav>
                    <ListGroup horizontal>
                        {
                            data?.data.map(({cc}, idx) =>
                                <ListGroup.Item key={idx}>{cc} | Buy {buy} | Sale {sale}</ListGroup.Item>
                            )
                        }
                    </ListGroup>
                </Nav>
            </Container>
        </Navbar>
    );
};
