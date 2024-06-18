import { Body, Controller, Get, Param, Post, ParseIntPipe, Delete, Patch} from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import {UpdateCategoriaDto } from './dto/update-categoria.dto';

@Controller('categoria')
export class CategoriaController {
    constructor(private categoriaService: CategoriaService){

    }

    @Post('crearCategoria')
    createCategoria(@Body() newCategoria: CreateCategoriaDto){
        this.categoriaService.createCategoria(newCategoria);
    }

    @Get('ListarCategorias')
    getCategoria(){
        return this.categoriaService.getCategoria();
    }
    @Get('ListarCategorias/:id')
    getCategoriaId(@Param('id', ParseIntPipe)id: number){
        return this.categoriaService.getCategoriaId(id);
    }
    @Delete('eliminarCategoria/:id')
    deleteCategoriaId(@Param('id', ParseIntPipe)id: number){
        return this.categoriaService.deleteCategoriaId(id);
    }
    @Patch('actualizarCategoria/:id')
    updateCategoria(@Param('id', ParseIntPipe)id: number, @Body() categoria: UpdateCategoriaDto){
        return this.categoriaService.updateCategoria(id, categoria);
    }
}
