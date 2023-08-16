export default class ConstraintException extends Error {
  constructor(entity: string, message: string) {
    const msg = `ConstraintException: [${entity}] ${message}`;
    super(msg);
  }
}
