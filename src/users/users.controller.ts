import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
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

        return [];
    }
    @Get(':id') // get user by id
    findOne(@Param('id') id: string) {
        return { id };
    }
   
    @Post() // create user
    create(@Body() users:{
        name: string,
        age: number,
        email: string,
        password: string
    }) {
        return users;
    }
    @Put(':id') // update user by id
    update(@Param('id') {id: string},@Body() users:{}) {
        return {  ...users };
    }
    @Delete(':id') // delete user by id
    remove(@Param('id') id: string) {
        return {id};
    }
    @Patch(':id') // patch user by id
    patch(@Param('id') id: string,@Body() users:{}){
        return {id,...users};
    }
}
