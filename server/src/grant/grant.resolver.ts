import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GrantService } from './grant.service';

@Resolver('Grant')
export class GrantResolver {
  constructor(private readonly grantService: GrantService) {}

  @Query('grants')
  findAll(@Args('pagination') pagination: any) {
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
