import React from 'react';
import {CurrencyConverter} from "./CurrencyConverter";
import {useFetchCurrencies} from "../hooks";
import {Container} from "react-bootstrap";

export const Content = () => {
    const {data} = useFetchCurrencies();

    return (
        <Container>
            {
                data &&
                <>
                    <CurrencyConverter items={data}/>
                </>
            }
        </Container>
    );
};
