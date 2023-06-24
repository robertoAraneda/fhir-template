export default class RequiredException extends Error {
  constructor(entity: string, errors?: any[]) {
    const message = `Invalid ${entity}: ${JSON.stringify(
      errors
        ?.map((error) => {
          const { keyword, message } = error;

          if (keyword === 'required') {
            return message;
          }
        })
        .join(', '),
      null,
      2,
    )}`;
    super(message);
  }
}
