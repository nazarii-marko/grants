import { Test, TestingModule } from '@nestjs/testing';
import { FeedbackResolver } from './feedback.resolver';
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

describe('FeedbackResolver', () => {
  let resolver: FeedbackResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FeedbackResolver,
        FeedbackService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    resolver = module.get<FeedbackResolver>(FeedbackResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
