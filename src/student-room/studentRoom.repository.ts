import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StudentRoom } from './schemas/student-room.schema';
import { CreateStudentRoomDto } from './dto/create-student-room.dto';

@Injectable()
export class StudentRoomRepository {
  constructor(
    @InjectModel(StudentRoom.name)
    private readonly studentRoomModel: Model<StudentRoom>,
  ) {}

  async findAllStudentRoom(): Promise<StudentRoom[]> {
    return this.studentRoomModel.find().exec();
  }

  async findAllStudentRoomDetails(): Promise<StudentRoom[]> {
    return this.studentRoomModel.aggregate([
      {
        $lookup: {
          from: 'students', // The name of the collection for the Student model
          localField: 'studentId',
          foreignField: '_id',
          as: 'student',
        },
      },
      {
        $lookup: {
          from: 'rooms', // The name of the collection for the Room model
          localField: 'roomId',
          foreignField: '_id',
          as: 'room',
        },
      },
      {
        $unwind: '$student', // Flatten the student array created by the lookup
      },
      {
        $unwind: '$room', // Flatten the room array created by the lookup
      },
    ]);
  }

  async create(createStudentDto: CreateStudentRoomDto): Promise<StudentRoom> {
    const createStudent = this.studentRoomModel.create(createStudentDto);
    return createStudent;
  }
}
