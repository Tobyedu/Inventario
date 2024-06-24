import { Module } from '@nestjs/common';
import { ProductoController } from './producto.controller';
import { ProductoService } from './producto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/producto.entity';
import { CategoriaModule } from 'src/categoria/categoria.module'; 

@Module({
  imports: [TypeOrmModule.forFeature([Product]), CategoriaModule],
  controllers: [ProductoController],
  providers: [ProductoService],
 
})
export class ProductoModule {}
