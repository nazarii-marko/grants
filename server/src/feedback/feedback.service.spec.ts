import { Test, TestingModule } from '@nestjs/testing';
import { FeedbackService } from './feedback.service';
import { PrismaService } from '../prisma/prisma.service';

const prismaMock = {
  grant: {
    findMany: jest.fn(),
    findUnique: jest.fn(),
    update: jest.fn(),
  },
  feedback: {
    create: jest.fn(),
  },
};

describe('FeedbackService', () => {
  let service: FeedbackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FeedbackService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();
    service = module.get<FeedbackService>(FeedbackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('submitFeedback', () => {
    const submitFeedbackInput = {
      grantId: '12345',
      positive: true,
      feedbackBody: 'text',
    };

    service.submitFeedback(submitFeedbackInput);
    expect(prismaMock.grant.update).toHaveBeenCalledWith({
      where: { id: submitFeedbackInput.grantId },
      data: {
        status: submitFeedbackInput.positive ? 'ACCEPTED' : 'REJECTED',
        matchDate: expect.any(Date),
        feedbacks: {
          create: {
            body: expect.stringMatching('text'),
          },
        },
      },
    });
    expect(prismaMock.grant.update).toHaveBeenCalledTimes(1);
  });
});
