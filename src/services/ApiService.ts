import $api from "../http";
import {CurrencyDto} from "../ts";

export class ApiService {

    public static fetchAll() {
        return $api.get<CurrencyDto[]>('/NBUStatService/v1/statdirectory/exchange?json')
    }

}
