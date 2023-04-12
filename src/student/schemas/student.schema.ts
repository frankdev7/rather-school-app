import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StudentDocument = HydratedDocument<Student>;

@Schema({ id: true, versionKey: false })
export class Student {
  @Prop()
  name: string;

  @Prop()
  surname: string;
}

export const Studentchema = SchemaFactory.createForClass(Student);
