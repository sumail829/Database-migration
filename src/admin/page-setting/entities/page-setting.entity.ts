import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

//page-settings entity in backend
@Entity()
export class PageSetting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  eBookingLandlineNumber: string;

  @Column()
  mobileNumber: string;

  @Column()
  officialEmail: string;

  @Column()
  supportEmail: string;

  @Column()
  location: string;

  @Column()
  facebook: string;

  @Column()
  instagram: string;

  @Column()
  linkedin: string;

  @Column()
  x: string;
}
