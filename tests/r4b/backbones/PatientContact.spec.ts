import { PatientContactBuilder } from '../../../src/r4b/builders/backbones';
import { IPatientContact } from '../../../src/r4b/interfaces/backbones';
import { IValidatorContext } from '../../../src/r4b';
import FHIRContext from '../../../src';

describe('PatientContact', () => {
  let validator: IValidatorContext;
  let builder: PatientContactBuilder;

  beforeAll(() => {
    const context = new FHIRContext();
    validator = context.forR4B().validators;
  });

  // create global
  beforeEach(() => {
    builder = new PatientContactBuilder();
  });

  it('should be able to create a new patient_contact payload and validate with correct data', async () => {
    const dataType: IPatientContact = {
      id: '123',
      gender: 'female',
      relationship: [
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v2-0131',
              code: 'N',
              display: 'Next-of-Kin',
            },
          ],
        },
      ],
      name: {
        use: 'official',
        given: ['John'],
        family: 'Doe',
      },
    };

    const validate = await validator.backboneElements.PatientContact(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new patient_contact payload and validate with wrong data', async () => {
    const dataType = {
      id: '123',
      issuer: {
        reference: 'test',
      },
      period: {
        start: 'wrong date', // wrong date
        end: '2023-01-01',
      },
      code: {
        coding: [
          {
            system: 'http://hl7.org/fhir/organization-qualification',
            code: 'any',
          },
        ],
      },
      wrongProperty: 'test', // wrong property
    };

    const validate = await validator.backboneElements.PatientContact(dataType);

    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors).toHaveLength(4);
    expect(validate.errors).toEqual([
      {
        instancePath: '',
        keyword: 'additionalProperties',
        message: 'must NOT have additional properties',
        params: { additionalProperty: 'issuer' },
        schemaPath: '#/additionalProperties',
      },
      {
        instancePath: '',
        keyword: 'additionalProperties',
        message: 'must NOT have additional properties',
        params: { additionalProperty: 'code' },
        schemaPath: '#/additionalProperties',
      },
      {
        instancePath: '',
        keyword: 'additionalProperties',
        message: 'must NOT have additional properties',
        params: { additionalProperty: 'wrongProperty' },
        schemaPath: '#/additionalProperties',
      },
      {
        instancePath: '/period/start',
        keyword: 'pattern',
        message: "The value '/period/start' does not match with datatype 'dateTime'",
        params: { value: '/period/start' },
        schemaPath: 'base.schema.json#/definitions/dateTime/pattern',
      },
    ]);
  });

  it('should be able to create a new patient_contact payload using builder methods', async () => {
    // build() is a method that returns the object that was built
    const dataType = builder
      .setId('123')
      .setGender('male')
      .addTelecom({
        use: 'home',
        system: 'phone',
        value: '1234567890',
      })
      .addPatientContactParamExtension('gender', {
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName',
            valueString: 'Jane Doe',
          },
        ],
      })
      .addExtension({
        url: 'http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName',
        valueString: 'Jane Doe',
      })
      .build();

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
      _gender: {
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName',
            valueString: 'Jane Doe',
          },
        ],
      },
      extension: [
        {
          url: 'http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName',
          valueString: 'Jane Doe',
        },
      ],
      gender: 'male',
      id: '123',
      telecom: [
        {
          system: 'phone',
          use: 'home',
          value: '1234567890',
        },
      ],
    });
  });
});
