import BackboneElementBuilder from '../../src/r5/BackboneElementBuilder';
import BackboneElementValidator from '../../src/r5/BackboneElementValidator';
import { PatientCommunicationBuilder } from '../../src/r5/builders/backbones/PatientCommunicationBuilder';
import { PatientCommunication } from '../../src/r5/interfaces/backbones/PatientCommunication';

describe('PatientCommunication', () => {
  let builder: PatientCommunicationBuilder;

  // create global
  beforeEach(() => {
    builder = BackboneElementBuilder.PatientCommunication();
  });

  it('should be able to create a new patient_communication payload and validate with correct data', async () => {
    const dataType: PatientCommunication = {
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

    const validate = await BackboneElementValidator.PatientCommunication(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new organization_qualification payload and validate with wrong data', async () => {
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

    const validate = await BackboneElementValidator.PatientCommunication(dataType);

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

  it('should be able to create a new organization_qualification payload using builder methods', async () => {
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
      .addPatientCommunicationParamExtension('preferred', {
        extension: [
          {
            url: 'test',
            valueString: 'test',
          },
        ],
      })
      .build();

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