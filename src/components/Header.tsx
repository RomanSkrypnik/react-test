import React from 'react';
import {useFetchCurrencies} from "../hooks";

export const Header = () => {

    const {isLoading, data} = useFetchCurrencies();

    return (
        <header className='header'>
            {
                data?.data.map(({ccy}, idx) => <div>{ccy}</div>)
            }
        </header>
    );
};
