import { Role } from './role.model';

export class user {
    id!: string;
    title!: string;
    firstName!: string;
    lastName!: string;
    email!: string;
    role!: Role;
}
