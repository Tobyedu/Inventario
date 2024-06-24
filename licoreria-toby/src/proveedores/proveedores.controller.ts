import { Controller } from '@nestjs/common';
import { Proveedor } from './entities/proveedores.entity';


@Controller('proveedores')
export class ProveedoresController {
    constructor(){
        // @Injectable()
        // private proveedoresService: ProveedoresService
    }
}
