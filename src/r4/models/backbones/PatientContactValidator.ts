import { IPatientContact } from '../../interfaces/backbones';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';
import assert from 'assert';
import { BackboneAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import { ValidatorHelperR4 } from '../../validators/ValidatorHelperR4';
import ResourceException from '../../../globals/exceptions/ResourceException';

export const patientContactKeysDefinitions = BackboneAttributesHelperR4<IPatientContact>([
  {
    name: 'relationship',
    type: 'CodeableConcept',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'name',
    type: 'HumanName',
    isArray: false,
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
    isArray: false,
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
    name: 'organization',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceValues: ['Organization'],
  },
  {
    name: 'period',
    type: 'Period',
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

export const patientContactFields = patientContactKeysDefinitions.map((item) => item.name);

export function PatientContactValidator(
  payload: IPatientContact | IPatientContact[],
  path: string = 'PatientContact',
): void {
  if (Array.isArray(payload)) {
    payload.forEach((p, index) => {
      PatientContactValidator(p, `${path}[${index}]`);
    });

    return;
  }

  ValidatorHelperR4(payload, patientContactKeysDefinitions, path);
}

function ValidateConstraint(payload: IPatientContact, path: string): void {
  // SHALL at least contain a contact's details or a reference to an organization

  if (!payload.name && !payload.organization && !payload.telecom && !payload.address) {
    throw new ResourceException('Organization', [
      {
        constraint: {
          id: 'org-3',
          level: 'Rule',
          description: "The telecom of an organization can never be of use 'home'",
          location: 'Organization.telecom',
        },
      },
    ]);
  }
}
