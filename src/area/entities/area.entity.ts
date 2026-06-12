import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { City } from '../../city/entities/city.entity';
import { GenericEntity } from 'src/core/entities/generic.entity';

@Entity()
export class Area extends GenericEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title?: string;

  @Column({
    nullable: true,
  })
  description?: string;

  @ManyToOne(() => City, (city) => city.area, { nullable: true })
  @JoinTable()
  city: City;
}
