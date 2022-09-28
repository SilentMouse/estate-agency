import { IEstate } from "./Estate";
import { IEstateHouse } from "./EstateHouse";
import { IEstateHousePorch } from "./EstateHousePorch";


// ЖК -> Дом -> Подъезд -> Этаж
export interface IEstateHousePorchStorey {
    id: number;
    housingEstate: IEstate;
    housingEstateHouse: IEstateHouse;
    housingEstateHousePorch: IEstateHousePorch;
    layout: string;
    number: number;
    // Кол - во квартир на площадке
    roominess: number;
    // Высота потолков
    ceiling: number;
}