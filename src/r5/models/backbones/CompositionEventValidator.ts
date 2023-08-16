import { BackboneAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';
import ICompositionEvent from '../../interfaces/backbones/ICompositionEvent';

export const compositionEventKeysDefinitions = BackboneAttributesHelperR5<ICompositionEvent>([
  {
    name: 'period',
    type: 'Period',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'detail',
    type: 'CodeableReference',
    isArray: true,
    isRequired: false,
    referenceValues: 'all',
  },
]);

export const compositionEventFields = compositionEventKeysDefinitions.map((e) => e.name);

export function CompositionEventValidator(
  payload: ICompositionEvent | ICompositionEvent[],
  path: string = 'CompositionEvent',
) {
  if (Array.isArray(payload)) {
    payload.forEach((p, index) => {
      CompositionEventValidator(p, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR5(payload, compositionEventKeysDefinitions, path);
}
