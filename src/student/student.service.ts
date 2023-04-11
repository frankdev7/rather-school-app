import { Injectable } from '@nestjs/common';
import { UpdateStudentDto } from './dto/update-student.dto';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student } from './schemas/student.schema';
import { StudentRepository } from './student.repository';

@Injectable()
export class StudentService {
  constructor(private readonly studentRepository: StudentRepository) {}

  async findAll(): Promise<Student[]> {
    return this.studentRepository.findAll();
  }

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const createStudent = await this.studentRepository.create(createStudentDto);
    return createStudent;
  }

  async update(
    id: string,
    updateStudentDto: UpdateStudentDto,
  ): Promise<Student> {
    const updatedStudent = await this.studentRepository.update(
      id,
      updateStudentDto,
    );
    return updatedStudent;
  }

  async delete(id: string): Promise<Student> {
    const deletedStudent = await this.studentRepository.delete(id);
    return deletedStudent;
  }
}
