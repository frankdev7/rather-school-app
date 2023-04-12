import { Module } from '@nestjs/common';
import { StudentRoomService } from './student-room.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentRoom, StudentRoomchema } from './schemas/student-room.schema';
import { StudentRoomController } from './student-room.controller';
import { StudentService } from 'src/student/student.service';
import { StudentModule } from 'src/student/student.module';
import { StudentRoomRepository } from './studentRoom.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: StudentRoom.name, schema: StudentRoomchema },
    ]),
    StudentModule,
  ],
  controllers: [StudentRoomController],
  providers: [StudentRoomService, StudentRoomRepository, StudentService],
})
export class StudentRoomModule {}
