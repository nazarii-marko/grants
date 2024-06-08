import { Injectable } from '@nestjs/common';
import { CreateFeedbackInput } from './dto/create-feedback.input';
import { PrismaService } from '../prisma/prisma.service';
import { Grant } from '../grant/entities/grant.entity';

@Injectable()
export class FeedbackService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createFeedbackInput: CreateFeedbackInput): Promise<Grant> {
    return this.prisma.grant.update({
      where: { id: createFeedbackInput.grantId },
      data: {
        status: createFeedbackInput.positive ? 'ACCEPTED' : 'REJECTED',
        matchDate: new Date(),
        feedbacks: {
          create: {
            body: createFeedbackInput.feedbackBody,
          },
        },
        ...(!createFeedbackInput.positive && { isActive: false }),
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
