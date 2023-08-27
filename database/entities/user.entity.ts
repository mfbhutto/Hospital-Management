import { Patient } from './patient.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({
        default: 'active'
    })
    status: string;

    @Column()
    token: string;

    @OneToMany(() => Patient, (Patient) => Patient.user)
    Patients: Patient[];
}

export interface UserInterface {
    firstName?: string;
    lastName?: string;
    phone?: string;
    email?: string;
    password?: string;
    status?: string;
    Patients?: Patient[];
}