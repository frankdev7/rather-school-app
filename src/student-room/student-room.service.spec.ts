import { Test, TestingModule } from '@nestjs/testing';
import { StudentRoomService } from './student-room.service';

describe('StudentRoomService', () => {
  let service: StudentRoomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentRoomService],
    }).compile();

    service = module.get<StudentRoomService>(StudentRoomService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
