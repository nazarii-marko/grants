import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Grant } from '../grant/entities/grant.entity';
import { SubmitFeedbackInput } from './dto/submit-feedback.input';

@Injectable()
export class FeedbackService {
  constructor(private readonly prisma: PrismaService) {}

  async submitFeedback(
    submitFeedbackInput: SubmitFeedbackInput,
  ): Promise<Grant> {
    return this.prisma.grant.update({
      where: { id: submitFeedbackInput.grantId },
      data: {
        status: submitFeedbackInput.positive ? 'ACCEPTED' : 'REJECTED',
        matchDate: new Date(),
        feedbacks: {
          create: {
            body: submitFeedbackInput.feedbackBody,
          },
        },
        ...(!submitFeedbackInput.positive && { isActive: false }),
      },
    });
  }

  async findMany(grantId: string) {
    return this.prisma.feedback.findMany({
      where: { grantId },
    });
  }

  async findOne(id: string) {
    return this.prisma.feedback.findUnique({ where: { id } });
  }
}
