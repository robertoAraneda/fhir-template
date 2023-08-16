export default class InvalidFieldException extends Error {
  constructor(entity: string, field: string) {
    const message = `InvalidFieldException: field(s) '${field}' is not a valid for ${entity}`;
    super(message);
  }
}
