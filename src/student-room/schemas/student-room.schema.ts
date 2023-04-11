import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Student } from 'src/student/schemas/student.schema';
import { Room } from 'src/room/schemas/room.schema';

export type StudentRoomDocument = HydratedDocument<StudentRoom>;

@Schema()
export class StudentRoom {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Student' })
  studentId: Student;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Room' })
  roomId: Room;
}

export const StudentRoomchema = SchemaFactory.createForClass(StudentRoom);
