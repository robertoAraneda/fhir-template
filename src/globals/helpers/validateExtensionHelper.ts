import { IExtension } from '../../r4/interfaces/datatypes';
import { IElement } from '../../r4/interfaces/base';
import { ElementValidator } from '../../r4/models/base/ElementValidator';
import { ExtensionValidator } from '../../r4/models/datatypes/ExtensionValidator';

export function recursiveValidateExtension(payload: IExtension, parentField: string): void {
  ExtensionValidator(payload, parentField);

  const { extension, ...rest } = payload;
  if (extension) {
    extension.forEach((ext) => {
      recursiveValidateExtension(ext, parentField);
    });
  } else {
    ExtensionValidator(rest, parentField);
  }

  const extensionsField = Object.keys(payload).filter((key) => key.startsWith('_'));

  if (extensionsField.length > 0) {
    extensionsField.forEach((key) => {
      const param = key as keyof IElement;

      if (payload[param]) {
        ElementValidator(payload[param] as IElement, param);
      }
    });
  }
}
