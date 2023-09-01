import { DataTypeAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import { IReference } from '../../interfaces/datatypes';
import { ResourceTypeR4FromArray } from '../../GlobalResourceTypes';
import { ValidateReferenceFormatHelper } from '../../../globals/helpers/validateReferenceFormatHelper';
import { ValidatorHelperR4 } from '../../validators/ValidatorHelperR4';
export const referenceKeysDefinitions = DataTypeAttributesHelperR4<IReference>([
  {
    name: 'reference',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'type',
    type: 'uri',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'identifier',
    type: 'Identifier',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'display',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_display',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_reference',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_type',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
]);

export const referenceAttributes = referenceKeysDefinitions.map((key) => key.name);

export function ReferenceValidator(
  args: IReference | IReference[],
  resources: ResourceTypeR4FromArray[] | 'all' | null = 'all',
  path: string = 'Reference',
) {
  if (Array.isArray(args)) {
    args.forEach((reference, index) => {
      ReferenceValidator(reference, resources, `${path}[${index}]`);
    });
    return;
  }

  ValidateConstraint(args, resources, path);
  ValidatorHelperR4(args, referenceKeysDefinitions, path);
}

function ValidateConstraint(payload: IReference, resources: any, path: string) {
  // validate reference string format
  if (payload.reference) ValidateReferenceFormatHelper(payload.reference, resources, `${path}.reference`);
}
