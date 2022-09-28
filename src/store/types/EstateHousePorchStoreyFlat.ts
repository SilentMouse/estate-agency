import { IDeveloper } from "./Developer";
import { IEstate } from "./Estate";
import { IEstateHouse } from "./EstateHouse";
import { IEstateHousePorch } from "./EstateHousePorch";
import { IEstateHousePorchStorey } from "./EstateHousePorchStorey";



// ЖК -> Дом -> Подъезд -> Этаж
export interface IEstateHousePorchStoreyFlat {
    id: number;
    housingEstate: IEstate;
    housingEstateHouse: IEstateHouse;
    housingEstateHousePorch: IEstateHousePorch;
    housingEstateHousePorchStorey: IEstateHousePorchStorey;
    developer: IDeveloper;
    // Планировка
    layout: string;
    price: number;
    // Номер на площадке
    room: number;
    // Кол - во комнат
    rooms: number;
    // Кол - во уровней (этажей)
    levels: number;
    spaceTotal: number;
    spaceLiving: number;
    spaceKitchen: number;
    description: string;
    // sale, sold, reserved
    status: string;
}