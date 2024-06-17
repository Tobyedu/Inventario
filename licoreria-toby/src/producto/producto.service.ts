import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/producto.entity';
import { Repository } from 'typeorm';
import { CreateProductoDto} from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Injectable()
export class ProductoService {

    constructor(@InjectRepository(Product) private productRepository: Repository<Product>){}



    async crearProduct(producto: CreateProductoDto){

        const existnombre = await this.productRepository.find(
            {where: {nombre: producto.nombre}}
        );
        if(existnombre){
            return new HttpException('El producto ya existe', HttpStatus.CONFLICT);
        }
        
        const crearProducto = this.productRepository.create(producto)
        return this.productRepository.save(crearProducto);
    }
    async getProduct(){
        return await this.productRepository.find();
    }


    async getProductId(id: number){

        const product = await this.productRepository.findOne({
            where: {
                idproducto: id
            }
        });
        if(!product){
            return new HttpException('El producto no existe', HttpStatus.NOT_FOUND);
        }
        return product;
    }

    async deleteProductId(id: number){
        const foundproduct = await this.productRepository.findOne({where: {idproducto: id}});

        if(!foundproduct){
            return new HttpException('El producto no se encuentra', HttpStatus.CONFLICT)
        }
        return this.productRepository.delete(id);
    }
    async updateUser(id: number, product: UpdateProductoDto){
        return await this.productRepository.update(id, product);
    }
}
