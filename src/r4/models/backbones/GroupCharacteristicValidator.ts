import { IGroupCharacteristic } from '../../interfaces/backbones';
import RequiredException from '../../../globals/exceptions/RequiredException';
import { BackboneAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import { ValidatorHelperR4 } from '../../../globals/helpers/ValidatorHelperR4';

export const groupCharacteristicKeysDefinitions = BackboneAttributesHelperR4<IGroupCharacteristic>([
  {
    name: 'code',
    type: 'CodeableConcept',
    isArray: false,
    isRequired: true,
  },
  {
    name: 'valueCodeableConcept',
    type: 'CodeableConcept',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'valueBoolean',
    type: 'boolean',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'valueQuantity',
    type: 'Quantity',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'valueRange',
    type: 'Range',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'valueReference',
    type: 'Reference',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'exclude',
    type: 'boolean',
    isArray: false,
    isRequired: true,
  },
  {
    name: 'period',
    type: 'Period',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_valueBoolean',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_exclude',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);

export const groupCharacteristicFields = groupCharacteristicKeysDefinitions.map((item) => item.name);

export function GroupCharacteristicValidator(
  payload: IGroupCharacteristic | IGroupCharacteristic[],
  path: string = 'GroupCharacteristic',
): void {
  if (Array.isArray(payload)) {
    payload.forEach((item, index) => {
      GroupCharacteristicValidator(item, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR4(payload, groupCharacteristicKeysDefinitions, path);
  ValidateConstraint(payload, path);
}

function ValidateConstraint(payload: IGroupCharacteristic, path: string): void {
  if (!payload.code) {
    // TODO: Add a better error message
    throw new RequiredException(`code is required for GroupCharacteristic at path: ${path}`);
  }

  const requiredValues = [
    'valueCodeableConcept',
    'valueBoolean',
    'valueQuantity',
    'valueRange',
    'valueReference',
  ] as const;

  if (!requiredValues.some((value) => payload[value])) {
    throw new RequiredException(
      `One of [${requiredValues.join(', ')}] is required for GroupCharacteristic at path: ${path}`,
    );
  }
}
