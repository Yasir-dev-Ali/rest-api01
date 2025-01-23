import { createUserDto } from "./create-user.dto";
import { PartialType } from "@nestjs/mapped-types";

export class updateUserDto extends PartialType(createUserDto) {
    // name: string;
    // age: number;
    // email: string;
    // password: string;
    // role: 'admin' | 'user' | 'guest';
}