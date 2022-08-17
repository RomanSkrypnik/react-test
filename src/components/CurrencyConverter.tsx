import React, {FC, useEffect, useState} from 'react';
import {CurrencyInput} from "./CurrencyInput";

interface Props {
    items: { value: number, text: string }[];
}

export const CurrencyConverter: FC<Props> = ({items}) => {
    const [firstVal, setFirstVal] = useState(0);
    const [secondVal, setSecondVal] = useState(0);
    const [firstSelect, setFirstSelect] = useState(items[0].value);
    const [secondSelect, setSecondSelect] = useState(items[1].value);
    const [relation, setRelation] = useState<number>();

    useEffect(() => {
        setRelation(firstSelect / secondSelect);
    }, [firstSelect, secondSelect]);

    useEffect(() => {
        if (relation) {
            setFirstVal(firstVal * relation);
        }
    }, [relation]);

    const handleFirstInputChange = (val: number) => {
        setFirstVal(val);
        if (relation) {
            setSecondVal(val * relation);
        }
    };

    const handleSecondInputChange = (val: number) => {
        setSecondVal(val);
        if (relation) {
            setFirstVal(val / relation);
        }
    };

    const handleFirstSelectChange = (val: number) => {
        setFirstSelect(val);
    };

    const handleSecondSelectChange = (val: number) => {
        setSecondSelect(val);
    };

    return (
        <>
            <CurrencyInput
                inputValue={`${firstVal}`}
                selectValue={firstSelect}
                items={items}
                onInputChange={handleFirstInputChange}
                onSelectChange={handleFirstSelectChange}
            />
            <CurrencyInput
                inputValue={`${secondVal}`}
                selectValue={secondSelect}
                items={items}
                onInputChange={handleSecondInputChange}
                onSelectChange={handleSecondSelectChange}
            />
        </>
    );
};
