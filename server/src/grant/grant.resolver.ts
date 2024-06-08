import { Resolver, Query, Args } from '@nestjs/graphql';
import { GrantService } from './grant.service';
import { Grant } from './entities/grant.entity';

@Resolver('Grant')
export class GrantResolver {
  constructor(private readonly grantService: GrantService) {}

  @Query('grants')
  findAll(
    @Args('pagination') pagination: any,
  ): Promise<{ grants: Grant[]; totalCount: number }> {
    return this.grantService.findAll(pagination);
  }

  @Query('newMatches')
  newMatches() {
    return this.grantService.newMatches();
  }

  @Query('grant')
  findOne(@Args('id') id: string) {
    return this.grantService.findOne(id);
  }
}
