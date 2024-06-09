import { Test, TestingModule } from '@nestjs/testing';
import { GrantResolver } from './grant.resolver';
import { GrantService } from './grant.service';
import { PrismaService } from '../prisma/prisma.service';

const grants = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }];
const prismaMock = {
  $transaction: jest.fn(() => ({ grants, totalCount: 4 })),
  grant: {
    findMany: jest.fn(() => grants),
    count: jest.fn(() => grants.length),
    findUnique: jest.fn(),
    update: jest.fn(),
  },
};

describe('GrantResolver', () => {
  let resolver: GrantResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GrantResolver,
        GrantService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    resolver = module.get<GrantResolver>(GrantResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
