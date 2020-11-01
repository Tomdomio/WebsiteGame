import { Role } from "./role";
export class User {
    id: number;
    username: string;
    password: string;
    hoten: string;
    sotien: number;
    role: Role;
    token?: string;
}