import { IDomainResource, IElement, IResource } from '../../r4/interfaces/base';
import { ElementValidator } from '../../r4/models/base/ElementValidator';

import { ExtensionValidator } from '../../r4/models/datatypes/ExtensionValidator';

export function ValidateExtensionFieldHelper<T extends IElement | IDomainResource>(
  payload: T,
  entity: string = '',
): void {
  const fields = Object.keys(payload).filter((attribute) => {
    const param = attribute as keyof T;
    return payload[param] !== undefined;
  });

  const extractExtensionField = fields.filter((attribute) => attribute.startsWith('_'));

  if (extractExtensionField.length > 0) {
    extractExtensionField.forEach((extensionField) => {
      const param = extensionField as keyof T;

      ElementValidator(payload[param] as IElement, param as string);
    });
  }

  const element = payload as IElement;

  if (element.extension?.length) {
    element.extension.forEach((ext) => {
      ExtensionValidator(ext, entity);
    });
  }
}
