import { Module } from '@nestjs/common';
import { ProveedoresController } from './proveedores.controller';
import { ProveedoresService } from './proveedores.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proveedor } from './entities/proveedores.entity';	

@Module({
  imports: [TypeOrmModule.forFeature([Proveedor])],
  controllers: [ProveedoresController],
  providers: [ProveedoresService]
})
export class ProveedoresModule {}
