import { IsNotEmpty } from 'class-validator';

export class CreateStudentRelationshipDto {
  @IsNotEmpty()
  readonly student1Id: string;

  @IsNotEmpty()
  readonly student2Id: string;

  @IsNotEmpty()
  readonly relationship: string;
}
