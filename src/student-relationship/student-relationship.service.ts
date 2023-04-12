import { Injectable } from '@nestjs/common';
import { StudentRelationshipRepository } from './student-relationship.repository';
import { StudentRelationship } from './schemas/student-relationship.schema';
import { CreateStudentRelationshipDto } from './dto/create-student-relationship.dto';

@Injectable()
export class StudentRelationshipService {
  constructor(
    private readonly studentRelationshipRepository: StudentRelationshipRepository,
  ) {}

  async findByStudentId(id: string): Promise<StudentRelationship[]> {
    return await this.studentRelationshipRepository.findByStudentId(id);
  }

  async create(
    createStudentRelationshipDto: CreateStudentRelationshipDto,
  ): Promise<StudentRelationship> {
    const createStudentRoom = await this.studentRelationshipRepository.create(
      createStudentRelationshipDto,
    );
    return createStudentRoom;
  }
}
