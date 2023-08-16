export default class RequiredException extends Error {
  constructor(error: string) {
    const message = `RequiredException: ${error}`;
    super(message);
  }
}
