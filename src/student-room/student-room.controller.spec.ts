import { Test, TestingModule } from '@nestjs/testing';
import { StudentRoomController } from './student-room.controller';

describe('StudentRoomController', () => {
  let controller: StudentRoomController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentRoomController],
    }).compile();

    controller = module.get<StudentRoomController>(StudentRoomController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
