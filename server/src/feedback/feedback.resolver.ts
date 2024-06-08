import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FeedbackService } from './feedback.service';
import { SubmitFeedbackInput } from './dto/submit-feedback.input';

@Resolver('Feedback')
export class FeedbackResolver {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Mutation('submitFeedback')
  create(
    @Args('submitFeedbackInput') submitFeedbackInput: SubmitFeedbackInput,
  ) {
    return this.feedbackService.submitFeedback(submitFeedbackInput);
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
