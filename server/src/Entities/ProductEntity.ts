/* eslint-disable require-jsdoc */
/* eslint-disable new-cap */
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    Id!: number | null;

    @Column({ type: 'nvarchar', nullable: true })
    Name!: string | null;

    @Column({ type: 'nvarchar', nullable: true })
    LastUpdated!: string | null;

    @Column({ type: 'nvarchar', nullable: true })
    Description!: string | null;

    @Column({ type: 'nvarchar', nullable: true })
    Features!: string | null;

    @Column({ type: 'bit' })
    IsActive!: string | null;

    @Column({ type: 'float', nullable: true })
    Price!: number | null;

    @Column({ type: 'float', nullable: true })
    SalePrice!: number | null;

    @Column({ type: 'int', nullable: true })
    Sequence!: number | null;

}


