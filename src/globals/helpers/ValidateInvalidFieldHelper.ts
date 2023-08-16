import InvalidFieldException from '../exceptions/InvalidFieldException';

export function ValidateInvalidFieldHelper<T extends {}>(
  payload: T,
  entityFields: readonly string[],
  entityName: string,
): void {
  const fields = Object.keys(payload);

  const [additionalField] = fields.filter((attribute) => !entityFields.includes(attribute));
  if (additionalField) {
    throw new InvalidFieldException(entityName, additionalField);
  }
}
