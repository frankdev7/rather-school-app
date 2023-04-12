import { Injectable } from '@nestjs/common';
import { StudentRoomRepository } from './studentRoom.repository';
import { StudentRoom } from './schemas/student-room.schema';
import { CreateStudentRoomDto } from './dto/create-student-room.dto';
import { UpdateStudentRoomDto } from './dto/update-student-room.dto';
import { Student } from './interface/student.interface';
import { IStudentRoom } from './interface/student-room.interface';

@Injectable()
export class StudentRoomService {
  constructor(private readonly studentRoomRepository: StudentRoomRepository) {}

  async findAllStudentRoom(): Promise<StudentRoom[]> {
    return this.studentRoomRepository.findAllStudentRoom();
  }

  async findAllStudentRoomDetails(): Promise<StudentRoom[]> {
    return this.studentRoomRepository.findAllStudentRoomDetails();
  }

  async findAllStudentsByRoomId(id: string): Promise<Student[]> {
    const createStudentRoom: IStudentRoom[] =
      await this.studentRoomRepository.findAllStudentsByRoomId(id);
    const students: { _id: string; name: string; surname: string }[] =
      createStudentRoom.map((studentRoom) => {
        return {
          _id: studentRoom.student._id,
          name: studentRoom.student.name,
          surname: studentRoom.student.surname,
        };
      });
    return students;
  }

  async create(createStudentDto: CreateStudentRoomDto): Promise<StudentRoom> {
    const createStudentRoom = await this.studentRoomRepository.create(
      createStudentDto,
    );
    return createStudentRoom;
  }

  async update(
    id: string,
    updateStudentRoomDto: UpdateStudentRoomDto,
  ): Promise<StudentRoom> {
    const { roomId, studentId } = updateStudentRoomDto;
    const updatedStudentRoom = await this.studentRoomRepository.update(
      id,
      studentId,
      roomId,
    );
    return updatedStudentRoom;
  }

  async delete(id: string): Promise<StudentRoom> {
    const deletedStudentRoom = await this.studentRoomRepository.delete(id);
    return deletedStudentRoom;
  }
}
