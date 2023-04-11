import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentRepository } from './student.repository';
import { Student, Studentchema } from './schemas/student.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: Studentchema }]),
  ],
  providers: [StudentService, StudentRepository],
  controllers: [StudentController],
})
export class StudentModule {}
