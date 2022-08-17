import {useQuery} from "react-query";
import {ApiService} from "../services";

const fetchCurrencies = async () => {
    return await ApiService.fetchAll();
};

export const useFetchCurrencies = () => {
    return useQuery(['currencies'], fetchCurrencies);
}
