import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import {MongooseModule} from '@nestjs/mongoose'
@Module({
  imports: [ProductsModule,MongooseModule.forRoot('mongodb+srv://ramshanadeem:rightsight12@cluster0.b39b2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true },)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
