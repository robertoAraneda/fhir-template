export default class BackboneException extends Error {
  constructor(entity: string, errors?: any[]) {
    const message = `Invalid Backbone Element ${entity}: ${JSON.stringify(
      errors
        ?.map((error) => {
          const { keyword, message: msg, params } = error;

          if (keyword === 'pattern') {
            return msg;
          }

          if (keyword === 'required') {
            return msg;
          }

          if (keyword === 'additionalProperties') {
            return `${msg}: [${params.additionalProperty}]`;
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
