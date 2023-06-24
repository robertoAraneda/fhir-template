export default class ResourceException extends Error {
  constructor(entity: string, errors?: any[]) {
    const message = `Invalid Resource: ${entity}: ${JSON.stringify(
      errors
        ?.map((error) => {
          const { keyword, message: msg, params, constraint } = error;

          if (keyword === 'pattern') {
            return msg;
          }

          if (keyword === 'required') {
            return msg;
          }

          if (keyword === 'additionalProperties') {
            return `${msg}: [${params.additionalProperty}]`;
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
