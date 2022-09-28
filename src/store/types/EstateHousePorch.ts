import { IEstate } from "./Estate";
import { IEstateHouse } from "./EstateHouse";

// ЖК -> Дом -> Подъезд
export interface IEstateHousePorch {
    id?: number;
    housingEstate?: IEstate;
    housingEstateHouse?: IEstateHouse;
    number?: number;
    elevators?: number;
    floorsTotal: number;
    apartmentsCount: number;
}