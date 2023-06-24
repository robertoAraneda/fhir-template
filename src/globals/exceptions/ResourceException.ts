export default class ResourceException extends Error {
  constructor(entity: string, errors?: any[]) {
    const message = `Invalid Resource: ${entity}: ${JSON.stringify(
      errors
        ?.map((error) => {
          const { keyword, instancePath, message, params, schemaPath, constraint } = error;

          if (keyword === 'pattern') {
            return message;
          }

          if (keyword === 'required') {
            return message;
          }

          if (keyword === 'additionalProperties') {
            return `${message}: [${params.additionalProperty}]`;
          }

          if (constraint) {
            return `${constraint.description} (${constraint.id})`;
          }
        })
        .join(', '),
      null,
      2,
    )}`;
    super(message);
  }
}
