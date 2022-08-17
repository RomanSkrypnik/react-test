import React from 'react';
import {CurrencyInput} from "./CurrencyInput";

export const Content = () => {

    return (
        <div className='d-flex'>
            <CurrencyInput items={[{value: 1, text: 'test'}]}/>
        </div>
    );
};
