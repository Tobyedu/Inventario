import { Body, Controller, Get, Param, Post, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Product } from './entities/producto.entity';

@Controller('producto')
export class ProductoController {
    constructor(private productoService: ProductoService){
        
    }
    @Post('crearproducto')
    createProduct(@Body() newProduct: CreateProductoDto){
        return this.productoService.crearProduct(newProduct);
    }

    @Get('Listarproductos')
    getProduct(): Promise<Product[]>{
        return this.productoService.getProduct();
    }
    @Get('Listarproductos/:id')
    getProductId(@Param('id', ParseIntPipe)id: number): Promise<Product>{
        return this.productoService.getProductId(id);
    }
    @Delete('eliminarproducto/:id')
    deleteProductId(@Param('id', ParseIntPipe)id: number): Promise<any>{
        return this.productoService.deleteProductId(id);
    }
    @Patch('actualizarproducto/:id')
    updateUser(@Param('id', ParseIntPipe)id: number, @Body() product: UpdateProductoDto){
        return this.productoService.updateUser(id, product);
    }
    

}
