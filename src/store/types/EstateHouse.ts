import { IEstate } from "./Estate";
import { IEstateHousePorch } from "./EstateHousePorch";

export interface IEstateHouse {
    id?: number;
    housingEstate?: IEstate;
    code?: string;
    title: string;
    material?: string;
    latitude?: number;
    longitude?: number;
    startConstruction?: Date|string;
    endConstruction?: Date|string;
    description?: string;
    commissioned?: boolean;
    quartal: number;
    year: number;
    porches: IEstateHousePorch[];
}