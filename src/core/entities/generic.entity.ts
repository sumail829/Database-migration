import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

export class GenericEntity {
  @Expose()
  @CreateDateColumn({ type: 'timestamptz', name: 'created_at' })
  createdAt: Date;

  @Expose()
  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at' })
  updatedAt: Date;

  @Exclude()
  @Column({ type: 'varchar', default: null, name: 'created_by' })
  createdBy: string;

  @Exclude()
  @Column({ type: 'varchar', default: null, name: 'updated_by' })
  updatedBy: string;
}
