import { IElement } from '../../interfaces/base';
import { DataTypeAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const elementKeys = DataTypeAttributesHelperR5<IElement>([]);

export function ElementValidator(payload: IElement | IElement[], path: string = 'Element'): void {
  if (Array.isArray(payload)) {
    payload.forEach((item, index) => {
      ElementValidator(item, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR5(payload, elementKeys as any, path);
}
