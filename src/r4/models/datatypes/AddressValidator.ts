import { DataTypeAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import { IAddress } from '../../interfaces/datatypes';
import { ValidatorHelperR4 } from '../../../globals/helpers/ValidatorHelperR4';
import { AddressTypeEnum, AddressUseEnum } from '../../../enums';

export const addressType: string[] = Object.values(AddressTypeEnum);
export const addressUse: string[] = Object.values(AddressUseEnum);

export const addressAttributes = DataTypeAttributesHelperR4<IAddress>([
  {
    name: 'use',
    type: 'code',
    isRequired: false,
    isArray: false,
    enumValues: addressUse,
  },
  {
    name: 'type',
    type: 'code',
    isRequired: false,
    isArray: false,
    enumValues: addressType,
  },
  {
    name: 'text',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'line',
    type: 'string',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'city',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'district',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'state',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'postalCode',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'country',
    type: 'string',
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
    name: '_use',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_type',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_text',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_line',
    type: 'Element',
    isArray: true,
    isRequired: false,
  },
  {
    name: '_city',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_district',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_state',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_postalCode',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_country',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);

export function AddressValidator(payload: IAddress | IAddress[], path: string = 'Address'): void {
  if (Array.isArray(payload)) {
    payload.forEach((address, index) => {
      AddressValidator(address, `${path}[${index}]`);
    });
    return;
  }

  //if (payload.period) PeriodValidator(payload.period, path);

  //ValidateExtensionFieldHelper(payload);
  //ValidateInvalidFieldHelper(payload, addressFields, path);

  ValidatorHelperR4(payload, addressAttributes, path);
}
