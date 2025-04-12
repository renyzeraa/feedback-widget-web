export class InvalidFeedbackCommentFormat extends Error {
  constructor() {
    super('Comment is empty.')
  }
}