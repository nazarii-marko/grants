import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Pagination } from '../common/dto/pagination.dto';
import { GrantStatus } from '@prisma/client';

@Injectable()
export class GrantService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(pagination: Pagination) {
    const queryArgs = {
      where: {
        isActive: true,
        status: { not: GrantStatus.NEW },
        matchDate: { not: null },
      },
      take: pagination.take,
      skip: pagination.skip,
      ...(pagination?.orderBy && {
        orderBy: {
          [pagination.orderBy.field]: pagination?.orderBy.direction || 'desc',
        },
      }),
    };
    const res = await this.prisma.$transaction([
      this.prisma.grant.findMany(queryArgs),
      this.prisma.grant.count(queryArgs),
    ]);
    return { grants: res[0], totalCount: res[1] };
  }

  async newMatches() {
    return this.prisma.grant.findMany({
      where: {
        matchDate: null,
        isActive: true,
      },
      include: { location: true },
    });
  }

  async findOne(id: string) {
    return this.prisma.grant.findUnique({ where: { id } });
  }
}
