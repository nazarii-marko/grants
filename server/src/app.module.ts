import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { GrantModule } from './grant/grant.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CommonModule } from './common/common.module';
import { FeedbackModule } from './feedback/feedback.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
    }),
    PrismaModule,
    GrantModule,
    CommonModule,
    FeedbackModule,
  ],
  providers: [],
})
export class AppModule {}
