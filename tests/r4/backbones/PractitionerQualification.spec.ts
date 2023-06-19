import FHIRContext from '../../../src';
import { IPractitionerQualification } from '../../../src/r4/interfaces/backbones';
import { _validateBackbone } from '../../../src/r4/validators/BaseValidator';
import { IPractitionerQualificationBuilder } from '../../../src/r4/models/backbones/PractitionerQualificationBuilder';

describe('PractitionerQualification FHIR R4', () => {
  let builder: IPractitionerQualificationBuilder;
  const { PractitionerQualification } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = PractitionerQualification.builder();
  });

  it('should be able to validate a new practitioner_qualification [new PractitionerQualification()]', async () => {
    const item = new PractitionerQualification({
      id: '123',
      code: {
        coding: [
          {
            code: '123',
            system: 'system',
          },
        ],
      },
      issuer: {
        reference: 'Organization/123',
      },
    });

    const validate = await _validateBackbone(item, 'Practitioner_Qualification');
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new practitioner_qualification [IPractitionerQualification]', async () => {
    const item: IPractitionerQualification = {
      id: '123',
      code: {
        coding: [
          {
            code: '123',
            system: 'system',
          },
        ],
      },
      issuer: {
        reference: 'Organization/123',
      },
    };

    const validate = await _validateBackbone(item, 'Practitioner_Qualification');
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new practitioner_qualification using builder methods [new PractitionerQualification()]', async () => {
    const item = builder
      .setId('123')
      .setCode({
        coding: [
          {
            code: '123',
            system: 'system',
          },
        ],
      })
      .setIssuer({
        reference: 'Organization/123',
      })
      .setPeriod({
        start: '2020-01-01',
        end: '2020-01-01',
      })
      .build();

    const validate = await _validateBackbone(item, 'Practitioner_Qualification');
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();

    expect(item).toEqual({
      code: {
        coding: [
          {
            code: '123',
            system: 'system',
          },
        ],
      },
      id: '123',
      issuer: {
        reference: 'Organization/123',
      },
      period: {
        end: '2020-01-01',
        start: '2020-01-01',
      },
    });
  });

  it('should be get errors validators if new address has wrong data', async () => {
    const item = {
      id: '123',
      wrongProperty: '123',
    };

    const validate = await _validateBackbone(item, 'Practitioner_Qualification');

    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors?.length).toBe(2);
    expect(validate.errors).toEqual([
      {
        instancePath: '',
        keyword: 'required',
        message: "must have required property 'code'",
        params: {
          missingProperty: 'code',
        },
        schemaPath: '#/required',
      },
      {
        instancePath: '',
        keyword: 'additionalProperties',
        message: 'must NOT have additional properties',
        params: {
          additionalProperty: 'wrongProperty',
        },
        schemaPath: '#/additionalProperties',
      },
    ]);
  });
});
