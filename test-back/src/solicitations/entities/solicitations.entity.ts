import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('solicitations')
export class Solicitations {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'requester_name', nullable: false })
  requesterName: string;

  @Column({ name: 'description', nullable: false })
  description: string;

  @Column({ name: 'product_price', type: 'decimal', nullable: false })
  productPrice: number;

  @Column({ name: 'product_price', default: false })
  status: boolean;

  @Column({ name: 'observation', nullable: true })
  observation: string;
}