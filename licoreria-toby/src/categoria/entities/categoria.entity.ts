import {Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { Product } from '../../producto/entities/producto.entity';

@Entity({name: 'Categoria'})
export class Categoria{
    @PrimaryGeneratedColumn()
    idcategoria: number;

    @Column({unique: true})
    nombre: string;

    @Column()
    descripcion: string;

    @Column({type: 'date', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;



    //Relacion de uno a muchos con Producto
    @OneToMany(() => Product, product => product.productos)
    Categoria: Product[];
}