import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductoService {
    getProduct(){
        return 'Obtener todos los productos';
    }
}
