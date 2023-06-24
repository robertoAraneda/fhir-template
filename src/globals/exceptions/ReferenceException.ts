export default class ReferenceException extends Error {
  constructor(value: string, resources?: any[] | string, path?: string) {
    const error = {
      value,
      path: path || 'reference',
    };
    let message = JSON.stringify(error, null, 2);
    if (resources) {
      Object.assign(error, { validReferenceResources: JSON.stringify(resources) });
      message = JSON.stringify(error, null, 2);
    }
    super('Invalid Reference: '.concat(message));
  }
}
