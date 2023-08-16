import { ICompositionRelatesTo } from '../../interfaces/backbones';
import { BackboneAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import { ValidatorHelperR4 } from '../../../globals/helpers/ValidatorHelperR4';

function ValidateConstraint(payload: ICompositionRelatesTo, path: string = 'CompositionRelatesTo') {
  if (!payload.targetIdentifier && !payload.targetReference)
    throw new Error(`RequiredException: ${path} must have either targetIdentifier or targetReference`);

  if (payload.targetIdentifier && payload.targetReference)
    throw new Error(`InvalidException: ${path} must have either targetIdentifier or targetReference, not both`);
}

export const compositionRelatesToKeysDefinitions = BackboneAttributesHelperR4<ICompositionRelatesTo>([
  {
    name: 'code',
    type: 'code',
    isArray: false,
    isRequired: true,
  },
  {
    name: 'targetIdentifier',
    type: 'Identifier',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'targetReference',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceValues: ['Composition'],
  },
  {
    name: '_code',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);

export const compositionRelatesToFields = compositionRelatesToKeysDefinitions.map((e) => e.name);

export function CompositionRelatesToValidator(
  payload: ICompositionRelatesTo | ICompositionRelatesTo[],
  path: string = 'CompositionRelatesTo',
) {
  if (Array.isArray(payload)) {
    payload.forEach((item, index) => {
      CompositionRelatesToValidator(item, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR4(payload, compositionRelatesToKeysDefinitions, path);
  ValidateConstraint(payload);
}
