import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { Repository } from 'typeorm';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriaService {
    constructor(@InjectRepository(Categoria) private categoriaRepository: Repository<Categoria>){}

    async createCategoria(categoria: CreateCategoriaDto){
        const newCategoria = this.categoriaRepository.create(categoria)
        return await this.categoriaRepository.save(newCategoria);
    }
    async getCategoria(){
        return await this.categoriaRepository.find({relations: ['Categoria']});
    }

    async getCategoriaId(id: number){
        return await this.categoriaRepository.findOne({where: {idcategoria: id}, relations: ['Categoria']});
    }

    async deleteCategoriaId(id: number){
        return await this.categoriaRepository.delete(id);
    }

    async updateCategoria(id: number, categoria: UpdateCategoriaDto ){
        return await this.categoriaRepository.update(id, categoria);
    }

    //RELACIONES UNO A MUCHOS 

    // async getProductoCategoria(id: number){
    //     return await this.categoriaRepository.find({where: {idcategoria: id}, relations: ['productos']});
    // }
}
