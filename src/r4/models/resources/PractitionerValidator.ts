import { ResourceAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import { IPractitioner } from '../../interfaces/resources';
import { AdministrativeGenderEnum } from '../../enums';
import { ValidatorHelperR4 } from '../../validators/ValidatorHelperR4';

export const practitionerKeysDefinitions = ResourceAttributesHelperR4<IPractitioner>([
  {
    name: 'identifier',
    type: 'Identifier',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'active',
    type: 'boolean',
    isRequired: false,
    isArray: false,
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
    name: 'address',
    type: 'Address',
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
    isRequired: false,
    isArray: false,
  },
  {
    name: 'photo',
    type: 'Attachment',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'qualification',
    type: 'PractitionerQualification',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'communication',
    type: 'CodeableConcept',
    isArray: true,
    isRequired: false,
  },
  {
    name: '_active',
    type: 'Element',
    isRequired: false,
    isArray: false,
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
]);
export const practitionerKeys = practitionerKeysDefinitions.map((key) => key.name);

export function PractitionerValidator(payload: IPractitioner, path: string = 'Practitioner'): void {
  ValidatorHelperR4(payload, practitionerKeysDefinitions, path);
}
