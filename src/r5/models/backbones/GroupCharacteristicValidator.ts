import { IGroupCharacteristic } from '../../interfaces/backbones';
import RequiredException from '../../../globals/exceptions/RequiredException';
import { BackboneAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const groupCharacteristicKeysDefinitions = BackboneAttributesHelperR5<IGroupCharacteristic>([
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

  ValidatorHelperR5(payload, groupCharacteristicKeysDefinitions, path);
  ValidateConstraint(payload, path);
}

function ValidateConstraint(payload: IGroupCharacteristic, path: string): void {
  const requiredValues = [
    'valueCodeableConcept',
    'valueBoolean',
    'valueQuantity',
    'valueRange',
    'valueReference',
  ] as const;

  if (!requiredValues.some((value) => payload[value])) {
    throw new RequiredException(
      `One of [${requiredValues.join(', ')}] is required for GroupCharacteristic at path: ${path}.value[x]`,
    );
  }

  // only one of the values can be present
  const presentValues = requiredValues.filter((value) => payload[value]);
  if (presentValues.length > 1) {
    throw new RequiredException(
      `Only one of [${requiredValues.join(', ')}] is required for GroupCharacteristic at path: ${path}.value[x]`,
    );
  }
}
