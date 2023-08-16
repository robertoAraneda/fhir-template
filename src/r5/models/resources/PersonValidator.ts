import { ResourceAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { IPerson } from '../../interfaces/resources';
import { AdministrativeGenderEnum } from '../../../enums';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const personKeysDefinitions = ResourceAttributesHelperR5<IPerson>([
  {
    name: 'identifier',
    type: 'Identifier',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'active',
    type: 'boolean',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'name',
    type: 'HumanName',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'telecom',
    type: 'ContactPoint',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'gender',
    type: 'code',
    isRequired: false,
    isArray: false,
    enumValues: Object.values(AdministrativeGenderEnum),
  },
  {
    name: 'birthDate',
    type: 'date',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'deceasedBoolean',
    type: 'boolean',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'deceasedDateTime',
    type: 'dateTime',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'address',
    type: 'Address',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'maritalStatus',
    type: 'CodeableReference',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'photo',
    type: 'Attachment',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'communication',
    type: 'PersonCommunication',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'managingOrganization',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceValues: ['Organization'],
  },
  {
    name: 'link',
    type: 'PersonLink',
    isArray: true,
    isRequired: false,
  },
  {
    name: '_gender',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_birthDate',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_active',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_deceasedBoolean',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_deceasedDateTime',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
]);
export const personKeys = personKeysDefinitions.map((key) => key.name);

export function PersonValidator(payload: IPerson, path: string = 'Person'): void {
  ValidatorHelperR5(payload, personKeysDefinitions, path);
}
