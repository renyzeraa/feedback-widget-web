export class InvalidFeedbackTypeFormat extends Error {
  constructor() {
    super('Invalid feedback type format. It should be one of the predefined types.')
  }
}