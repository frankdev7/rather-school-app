import { ObjectId } from 'mongoose';
import { Student } from './student.interface';

export interface IStudentRoom {
  _id: ObjectId;
  student: Student;
}
