import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ScheduledSession } from './ScheduledSession.entity';
import { Counselor } from './Counselor.entity';
import { Counselee } from './Counselee.entity';

// created
@Entity()
export class Attendance {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ManyToOne(() => ScheduledSession)
  @JoinColumn()
  scheduledSession: ScheduledSession;
  @ManyToOne(() => Counselee)
  @JoinColumn()
  counselee: Counselee;
  @ManyToOne(() => Counselor)
  @JoinColumn()
  counselor: Counselor;
  @Column({ default: 'Attendance' })
  type: 'Attendance' | 'RSVP';
  @Column({ nullable: true })
  isRSVP: boolean;
  @Column({ default: false })
  approved: boolean;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
