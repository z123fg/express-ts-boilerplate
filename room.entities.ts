import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { User } from "./user.entities";

@Entity()
export class Room {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    history: Object[];

    @ManyToMany(() => User)
    users: User[];
}
