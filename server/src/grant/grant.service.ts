import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Pagination } from '../common/dto/pagination.dto';

@Injectable()
export class GrantService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(pagination: Pagination) {
    return this.prisma.grant.findMany({
      where: {
        isActive: true,
      },
      take: pagination.take,
      skip: pagination.skip,
      ...(pagination?.orderBy && {
        orderBy: {
          [pagination.orderBy.field]: pagination?.orderBy.direction || 'desc',
        },
      }),
    });
  }

  async newMatches() {
    return this.prisma.grant.findMany({
      where: {
        matchDate: null,
        isActive: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.grant.findUnique({ where: { id } });
  }
}
