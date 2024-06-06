import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoModule } from './producto/producto.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1313',
    database: 'inventario',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true
  }), ProductoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
