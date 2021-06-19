import { Module } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { PersonaController } from './persona.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonaSchema } from './schemas/personas.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Persona', schema: PersonaSchema }])],
  controllers: [PersonaController],
  providers: [PersonaService],
})
export class PersonaModule {
}
