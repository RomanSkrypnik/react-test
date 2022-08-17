import $api from "../http";
import {CurrencyDto} from "../ts";

export class ApiService {

    public static fetchAll() {
        return $api.get<CurrencyDto[]>('/p24api/pubinfo?json&exchange&coursid=5')
    }

}
