import { IHumanName } from '../../interfaces/datatypes';
import { NameUseEnum } from '../../enums';
import { DataTypeAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';

import { PeriodValidator } from './PeriodValidator';
import { ValidatorHelperR4 } from '../../validators/ValidatorHelperR4';

export const humanNameKeyDefinitions = DataTypeAttributesHelperR4<IHumanName>([
  {
    name: 'use',
    type: 'code',
    isRequired: false,
    isArray: false,
    enumValues: Object.values(NameUseEnum),
  },
  {
    name: 'text',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'family',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'given',
    type: 'string',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'prefix',
    type: 'string',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'suffix',
    type: 'string',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'period',
    type: 'Period',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_use',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_text',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_family',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_given',
    type: 'Element',
    isRequired: false,
    isArray: true,
  },
  {
    name: '_prefix',
    type: 'Element',
    isRequired: false,
    isArray: true,
  },
  {
    name: '_suffix',
    type: 'Element',
    isRequired: false,
    isArray: true,
  },
]);

export const humanNameFields = humanNameKeyDefinitions.map((item) => item.name);

export function HumanNameValidator(payload: IHumanName | IHumanName[], path: string = 'HumanName'): void {
  if (Array.isArray(payload)) {
    payload.forEach((item, index) => {
      HumanNameValidator(item, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR4(payload, humanNameKeyDefinitions, path);
}
