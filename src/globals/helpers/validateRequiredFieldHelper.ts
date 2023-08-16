import RequiredException from '../exceptions/RequiredException';

/**
 * Validate that the required fields are present in the payload
 * @param fields Array of fields to validate
 * @param payload Payload to validate
 * @param path Path to the payload
 * @throws RequiredException
 */
export function ValidateRequiredFieldHelper<T>(
  fields: ReadonlyArray<keyof T>,
  payload: T extends { [key: string]: any } ? T : never,
  path: string = 'this',
) {
  fields.forEach((field) => {
    if (!hasValue(payload[field]) && !hasValue(payload[`_${String(field)}`])) {
      throw new RequiredException(`${String(field)} or _${String(field)} is required. Path: ${path}`);
    }
  });
}

function hasValue(value: any): boolean {
  return value !== null && value !== undefined;
}

function assertIsDefined<T>(value: T): asserts value is NonNullable<T> {
  if (value === undefined || value === null) {
    throw new Error(`${value} is not defined`);
  }
}
