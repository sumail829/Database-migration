import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Province } from '../../province/entities/province.entity';
import { Area } from '../../area/entities/area.entity';
import { GenericEntity } from 'src/core/entities/generic.entity';

@Entity()
export class City extends GenericEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title?: string;

  @Column({
    nullable: true,
  })
  description?: string;

  @Column({
    nullable: false,
    default: false,
  })
  isCapital: boolean;

  @ManyToOne(() => Province, (province) => province.cities)
  @JoinTable()
  province: Province;

  @OneToMany(() => Area, (area) => area.city)
  @JoinTable()
  area: Area[];
}
