import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

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
}