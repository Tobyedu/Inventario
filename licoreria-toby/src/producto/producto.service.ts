import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/producto.entity';
import { Repository } from 'typeorm';
import { CreateProductoDto} from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Injectable()
export class ProductoService {

    constructor(@InjectRepository(Product) private productRepository: Repository<Product>){}



    crearProduct(producto: CreateProductoDto){
        const crearProducto = this.productRepository.create(producto)
        return this.productRepository.save(crearProducto);
    }
    getProduct(){

        
        return this.productRepository.find();
    }
    async getProductId(id: number){
        return await this.productRepository.findOne({
            where: {
                idproducto: id
            }
        });
    }

    deleteProductId(id: number){
        return this.productRepository.delete(id);
    }
    async updateUser(id: number, product: UpdateProductoDto){
        return await this.productRepository.update(id, product);
    }
}
