export class InvalidScreenshotFormat extends Error {
  constructor() {
    super('Invalid screenshot format. It should be a base64 encoded PNG image.')
  }
}