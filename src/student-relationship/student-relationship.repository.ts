import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StudentRelationship } from './schemas/student-relationship.schema';
import { CreateStudentRelationshipDto } from './dto/create-student-relationship.dto';
import * as mongoose from 'mongoose';

@Injectable()
export class StudentRelationshipRepository {
  constructor(
    @InjectModel(StudentRelationship.name)
    private readonly studentRelationshipModel: Model<StudentRelationship>,
  ) {}

  async findByStudentId(id: string): Promise<StudentRelationship[]> {
    return await this.studentRelationshipModel.aggregate([
      {
        $match: { student1Id: new mongoose.Types.ObjectId(id) },
      },
      {
        $lookup: {
          from: 'students',
          localField: 'student1Id',
          foreignField: '_id',
          as: 'student1',
        },
      },
      {
        $lookup: {
          from: 'students',
          localField: 'student2Id',
          foreignField: '_id',
          as: 'student2',
        },
      },
      {
        $unwind: '$student1',
      },
      {
        $unwind: '$student2',
      },
      {
        $project: { student1: 1, student2: 1, relationship: 1 },
      },
    ]);
  }

  async create(
    createStudentRelationshipDto: CreateStudentRelationshipDto,
  ): Promise<StudentRelationship> {
    return await this.studentRelationshipModel.create(
      createStudentRelationshipDto,
    );
  }
}
