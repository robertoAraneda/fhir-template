export default class RequiredException extends Error {
  constructor(entity: string, errors?: any[]) {
    const message = `Invalid ${entity}: ${JSON.stringify(
      errors
        ?.map((error) => {
          const { keyword, message: msg } = error;

          if (keyword === 'required') {
            return msg;
          }
        })
        .join(', '),
      null,
      2,
    )}`;
    super(message);
  }
}
