import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
    ParseIntPipe,
    ValidationPipe
  } from '@nestjs/common';
  import { UsersService } from './users.service';
  import { createUserDto } from './dto/create-user.dto';
    import { updateUserDto } from './dto/update.user.dto';
  
  @Controller('users')
  export class UsersController {
    constructor(private readonly userServices: UsersService) {}
  
    @Get() // Get all users, optionally filtered by role
    findAll(@Query('role') role?: 'admin' | 'user' | 'guest') {
      return this.userServices.findAll(role);
    }
  
    @Get(':id') // Get user by ID
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.userServices.findOne(id);
    }
  
    @Post() // Create a new user
    create(@Body(ValidationPipe) createUserDto: createUserDto) {
      return this.userServices.create(createUserDto);
    }
  
    @Delete(':id') // Delete a user by ID
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.userServices.remove(id);
    }
  
    @Patch(':id') // Update specific fields for a user
    patch(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: updateUserDto) {
      return this.userServices.patch(id, updateUserDto);
    }
  }
  