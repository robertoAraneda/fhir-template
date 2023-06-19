import FHIRContext from '../../../src';
import { IPatientContact } from '../../../src/r4/interfaces/backbones';
import { IPatientContactBuilder } from '../../../src/r4/models/backbones/PatientContact';
import { _validateBackbone } from '../../../src/r4/validators/BaseValidator';

describe('PatientContact FHIR R4', () => {
  let builder: IPatientContactBuilder;

  const { PatientContact } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = PatientContact.builder();
  });

  it('should be able to validate a new patient_contact [new PatientContact()]', async () => {
    const item = new PatientContact({
      id: '123',
      gender: 'male',
      _gender: {
        extension: [
          {
            url: 'url',
            valueString: 'valueString',
          },
        ],
      },
      organization: {
        reference: 'Organization/123',
        display: 'display',
      },
    });

    const validate = await _validateBackbone(item, 'Patient_Contact');
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new patient_contact [IPatientContact]', async () => {
    const item: IPatientContact = {
      id: '123',
      gender: 'male',
      _gender: {
        extension: [
          {
            url: 'url',
            valueString: 'valueString',
          },
        ],
      },
      organization: {
        reference: 'Organization/123',
        display: 'display',
      },
    };

    const validate = await _validateBackbone(item, 'Patient_Contact');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new patient_contact using builder methods [new PatientContact()]', async () => {
    const item = builder
      .setId('123')
      .addRelationship({
        coding: [
          {
            code: '123',
            system: 'system',
          },
        ],
      })
      .setPeriod({
        start: '2020-01-01',
        end: '2020-01-01',
      })
      .addParamExtension('gender', {
        extension: [
          {
            url: 'preferred',
            valueDate: '2020-01-01',
          },
        ],
      })
      .build();

    const validate = await _validateBackbone(item, 'Patient_Contact');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();

    expect(item).toEqual({
      _gender: {
        extension: [
          {
            url: 'preferred',
            valueDate: '2020-01-01',
          },
        ],
      },
      id: '123',
      period: {
        end: '2020-01-01',
        start: '2020-01-01',
      },
      relationship: [
        {
          coding: [
            {
              code: '123',
              system: 'system',
            },
          ],
        },
      ],
    });
  });

  it('should be get errors validators if new address has wrong data', async () => {
    const item = {
      id: '123',
      wrongProperty: 'wrongProperty',
    };

    const validate = await _validateBackbone(item, 'Patient_Contact');
    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors?.length).toBe(1);
    expect(validate.errors).toEqual([
      {
        instancePath: '',
        schemaPath: '#/additionalProperties',
        keyword: 'additionalProperties',
        params: {
          additionalProperty: 'wrongProperty',
        },
        message: 'must NOT have additional properties',
      },
    ]);
  });
});
