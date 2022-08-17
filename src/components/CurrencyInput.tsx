import React, {ChangeEvent, FC, useState} from 'react';
import {Form} from 'react-bootstrap';
import {CurrencyOnChangeParams} from "../ts";

interface Props {
    onChange?: (data: CurrencyOnChangeParams) => {};
    items: { value: string | number, text: string }[];
}

export const CurrencyInput: FC<Props> = ({onChange, items}) => {
    const [inputVal, setInputVal] = useState<string>();
    const [selectVal, setSelectVal] = useState<string | number>();


    const handleChange = () => {
        onChange({inputVal, selectVal});
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setInputVal(value);

    };

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const {value} = e.target;
        setSelectVal(value);

    };

    return (
        <div className='d-flex'>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="text" value={inputVal} onChange={handleInputChange}/>
            </Form.Group>
            <Form.Select onChange={handleSelectChange} aria-label="Default select example">
                {
                    items.map(({value, text}) => (
                        <option value={value}>{text}</option>
                    ))
                }
            </Form.Select>
        </div>
    );
};
