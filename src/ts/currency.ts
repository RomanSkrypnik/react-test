export interface CurrencyDto {
    r030: string;
    txt: string;
    rate: number;
    cc: string;
    exchangedate: string;
}

export interface CurrencyOnChangeParams {
    inputVal?: string | number;
    selectVal?: string
}
