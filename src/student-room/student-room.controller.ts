import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StudentRoomService } from './student-room.service';
import { StudentRoom } from './schemas/student-room.schema';
import { CreateStudentRoomDto } from './dto/create-student-room.dto';
import { UpdateStudentRoomDto } from './dto/update-student-room.dto';
import { Student } from './interface/student.interface';

@Controller('student-room')
export class StudentRoomController {
  constructor(private readonly studentRoomService: StudentRoomService) {}

  @Get()
  async findAll(): Promise<StudentRoom[]> {
    return this.studentRoomService.findAllStudentRoom();
  }

  @Get('detail')
  async findAllWithDetails(): Promise<StudentRoom[]> {
    return this.studentRoomService.findAllStudentRoomDetails();
  }

  @Get('room/:id')
  async findAllStudentsByRoomId(@Param('id') id: string): Promise<Student[]> {
    return this.studentRoomService.findAllStudentsByRoomId(id);
  }

  @Post()
  async create(@Body() createStudentDto: CreateStudentRoomDto) {
    return this.studentRoomService.create(createStudentDto);
  }

  @Put(':id')
  async updated(
    @Param('id') id: string,
    @Body() updateStudentRoomDto: UpdateStudentRoomDto,
  ): Promise<StudentRoom> {
    return this.studentRoomService.update(id, updateStudentRoomDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.studentRoomService.delete(id);
  }
}
