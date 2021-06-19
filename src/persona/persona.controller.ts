import { Controller, Post, Res, HttpStatus, Body, Get, Param, NotFoundException, Delete, Query, Put, Patch } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';

@Controller('persona')
export class PersonaController {

  constructor(private readonly personaService: PersonaService) {
  }

  @Post()
  public async create(@Res() res, @Body() createPersonaDto: CreatePersonaDto) {
    const model = await this.personaService.create(createPersonaDto);
    return res.status(HttpStatus.OK).json({
      message: 'Product Successfully Created',
      model,
    });
  }

  @Get()
  public findAll() {
    return this.personaService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: string) {
    return this.personaService.findOne(id);
  }

  @Patch(':id')
  public update(@Res() res, @Param('id') id: string, @Body() updatePersonaDto: UpdatePersonaDto) {
    const upx = this.personaService.update(id, updatePersonaDto);
    return res.status(HttpStatus.OK).json({
      message: 'Product Updated Successfully',
      upx,
    });
  }

  @Delete(':id')
  public remove(@Param('id') id: string) {
    return this.personaService.remove(id);
  }
}
