import { IsEmail,IsEnum,IsEmpty,IsString } from "class-validator";
export class createUserDto {
    @IsString()
   @IsEmpty()


    name: string;

    age: number;

    @IsEmail()
    email: string;
    password: string;

    @IsEnum(['admin', 'user', 'guest'], { message: 'Role must be either admin, user or guest' })
    role: 'admin' | 'user' | 'guest';
}
