import { Test, TestingModule } from '@nestjs/testing';
import { StudentRelationshipService } from './student-relationship.service';

describe('StudentRelationshipService', () => {
  let service: StudentRelationshipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentRelationshipService],
    }).compile();

    service = module.get<StudentRelationshipService>(StudentRelationshipService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
