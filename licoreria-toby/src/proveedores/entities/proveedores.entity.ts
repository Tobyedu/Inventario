import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'Proveedores'})
export class Proveedor{
    @PrimaryGeneratedColumn()
    idproveedor: number;

    @Column({unique: true})
    ruc: number;

    @Column({unique: true})
    nombre: string;

    @Column()
    direccion: string;

    @Column()
    telefono: number;

    @Column()
    correo: string;

    @Column({type: 'date', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;
}
