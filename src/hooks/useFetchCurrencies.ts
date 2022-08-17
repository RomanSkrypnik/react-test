import {useQuery} from "react-query";
import {ApiService} from "../services";

const fetchCurrencies = async () => {
    return await ApiService.fetchAll();
};

export const useFetchHeaderCurrencies = () => {
    return useQuery(['header-currencies'], fetchCurrencies, {
        select: ({data}) => data.filter(({cc}) => cc === 'USD' || cc === 'EUR')
    });
};

export const useFetchCurrencies = () => {
    return useQuery(['currencies'], fetchCurrencies, {
        select: ({data}) => data.map(({cc: text, rate: value}) => ({text, value}))
    });
}
