import { validateSchema } from '../../r4/validators/BaseValidator';
import ResourceException from '../exceptions/ResourceException';

export function ValidateResourceFormatHelper<T>(args: T, ENTITY_NAME: string) {
  const { isValid, errors } = validateSchema(args, ENTITY_NAME);

  if (!isValid) {
    throw new ResourceException(ENTITY_NAME, errors);
  }
}
