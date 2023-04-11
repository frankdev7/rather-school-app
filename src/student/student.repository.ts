import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from './schemas/Student.schema';
import { CreateStudentDto } from './dto/create-Student.dto';
import { UpdateStudentDto } from './dto/update-Student.dto';

@Injectable()
export class StudentRepository {
  constructor(
    @InjectModel(Student.name) private readonly StudentModel: Model<Student>,
  ) {}

  async findAll(): Promise<Student[]> {
    return this.StudentModel.find().exec();
  }

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const createStudent = this.StudentModel.create(createStudentDto);
    return createStudent;
  }

  async update(
    id: string,
    updateStudentDto: UpdateStudentDto,
  ): Promise<Student> {
    const updateStudent = await this.StudentModel.findByIdAndUpdate(
      { _id: id },
      updateStudentDto,
      { new: true },
    ).exec();
    return updateStudent;
  }

  async delete(id: string): Promise<Student> {
    const deletedStudent = await this.StudentModel.findByIdAndRemove({
      _id: id,
    }).exec();
    return deletedStudent;
  }
}
