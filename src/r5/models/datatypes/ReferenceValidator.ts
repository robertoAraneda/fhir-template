import { DataTypeAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { IReference } from '../../interfaces/datatypes';
import { ResourceTypeR5FromArray } from '../../GlobalResourceTypes';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';
import { ValidateReferenceFormatHelper } from '../../../globals/helpers/validateReferenceFormatHelper';

export const referenceKeysDefinitions = DataTypeAttributesHelperR5<IReference>([
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
  resources: ResourceTypeR5FromArray[] | 'all' | null = 'all',
  path: string = 'Reference',
) {
  if (Array.isArray(args)) {
    args.forEach((reference, index) => {
      ReferenceValidator(reference, resources, `${path}[${index}]`);
    });
    return;
  }

  ValidateConstraint(args, resources, path);
  ValidatorHelperR5(args, referenceKeysDefinitions, path);
}

function ValidateConstraint(payload: IReference, resources: any, path: string) {
  if (payload.reference) ValidateReferenceFormatHelper(payload.reference, resources, `${path}.reference`);
}
