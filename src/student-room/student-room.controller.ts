import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentRoomService } from './student-room.service';
import { StudentRoom } from './schemas/student-room.schema';
import { CreateStudentRoomDto } from './dto/create-student-room.dto';

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

  @Post()
  async create(@Body() createStudentDto: CreateStudentRoomDto) {
    return this.studentRoomService.create(createStudentDto);
  }
}
