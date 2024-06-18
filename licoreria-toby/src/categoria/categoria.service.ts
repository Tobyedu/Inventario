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
        return await this.categoriaRepository.create(categoria)
    }
    getCategoria(){
        return this.categoriaRepository.find();
    }

    async getCategoriaId(id: number){
        return await this.categoriaRepository.findOne({where: {idcategoria: id}});
    }

    async deleteCategoriaId(id: number){
        return await this.categoriaRepository.delete(id);
    }

    async updateCategoria(id: number, categoria: UpdateCategoriaDto ){
        return await this.categoriaRepository.update(id, categoria);
    }
}
