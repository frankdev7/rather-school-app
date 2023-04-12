import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Student } from 'src/student/schemas/student.schema';

export type StudentRelationshipDocument = HydratedDocument<StudentRelationship>;

@Schema()
export class StudentRelationship {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Student' })
  student1Id: Student;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Student' })
  student2Id: Student;

  @Prop()
  relationship: string;
}

export const StudentRelationshipSchema =
  SchemaFactory.createForClass(StudentRelationship);
