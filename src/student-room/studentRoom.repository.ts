import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StudentRoom } from './schemas/student-room.schema';
import { CreateStudentRoomDto } from './dto/create-student-room.dto';
import * as mongoose from 'mongoose';
import { IStudentRoom } from './interface/student-room.interface';

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
          from: 'students',
          localField: 'studentId',
          foreignField: '_id',
          as: 'student',
        },
      },
      {
        $lookup: {
          from: 'rooms',
          localField: 'roomId',
          foreignField: '_id',
          as: 'room',
        },
      },
      {
        $unwind: '$student',
      },
      {
        $unwind: '$room',
      },
      {
        $project: { student: 1, room: 1 },
      },
    ]);
  }

  async findStudentRoomDetailById(id: string): Promise<StudentRoom> {
    const results = await this.studentRoomModel.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(id) },
      },
      {
        $lookup: {
          from: 'students',
          localField: 'studentId',
          foreignField: '_id',
          as: 'student',
        },
      },
      {
        $lookup: {
          from: 'rooms',
          localField: 'roomId',
          foreignField: '_id',
          as: 'room',
        },
      },
      {
        $unwind: '$student',
      },
      {
        $unwind: '$room',
      },
      {
        $project: { student: 1, room: 1 },
      },
      {
        $limit: 1,
      },
    ]);
    return results[0];
  }

  async findAllStudentsByRoomId(id: string): Promise<IStudentRoom[]> {
    return await this.studentRoomModel.aggregate([
      {
        $match: { roomId: new mongoose.Types.ObjectId(id) },
      },
      {
        $lookup: {
          from: 'students',
          localField: 'studentId',
          foreignField: '_id',
          as: 'student',
        },
      },
      {
        $unwind: '$student',
      },
      {
        $project: { student: 1 },
      },
    ]);
  }

  async create(createStudentDto: CreateStudentRoomDto): Promise<StudentRoom> {
    const createStudent = await this.studentRoomModel.create(createStudentDto);
    return await this.findStudentRoomDetailById(createStudent._id.toString());
  }

  async update(
    id: string,
    studentId: string,
    roomId: string,
  ): Promise<StudentRoom> {
    const updateStudentRoom = await this.studentRoomModel
      .findByIdAndUpdate({ _id: id }, { studentId, roomId }, { new: true })
      .exec();
    return updateStudentRoom;
  }

  async delete(id: string): Promise<StudentRoom> {
    const deletedStudentRoom = await this.studentRoomModel
      .findByIdAndRemove({
        _id: id,
      })
      .exec();
    return deletedStudentRoom;
  }
}
