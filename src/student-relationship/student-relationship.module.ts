import { Module } from '@nestjs/common';
import { StudentRelationshipController } from './student-relationship.controller';
import { StudentRelationshipService } from './student-relationship.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  StudentRelationship,
  StudentRelationshipSchema,
} from './schemas/student-relationship.schema';
import { StudentRelationshipRepository } from './student-relationship.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: StudentRelationship.name, schema: StudentRelationshipSchema },
    ]),
  ],
  controllers: [StudentRelationshipController],
  providers: [StudentRelationshipService, StudentRelationshipRepository],
})
export class StudentRelationshipModule {}
