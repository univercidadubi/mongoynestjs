import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { PersonaModule } from './persona/persona.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/products-nest', {
      useNewUrlParser: true,
    }),
    ProductModule,
    PersonaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
