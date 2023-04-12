import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomModule } from './room/room.module';
import { StudentModule } from './student/student.module';
import { StudentRoomModule } from './student-room/student-room.module';
import { StudentRelationshipModule } from './student-relationship/student-relationship.module';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    RoomModule,
    StudentModule,
    StudentRoomModule,
    StudentRelationshipModule,
  ],
  exports: [StudentModule],
})
export class AppModule {}
