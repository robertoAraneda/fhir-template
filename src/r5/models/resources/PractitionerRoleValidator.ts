import { ResourceAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { IPractitionerRole } from '../../interfaces/resources';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const practitionerRoleKeysDefinitions = ResourceAttributesHelperR5<IPractitionerRole>([
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
    name: 'period',
    type: 'Period',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'practitioner',
    type: 'Reference',
    isRequired: false,
    isArray: false,
    referenceValues: ['Practitioner'],
  },
  {
    name: 'organization',
    type: 'Reference',
    isRequired: false,
    isArray: false,
    referenceValues: ['Organization'],
  },
  {
    name: 'code',
    type: 'CodeableConcept',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'specialty',
    type: 'CodeableConcept',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'location',
    type: 'Reference',
    isRequired: false,
    isArray: true,
    referenceValues: ['Location'],
  },
  {
    name: 'healthcareService',
    type: 'Reference',
    isRequired: false,
    isArray: true,
    referenceValues: ['HealthcareService'],
  },
  {
    name: 'contact',
    type: 'ExtendedContactDetail',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'characteristic',
    type: 'CodeableConcept',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'communication',
    type: 'CodeableConcept',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'availability',
    type: 'Availability',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'endpoint',
    type: 'Reference',
    isRequired: false,
    isArray: true,
    referenceValues: ['Endpoint'],
  },
  {
    name: '_active',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
]);
export const practitionerRoleKeys = practitionerRoleKeysDefinitions.map((key) => key.name);

export function PractitionerRoleValidator(
  practitionerRole: IPractitionerRole,
  path: string = 'PractitionerRole',
): void {
  ValidatorHelperR5(practitionerRole, practitionerRoleKeysDefinitions, path);
}
