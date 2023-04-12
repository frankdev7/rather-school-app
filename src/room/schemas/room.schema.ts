import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type RoomDocument = HydratedDocument<Room>;

@Schema()
export class Room {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  _id: string;

  @Prop()
  name: string;

  @Prop()
  description: string;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
