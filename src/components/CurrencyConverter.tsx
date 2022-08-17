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
        const relation = calculateRelation();
        setSecondVal(firstVal * relation);
    }, [firstSelect]);

    useEffect(() => {
        const relation = calculateRelation();
        setFirstVal(secondVal * relation);
    }, [secondSelect]);

    const calculateRelation = () => {
        const relation = firstSelect / secondSelect;
        setRelation(relation);
        return relation;
    };

    const handleFirstInputChange = (val: number) => {
        setFirstVal(val);
        relation && setSecondVal(val * relation);
    };

    const handleSecondInputChange = (val: number) => {
        setSecondVal(val);
        relation && setFirstVal(val / relation);
    };

    return (
        <>
            <CurrencyInput
                inputValue={`${firstVal}`}
                selectValue={firstSelect}
                items={items}
                onInputChange={handleFirstInputChange}
                onSelectChange={(val: number) => setFirstSelect(val)}
            />
            <CurrencyInput
                inputValue={`${secondVal}`}
                selectValue={secondSelect}
                items={items}
                onInputChange={handleSecondInputChange}
                onSelectChange={(val: number) => setSecondSelect(val)}
            />
        </>
    );
};
