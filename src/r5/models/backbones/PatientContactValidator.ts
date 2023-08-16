import { IPatientContact } from '../../interfaces/backbones';
import { AdministrativeGenderEnum } from '../../../enums';
import { AdministrativeGenderType } from '../../../types';
import assert from 'assert';
import {
  BackboneAttributesHelperR4,
  BackboneAttributesHelperR5,
} from '../../../globals/helpers/generateListAttributesHelper';
import { ValidatorHelperR4 } from '../../../globals/helpers/ValidatorHelperR4';
import ResourceException from '../../../globals/exceptions/ResourceException';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const patientContactKeysDefinitions = BackboneAttributesHelperR5<IPatientContact>([
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

  ValidatorHelperR5(payload, patientContactKeysDefinitions, path);
  ValidateConstraint(payload);
}

function ValidateConstraint(payload: IPatientContact): void {
  if (!payload.name && !payload.organization && !payload.telecom && !payload.address) {
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
}
