import { Grant } from '../../grant/entities/grant.entity';

export class Feedback {
  id: string;
  grantId: string;
  grant?: Grant;
  body: string;
  createdAt: Date;
}
