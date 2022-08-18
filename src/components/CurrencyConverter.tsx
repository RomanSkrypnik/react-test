import React, {FC, useEffect, useState} from 'react';
import {CurrencyInput} from "./CurrencyInput";
import {CurrencyItemDto} from "../ts";

interface Props {
    items: CurrencyItemDto[];
}

export const CurrencyConverter: FC<Props> = ({items}) => {
    const [firstVal, setFirstVal] = useState(0);
    const [secondVal, setSecondVal] = useState(0);
    const [firstSelect, setFirstSelect] = useState<number>(items[0].value);
    const [secondSelect, setSecondSelect] = useState<number>(items[1].value);
    const [relation, setRelation] = useState(0);

    useEffect(() => {
        const relation = calculateRelation();
        setSecondVal(+(firstVal * relation).toFixed(4));
    }, [firstSelect]);

    useEffect(() => {
        const relation = calculateRelation();
        setFirstVal(+(secondVal / relation).toFixed(4));
    }, [secondSelect]);

    const calculateRelation = () => {
        const relation = +(firstSelect / secondSelect).toFixed(4);
        setRelation(relation);
        return relation;
    };

    const handleFirstInputChange = (val: number) => {
        setFirstVal(val);
        relation && setSecondVal(+(val * relation).toFixed(4));
    };

    const handleSecondInputChange = (val: number) => {
        setSecondVal(val);
        relation && setFirstVal(+(val / relation).toFixed(4));
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
