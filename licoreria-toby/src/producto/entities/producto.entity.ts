import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";

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
    
    @Column()
    categoriaId: number;


    //Relacion de muchos a uno con Categoria
    @ManyToOne(() => Categoria, producto => producto.Categoria)
    @JoinColumn({name: 'categoriaId'})
    productos: Categoria;


}