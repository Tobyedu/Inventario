import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/producto.entity';
import { Repository } from 'typeorm';
import { CreateProductoDto} from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { CategoriaService } from 'src/categoria/categoria.service';

@Injectable()
export class ProductoService {

    constructor(@InjectRepository(Product) private productRepository: Repository<Product>, 
                                           private categoriaService: CategoriaService){}


    async crearProduct(producto: CreateProductoDto){

        const existCategoria = await this.categoriaService.getCategoriaId(producto.categoriaId);
        if(!existCategoria){
            return new HttpException('La categoria no existe', HttpStatus.CONFLICT);
        }

        const newProducto = this.productRepository.create(producto)
        return await this.productRepository.save(newProducto);
    }
    
    async getProduct(){
        return await this.productRepository.find({relations: ['productos']});
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
