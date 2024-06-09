import { Test, TestingModule } from '@nestjs/testing';
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

describe('GrantService', () => {
  let service: GrantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GrantService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    service = module.get<GrantService>(GrantService);
    prismaMock.grant.findMany.mockClear();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return 4 grants', () => {
    service.newMatches();

    expect(prismaMock.grant.findMany).toBeCalledTimes(1);
    expect(prismaMock.grant.findMany()).toHaveLength(4);

    expect(prismaMock.grant.findMany).toHaveBeenCalledWith({
      where: {
        matchDate: null,
        isActive: true,
      },
      include: { location: true },
    });
  });
  it('should call findMany & count', () => {
    service.findAll({
      take: 10,
      skip: 0,
      orderBy: { field: 'name', direction: 'asc' },
    });

    expect(prismaMock.grant.findMany).toBeCalledTimes(1);
    expect(prismaMock.grant.count).toBeCalledTimes(1);

    expect(prismaMock.$transaction()).toEqual({
      grants: expect.arrayContaining([expect.objectContaining({ id: '1' })]),
      totalCount: 4,
    });
  });
});
