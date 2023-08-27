import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Patient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    number: string;

    @Column()
    address: string;

    @ManyToOne(() => User, (user) => user.Patients)
    user: User
}

export interface PatientInterface {
    name?: string;
    number?: string;
    address?: string;
    user?: User;
}