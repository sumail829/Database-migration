
import { BlogCategory } from 'src/admin/blog-category/entities/blogCategory.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('blogs')
export class Blog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => BlogCategory, (category) => category.blogs, {
    onDelete: 'CASCADE', // When a category is deleted, delete related blogs
    nullable: false, // Ensure categoryId is required
  })
  category: BlogCategory;

  @Column('uuid')
  categoryId: string;

  @Column({ type: 'text', nullable: true })
  title: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  slug: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  images: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'text', nullable: true })
  shortDescription: string;

  @Column({ type: 'text', nullable: true })
  metaKeywords: string;

  @Column({ type: 'text', nullable: true })
  metaDescriptions: string;

  @Column({ nullable: true })
  authorName: string;

  @Column({ nullable: true })
  authorEmail: string;

  @Column({ nullable: true })
  authorDesignation: string;

  @Column({ nullable: true })
  authorImage: string;

  @Column({ nullable: true })
  authorPhone: string;

  @Column({ type: 'text', nullable: true })
  authorInsights: string;

  @Column({ nullable: true })
  authorLinkedin: string;

  @Column({ nullable: true })
  authorWebsite: string;

  @Column({ type: 'int', default: 0 })
  views: number;

  @Column({ type: 'int', nullable: true })
  displayOrder: number;

  @Column({ type: 'boolean', default: true })
  status: boolean;

  //For frotend landing page
  @Column({ type: 'boolean', default: true })
  isPopular: boolean;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at' })
  updatedAt: Date;
}
