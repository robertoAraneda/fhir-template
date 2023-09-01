import { IRelatedPerson } from '../../interfaces/resources';
import { ValidatorHelperR4 } from '../../../r4/validators/ValidatorHelperR4';
import { ResourceAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { AdministrativeGenderEnum } from '../../../r4/enums';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const relatedPersonKeysDefinitions = ResourceAttributesHelperR5<IRelatedPerson>([
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
    name: 'patient',
    type: 'Reference',
    isRequired: false,
    isArray: false,
    referenceValues: ['Patient'],
  },
  {
    name: 'relationship',
    type: 'CodeableConcept',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'name',
    type: 'HumanName',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'telecom',
    type: 'ContactPoint',
    isRequired: false,
    isArray: true,
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
    name: 'address',
    type: 'Address',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'photo',
    type: 'Attachment',
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
    name: 'communication',
    type: 'RelatedPersonCommunication',
    isRequired: false,
    isArray: true,
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
export const relatedPersonKeys = relatedPersonKeysDefinitions.map((k) => k.name);

export function RelatedPersonValidator(resource: IRelatedPerson, path: string = 'RelatedPerson'): void {
  ValidatorHelperR5(resource, relatedPersonKeysDefinitions, path);
}
