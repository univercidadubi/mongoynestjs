import { Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Persona } from './entities/persona.entity';

@Injectable()
export class PersonaService {

  constructor(@InjectModel('Persona') private readonly model: Model<Persona>) {
  }

  public async create(createPersonaDto: CreatePersonaDto): Promise<Persona> {
    const model = new this.model(createPersonaDto);
    return model.save();
  }

  public async findAll() {
    return await this.model.find();
  }

  public async findOne(id: string) {
    return await this.model.findById(id);
  }

  public async update(id: string, updatePersonaDto: UpdatePersonaDto): Promise<Persona> {
    return await this.model.findByIdAndUpdate(id, updatePersonaDto, { new: true });
  }

  public async remove(id: string) {
    return await this.model.remove({ '_id': id });
  }
}
