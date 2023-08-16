import { IPatient } from '../../interfaces/resources';
import ResourceException from '../../../globals/exceptions/ResourceException';
import { ResourceAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { AdministrativeGenderEnum } from '../../../enums';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const patientKeysDefinitions = ResourceAttributesHelperR5<IPatient>([
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
    isArray: false,
    isRequired: false,
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
    type: 'CodeableConcept',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'multipleBirthBoolean',
    type: 'boolean',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'multipleBirthInteger',
    type: 'integer',
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
    name: 'contact',
    type: 'PatientContact',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'communication',
    type: 'PatientCommunication',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'generalPractitioner',
    type: 'Reference',
    isArray: true,
    isRequired: false,
    referenceValues: ['Practitioner', 'Organization', 'PractitionerRole'],
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
    type: 'PatientLink',
    isArray: true,
    isRequired: false,
  },
  {
    name: '_active',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_birthDate',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_multipleBirthBoolean',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_multipleBirthInteger',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_deceasedBoolean',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_deceasedDateTime',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_gender',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);
export const patientKeys = patientKeysDefinitions.map((key) => key.name);
export const patientMappings = patientKeysDefinitions.reduce(
  (acc, cur) => ({
    ...acc,
    [cur.name]: cur.type,
  }),
  {},
);

export function PatientValidator(payload: IPatient, path: string = 'Patient'): void {
  ValidatorHelperR5(payload, patientKeysDefinitions, path);
  ConstraintValidator(payload, path);
}

function ConstraintValidator(payload: IPatient, path: string) {
  if (payload.contact && payload.contact.length > 0) {
    payload.contact.forEach((contact, index) => {
      // SHALL at least contain a contact's details or a reference to an organization

      if (!contact.name && !contact.organization && !contact.telecom && !contact.address) {
        throw new ResourceException('Patient', [
          {
            constraint: {
              id: 'pat-1',
              level: 'Rule',
              description: "SHALL at least contain a contact's details or a reference to an organization",
              location: 'Patient.contact',
            },
          },
        ]);
      }
    });
  }
}
