import { Test, TestingModule } from '@nestjs/testing';
import { StudentRelationshipController } from './student-relationship.controller';

describe('StudentRelationshipController', () => {
  let controller: StudentRelationshipController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentRelationshipController],
    }).compile();

    controller = module.get<StudentRelationshipController>(
      StudentRelationshipController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
