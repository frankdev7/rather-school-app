import { Injectable } from '@nestjs/common';
import { RoomRepository } from './room.repository';
import { Room } from './schemas/room.schema';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Injectable()
export class RoomService {
  constructor(private readonly roomRepository: RoomRepository) {}

  async findAll(): Promise<Room[]> {
    return this.roomRepository.findAll();
  }

  async create(createRoomDto: CreateRoomDto): Promise<Room> {
    const createRoom = await this.roomRepository.create(createRoomDto);
    return createRoom;
  }

  async update(id: string, updateRoomDto: UpdateRoomDto): Promise<Room> {
    const updatedRoom = await this.roomRepository.update(id, updateRoomDto);
    return updatedRoom;
  }

  async delete(id: string): Promise<Room> {
    const deletedRoom = await this.roomRepository.delete(id);
    return deletedRoom;
  }
}
