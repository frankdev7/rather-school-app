import { IsNotEmpty } from 'class-validator';

export class CreateStudentRoomDto {
  @IsNotEmpty()
  readonly studentId: string;

  @IsNotEmpty()
  readonly roomId: string;
}
