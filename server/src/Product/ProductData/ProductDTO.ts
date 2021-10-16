/* eslint-disable require-jsdoc */
/* eslint-disable new-cap */
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    Id!: number | null;

    @Column({ type: 'text', nullable: true })
    Name!: string | null;

    @Column({ type: 'text', nullable: true })
    Brand!: string | null;

    @Column({ type: 'datetime', nullable: true })
    PublishDate!: Date | null;

    @Column({ type: 'decimal', nullable: true })
    Price!: number | null;

    @Column({ type: 'bit', nullable: true })
    OnSale!: boolean | null;

    @Column({ type: 'bit', nullable: true })
    OnPromotion!: boolean | null;

    @Column({ type: 'bit', nullable: true })
    OnFeature!: boolean | null;

    @Column({ type: 'bit', nullable: true })
    IsService!: boolean | null;

    @Column({ type: 'text', nullable: true })
    Description!: string | null;

}


