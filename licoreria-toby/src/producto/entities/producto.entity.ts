import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'Producto'})
export class Product{

    @PrimaryGeneratedColumn()
    idproducto: number;

    @Column({unique: true})
    cod_barra: string;

    @Column()
    nombre: string;

    @Column()
    precio: number;

    @Column()
    cantidad: number;   

    @Column({type: 'date', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;

}