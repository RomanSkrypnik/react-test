import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {Form} from "react-bootstrap";

interface Props {
    inputValue: string;
    selectValue: number;
    onInputChange: (val: number) => void;
    onSelectChange: (val: number) => void;
    items: { value: number, text: string }[];
}

export const CurrencyInput: FC<Props> = ({selectValue, inputValue, onSelectChange, onInputChange, items}) => {
    const [inputVal, setInputVal] = useState<string>(inputValue);
    const [selectVal, setSelectVal] = useState<number>(selectValue);

    useEffect(() => {
        setInputVal(inputValue);
    }, [inputValue]);

    const handleInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        const {value} = target;
        setInputVal(value);
        onInputChange(+value);
    };

    const handleSelectChange = ({target}: ChangeEvent<HTMLSelectElement>) => {
        const {value} = target;
        setSelectVal(+value);
        onSelectChange(+value);
    };

    return (
        <div className='d-flex mt-3'>
            <Form.Group controlId="formBasicPassword">
                <Form.Control onChange={handleInputChange} value={inputVal} type="number"/>
            </Form.Group>
            <Form.Select value={selectVal} onChange={handleSelectChange} className='ms-3 w-auto'
                         aria-label="Default select example">
                {
                    items.map(({value, text}, idx) => (
                        <option value={value} key={idx}>{text}</option>
                    ))
                }
            </Form.Select>
        </div>
    );
};
