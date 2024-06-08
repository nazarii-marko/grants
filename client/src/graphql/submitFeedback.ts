import { gql } from '@apollo/client';

export const SUBMIT_FEEDBACK = gql`
  mutation submitFeedback($submitFeedbackInput: SubmitFeedbackInput!) {
    submitFeedback(submitFeedbackInput: $submitFeedbackInput) {
      id
    }
  }
`;
