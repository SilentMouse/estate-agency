import { IDeveloper } from "./Developer";
import { IEstateHouse } from "./EstateHouse";
import { IUser } from "./User";

export interface IEstate {
    id?: number;
    isEnabled?: boolean;
    code?: string;
    title: string;
    logotype?: string;
    userUid?: IUser;
    developer: string;
    legalEntity: string;
    latitude?: number;
    longitude?: number;
    houses: IEstateHouse[]
}



export interface CreateEstateDTO {
    id: number;
    isEnabled: boolean;
    code: string;
    title: string;
    logotype: string;
    userUid: IUser;
    developer: IDeveloper;
    latitude: number;
    longitude: number;
}