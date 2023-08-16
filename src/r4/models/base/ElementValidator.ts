import { IElement } from '../../interfaces/base';
import { recursiveValidateExtension } from '../../../globals/helpers/validateExtensionHelper';
import { DataTypeAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import { ValidatorHelperR4 } from '../../../globals/helpers/ValidatorHelperR4';

export const elementKeys = DataTypeAttributesHelperR4<IElement>([]);

export function ElementValidator(payload: IElement | IElement[], path: string = 'Element'): void {
  if (Array.isArray(payload)) {
    payload.forEach((item, index) => {
      ElementValidator(item, `${path}[${index}]`);
    });
    return;
  }

  /*

  if (payload.extension?.length) {
    payload.extension.forEach((ext) => {
      recursiveValidateExtension(ext, path);
    });
  }
  
   */

  ValidatorHelperR4(payload, elementKeys as any, path);
}
