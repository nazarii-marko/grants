import { Module } from '@nestjs/common';
import { GrantService } from './grant.service';
import { GrantResolver } from './grant.resolver';

@Module({
  providers: [GrantResolver, GrantService],
})
export class GrantModule {}
