import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('solicitations')
export class Solicitations {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'requester_name', nullable: false })
  requesterName: string;

  @Column({ name: 'description', nullable: false })
  description: string;

  @Column({ name: 'product_price', nullable: false })
  productPrice: string;

  @Column({ name: 'status', nullable: true })
  status: boolean;

  @Column({ name: 'observation', nullable: true })
  observation: string;
}