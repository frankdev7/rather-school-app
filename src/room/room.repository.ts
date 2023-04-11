import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from './schemas/room.schema';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Injectable()
export class RoomRepository {
  constructor(
    @InjectModel(Room.name) private readonly roomModel: Model<Room>,
  ) {}

  async findAll(): Promise<Room[]> {
    return this.roomModel.find().exec();
  }

  async create(createRoomDto: CreateRoomDto): Promise<Room> {
    const createRoom = this.roomModel.create(createRoomDto);
    return createRoom;
  }

  async update(id: string, updateRoomDto: UpdateRoomDto): Promise<Room> {
    const updateRoom = await this.roomModel
      .findByIdAndUpdate({ _id: id }, updateRoomDto, { new: true })
      .exec();
    return updateRoom;
  }

  async delete(id: string): Promise<Room> {
    const deletedRoom = await this.roomModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedRoom;
  }
}
