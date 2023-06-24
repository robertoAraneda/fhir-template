export default class BackboneException extends Error {
  constructor(entity: string, errors?: any[]) {
    const message = `Invalid Backbone Element ${entity}: ${JSON.stringify(
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
        })
        .join(', '),
      null,
      2,
    )}`;
    super(message);
    /*
    this.name = 'BackboneException';
    this.message = message;

     */
  }
}
