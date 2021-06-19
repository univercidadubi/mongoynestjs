import { Document } from 'mongoose';

export interface Persona extends Document {
  readonly nombre: string;
  readonly apellido: string;
  readonly edad: string;
  readonly numero: string;
  readonly estado: string;
  readonly createdAt: string;
}
