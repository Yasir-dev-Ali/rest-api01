import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
    constructor(private readonly  userServices: UsersService ) {}
    // users controller
    /* 
    Get all users,
    Get user by id,
    Create user,:Post
    Update user by id,:Put
    Delete user by id
    patch user by id
     */
    @Get() // get all users
    findAll(@Query('role') role?:'admin'|'user'|'guest') {

        return this.userServices.findAll();
    }
    @Get(':id') // get user by id
    findOne(@Param('id') id: string) {
       return this.userServices.findOne(id);
    }
   
    @Post() // create user
    create(@Body() users:{
        name: string,
        age: number,
        email: string,
        password: string,
        role: 'admin'|'user'|'guest'

    }) {
        return this.userServices.create(users);
    }
    // @Put(':id') // update user by id
    // update(@Param('id') {id: string},@Body() users:{}) {
    //     return {  ...users };
    // }
    @Delete(':id') // delete user by id
    remove(@Param('id') id: string) {
        return this.userServices.remove(id);
    }
    @Patch(':id') // patch user by id
    update(@Param('id') id: string, @Body() users:{
        name: string,
        age: number,
        email: string,
        password: string,
        role: 'admin'|'user'|'guest'
    }) {
        return this.userServices.update(id, users);
    }
   
}
