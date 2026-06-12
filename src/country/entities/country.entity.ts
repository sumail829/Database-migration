import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Province } from '../../province/entities/province.entity';
import { GenericEntity } from 'src/core/entities/generic.entity';


@Entity()
export class Country extends GenericEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title?: string;

  @Column({
    nullable: true,
  })
  description?: string;


  @OneToMany(() => Province, (province) => province.country)
  @JoinTable()
  provinces: Province[];
}
