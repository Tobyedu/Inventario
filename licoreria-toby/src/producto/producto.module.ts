import { Module } from '@nestjs/common';
import { ProductoController } from './producto.controller';
import { ProductoService } from './producto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/producto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductoController],
  providers: [ProductoService]
})
export class ProductoModule {}
