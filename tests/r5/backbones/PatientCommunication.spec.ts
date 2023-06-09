import { IPatientCommunication } from '../../../src/r5/interfaces/backbones';
import FHIRContext from '../../../src';
import PatientCommunicationBuilder from '../../../src/r5/models/backbones/PatientCommunicationBuilder';
import { _validateBackbone } from '../../../src/r5/validators/BaseValidator';

describe('PatientCommunication FHIR R5', () => {
  const { PatientCommunication } = new FHIRContext().forR5();
  let builder: PatientCommunicationBuilder;

  // create global
  beforeEach(() => {
    builder = PatientCommunication.builder();
  });

  it('should be able to create a new patient_communication payload and validate with correct data [IPatientCommunication]', async () => {
    const dataType: IPatientCommunication = {
      id: '123',
      preferred: true,
      language: {
        coding: [
          {
            system: 'http://hl7.org/fhir/ValueSet/languages',
            code: 'en',
            display: 'English',
          },
        ],
      },
    };

    const validate = await _validateBackbone(dataType, 'Patient_Communication');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new patient_communication payload and validate with correct data [new PatientCommunication()]', async () => {
    const dataType = new PatientCommunication({
      id: '123',
      preferred: true,
      language: {
        coding: [
          {
            system: 'http://hl7.org/fhir/ValueSet/languages',
            code: 'en',
            display: 'English',
          },
        ],
      },
    });

    const validate = await _validateBackbone(dataType, 'Patient_Communication');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new patient_communication payload and validate with wrong data', async () => {
    const dataType = {
      id: '123',
      preferred: 'bad data type', // wrong data type
      language: {
        coding: [
          {
            system: 'http://hl7.org/fhir/ValueSet/languages',
            code: 'en',
            display: 'English',
          },
        ],
      },
      wrongProperty: 'test', // wrong property
    };

    const validate = await _validateBackbone(dataType, 'Patient_Communication');

    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors).toHaveLength(3);
    expect(validate.errors).toEqual([
      {
        instancePath: '',
        keyword: 'additionalProperties',
        message: 'must NOT have additional properties',
        params: { additionalProperty: 'wrongProperty' },
        schemaPath: '#/additionalProperties',
      },
      {
        instancePath: '/preferred',
        keyword: 'type',
        message: 'must be boolean',
        params: { type: 'boolean' },
        schemaPath: 'base.schema.json#/definitions/boolean/type',
      },
      {
        instancePath: '/preferred',
        keyword: 'pattern',
        message: "The value '/preferred' does not match with datatype 'boolean'",
        params: { value: '/preferred' },
        schemaPath: 'base.schema.json#/definitions/boolean/pattern',
      },
    ]);
  });

  it('should be able to create a new patient_communication payload using builder methods [new PatientCommunicationBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const dataType = builder
      .setLanguage({
        coding: [
          {
            code: 'any',
            system: 'http://hl7.org/fhir/organization-qualification',
            display: 'test',
          },
        ],
      })
      .addParamExtension('preferred', {
        extension: [
          {
            url: 'test',
            valueString: 'test',
          },
        ],
      })
      .build();
    const validate = await _validateBackbone(dataType, 'Patient_Communication');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
      _preferred: {
        extension: [
          {
            url: 'test',
            valueString: 'test',
          },
        ],
      },
      language: {
        coding: [
          {
            code: 'any',
            display: 'test',
            system: 'http://hl7.org/fhir/organization-qualification',
          },
        ],
      },
    });
  });
});
