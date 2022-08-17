import React from 'react';
import {CurrencyConverter} from "./CurrencyConverter";
import {useFetchCurrencies} from "../hooks";
import {Container, Spinner} from "react-bootstrap";

export const Content = () => {
    const {isLoading, data} = useFetchCurrencies();

    return (
        <main className='p-4 vh-100 bg-secondary'>
            <Container className='d-flex flex-column align-items-center'>
                {
                    isLoading && <Spinner animation="border"/>
                }
                {
                    data &&
                    <>
                        <h1 className='text-white'>Currency converter</h1>
                        <CurrencyConverter items={data}/>
                    </>
                }
            </Container>
        </main>
    );
};
