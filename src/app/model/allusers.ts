import { roles } from "./roles";
import { user_roles } from "./user_roles";

export class allusers {

    id!: number;
    username!: string;
    password!: string;
    roles!: roles[];
    users_roles!: user_roles[];

    /*users_roles!: {
        user_id: number;
        role_id: number;
    }[];*/

}