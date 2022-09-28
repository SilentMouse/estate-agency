import { IUser } from "./User";

export interface IDeveloper {
    id: number;
    title: string;
    logotype: string;

    director: IUser;
    phone: number;
    email: string;
    website: string;
    description: string;
    contactPersonName: string;
    contactPersonPhone: string;
    contactPersonEmail: string;
}