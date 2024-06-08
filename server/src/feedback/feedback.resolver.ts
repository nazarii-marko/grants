import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackInput } from './dto/create-feedback.input';

@Resolver('Feedback')
export class FeedbackResolver {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Mutation('createFeedback')
  create(
    @Args('createFeedbackInput') createFeedbackInput: CreateFeedbackInput,
  ) {
    return this.feedbackService.create(createFeedbackInput);
  }

  @Query('feedbacks')
  findAll(@Args('grantId') grantId: string) {
    return this.feedbackService.findMany(grantId);
  }

  @Query('feedback')
  findOne(@Args('id') id: string) {
    return this.feedbackService.findOne(id);
  }
}
