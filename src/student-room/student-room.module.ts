import { Module } from '@nestjs/common';
import { StudentRoomService } from './student-room.service';
import { StudentRoomRepository } from './studentRoom.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentRoom, StudentRoomchema } from './schemas/student-room.schema';
import { StudentRoomController } from './student-room.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: StudentRoom.name, schema: StudentRoomchema },
    ]),
  ],
  controllers: [StudentRoomController],
  providers: [StudentRoomService, StudentRoomRepository],
})
export class StudentRoomModule {}
