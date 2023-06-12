import { RelatedPersonCommunicationBuilder } from '../../../src/r5/builders/backbones';
import { IRelatedPersonCommunication } from '../../../src/r5/interfaces/backbones';
import FHIRContext from '../../../src';
import { RelatedPersonCommunication } from '../../../src/r5/models/backbones/RelatedPersonCommunication';

describe('RelatedPersonCommunication FHIR R5', () => {
  const { Validator, Builder, createBackboneElement } = new FHIRContext().forR5();
  let builder: RelatedPersonCommunicationBuilder;
  let builderFromFunction: RelatedPersonCommunicationBuilder;

  // create global
  beforeEach(() => {
    builder = new RelatedPersonCommunicationBuilder();
    builderFromFunction = Builder.backboneElements.RelatedPersonCommunication();
  });

  it('should be able to create a new related_person_communication payload and validate with correct data [IRelatedPersonCommunication]', async () => {
    const dataType: IRelatedPersonCommunication = {
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

    const validate = await Validator.backboneElements.RelatedPersonCommunication(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new related_person_communication payload and validate with correct data [new RelatedPersonCommunication()]', async () => {
    const dataType = new RelatedPersonCommunication({
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

    const validate = await Validator.backboneElements.RelatedPersonCommunication(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new related_person_communication payload and validate with correct data [createBackboneElement()]', async () => {
    const dataType = createBackboneElement('RelatedPersonCommunication', {
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

    const validate = await Validator.backboneElements.RelatedPersonCommunication(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new related_person_communication payload and validate with wrong data', async () => {
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

    const validate = await Validator.backboneElements.RelatedPersonCommunication(dataType);

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

  it('should be able to create a new related_person_communication payload using builder methods [new RelatedPersonCommunicationBuilder()]', async () => {
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

  it('should be able to create a new related_person_communication payload using builder methods [Builder.backboneElements.RelatedPersonCommunication()]', async () => {
    // build() is a method that returns the object that was built
    const dataType = builderFromFunction
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
