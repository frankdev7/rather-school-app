import { Injectable } from '@nestjs/common';
import { StudentRoomRepository } from './studentRoom.repository';
import { StudentRoom } from './schemas/student-room.schema';
import { CreateStudentRoomDto } from './dto/create-student-room.dto';

@Injectable()
export class StudentRoomService {
  constructor(private readonly studentRoomRepository: StudentRoomRepository) {}

  async findAllStudentRoom(): Promise<StudentRoom[]> {
    return this.studentRoomRepository.findAllStudentRoom();
  }

  async findAllStudentRoomDetails(): Promise<StudentRoom[]> {
    return this.studentRoomRepository.findAllStudentRoomDetails();
  }

  async create(createStudentDto: CreateStudentRoomDto): Promise<StudentRoom> {
    const createStudentRoom = await this.studentRoomRepository.create(
      createStudentDto,
    );
    return createStudentRoom;
  }
}
