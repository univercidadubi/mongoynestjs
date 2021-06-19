import { Schema } from 'mongoose';

export const PersonaSchema = new Schema({
  nombre: String,
  apellido: String,
  edad: String,
  price: String,
  numero: String,
  estado: String,
  createdAt: String,
});
