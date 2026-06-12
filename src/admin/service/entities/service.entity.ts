import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  export enum ServiceStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
  }
  
  @Entity('services')
  export class Service {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ type: 'varchar', nullable: false })
    title: string;
  
   
  
    @Column({ type: 'varchar', nullable: false })
    image: string;
  
    @Column({ type: 'text', nullable: false })
    description: string;
  
    @Column({ type: 'text',  nullable: false })
    slug: string;

   
    @Column({ type: 'int', default: 0 })
    priority: number;
  
    @Column({
      type: 'enum',
      enum: ServiceStatus,
      default: ServiceStatus.ACTIVE,
    })
    status: ServiceStatus;
  
    @CreateDateColumn({ type: 'timestamptz', name: 'created_at' })
    createdAt: Date;
  
    @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at' })
    updatedAt: Date;
  }
  