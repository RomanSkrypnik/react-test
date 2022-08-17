import React from 'react';
import {CurrencyConverter} from "./CurrencyConverter";
import {useFetchCurrencies} from "../hooks";

export const Content = () => {
    const {data} = useFetchCurrencies();

    return (
        <div>
            {
                data &&
                <>
                    <CurrencyConverter items={data}/>
                </>
            }
        </div>
    );
};
