import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Counselor } from './Counselor.entity';

@Entity()
export class Counselee {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column({ nullable: true })
  initiatedName: string;
  @Column()
  phoneNumber: string;
  @Column()
  gender: string;
  @Column()
  age: number;
  @Column()
  email: string;
  @Column({ default: 'UNMARRIED' })
  maritalStatus: string;
  @Column({ nullable: true })
  address: string;
  @Column({ nullable: true })
  profession: string;
  @Column({ nullable: true })
  yourInitiatingSpiritualMaster: string;
  @Column({ nullable: true })
  harinamInitiationDate: Date;
  @Column({ nullable: true })
  harinamInitiationPlace: string;
  @Column({ nullable: true })
  chantingRounds: number;
  @Column({ nullable: true })
  chantingStartedThisRoundsDate: Date;
  @Column({ nullable: true })
  recommendedBy: string;
  @ManyToOne(() => Counselor, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  currentCounselor: Counselor;
  @Column({ nullable: true })
  connectedToCounselorSince: Date;
  @OneToOne(() => Counselee, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  husband: Counselee;
  @Column({ type: 'jsonb', nullable: true })
  children: JSON;
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
