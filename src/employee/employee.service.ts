import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployeeService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createEmployeeDto: Prisma.employeeCreateInput) {
    return this.databaseService.employee.create({
      data: createEmployeeDto,
    });
  }

  async findAll(role?: 'ADMIN' | 'INTERN' | 'MANAGER' | 'USER' | 'ENGINEER' | 'HR' | 'OTHER') {
    if (role) {
      return this.databaseService.employee.findMany({
        where: { role },
      });
    }
    return this.databaseService.employee.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.employee.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateEmployeeDto: Prisma.employeeUpdateInput) {
    return this.databaseService.employee.update({
      where: { id },
      data: updateEmployeeDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.employee.delete({
      where: { id },
    });
  }
}
