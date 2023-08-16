import { ResourceAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import { IPractitionerRole } from '../../interfaces/resources';
import { ValidatorHelperR4 } from '../../../globals/helpers/ValidatorHelperR4';

export const practitionerRoleKeysDefinitions = ResourceAttributesHelperR4<IPractitionerRole>([
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
    name: 'telecom',
    type: 'ContactPoint',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'availableTime',
    type: 'PractitionerRoleAvailableTime',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'notAvailable',
    type: 'PractitionerRoleNotAvailable',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'availabilityExceptions',
    type: 'string',
    isRequired: false,
    isArray: false,
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
  {
    name: '_availabilityExceptions',
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
  ValidatorHelperR4(practitionerRole, practitionerRoleKeysDefinitions, path);
}
