
import { Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Country } from '../../country/entities/country.entity';
import { City } from '../../city/entities/city.entity';
import { GenericEntity } from 'src/core/entities/generic.entity';

@Entity()
export class Province extends GenericEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title?: string;

  @Column({
    nullable: true,
  })
  description?: string;

  @ManyToOne(() => Country, (country) => country.provinces)
  @JoinTable()
  country: Country;

  @OneToMany(() => City, (city) => city.province)
  @JoinTable()
  cities: City[];
}
