import { DataTypeAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { IContactPoint } from '../../interfaces/datatypes';
import ConstraintException from '../../../globals/exceptions/ConstraintException';
import { ContactPointSystemEnum, ContactPointUseEnum } from '../../../r4/enums';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const contactPointSystems = Object.values(ContactPointSystemEnum);
export const contactPointUses = Object.values(ContactPointUseEnum);
export const contactPointKeyDefinitions = DataTypeAttributesHelperR5<IContactPoint>([
  {
    name: 'system',
    type: 'code',
    isRequired: false,
    isArray: false,
    enumValues: contactPointSystems,
  },
  {
    name: 'value',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'use',
    type: 'code',
    isRequired: false,
    isArray: false,
    enumValues: contactPointUses,
  },
  {
    name: 'rank',
    type: 'positiveInt',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'period',
    type: 'Period',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_system',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_value',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_use',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_rank',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);

export const contactPointKeys = contactPointKeyDefinitions.map((item) => item.name);

function ValidateConstraint(payload: IContactPoint, path: string): void {
  // cpt-2: A system is required if a value is provided
  if (payload.value && !payload.system) {
    throw new ConstraintException(path, 'A system is required if a value is provided (cpt-2)');
  }
}

export function ContactPointValidator(payload: IContactPoint | IContactPoint[], path: string = 'ContactPoint'): void {
  if (payload instanceof Array) {
    payload.forEach((item) => {
      ContactPointValidator(item);
    });
    return;
  }

  ValidatorHelperR5(payload, contactPointKeyDefinitions, path);
  ValidateConstraint(payload, path);
}
