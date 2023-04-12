import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StudentRelationshipService } from './student-relationship.service';
import { StudentRelationship } from './schemas/student-relationship.schema';
import { CreateStudentRelationshipDto } from './dto/create-student-relationship.dto';

@Controller('student-relationship')
export class StudentRelationshipController {
  constructor(
    private readonly studentRelationshipService: StudentRelationshipService,
  ) {}

  @Get(':id')
  async findByStudentId(
    @Param('id') id: string,
  ): Promise<StudentRelationship[]> {
    return this.studentRelationshipService.findByStudentId(id);
  }

  @Post()
  async create(
    @Body() createStudentRelationshipDto: CreateStudentRelationshipDto,
  ) {
    return this.studentRelationshipService.create(createStudentRelationshipDto);
  }
}
