import { Controller, Get, Post } from '@nestjs/common';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {
    constructor(private productoService: ProductoService){
        
    }

    @Get('Listarproductos')
    getProduct(){
        return this.productoService.getProduct();
    }
    

}
