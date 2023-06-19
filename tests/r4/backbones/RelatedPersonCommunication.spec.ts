import { IRelatedPersonCommunication } from '../../../src/r4/interfaces/backbones';
import FHIRContext from '../../../src';
import { IRelatedPersonCommunicationBuilder } from '../../../src/r4/models/backbones/RelatedPersonCommunication';
import { _validateBackbone } from '../../../src/r4/validators/BaseValidator';

describe('RelatedPersonCommunication FHIR R4', () => {
  let builder: IRelatedPersonCommunicationBuilder;
  const { RelatedPersonCommunication } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = RelatedPersonCommunication.builder();
  });

  it('should be able to create a new related_person_communication payload and validate with correct data [IRelatedPersonCommunication]', async () => {
    const item: IRelatedPersonCommunication = {
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

    const validate = await _validateBackbone(item, 'RelatedPerson_Communication');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new related_person_communication payload and validate with correct data [new RelatedPersonCommunication()]', async () => {
    const item = new RelatedPersonCommunication({
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

    const validate = await _validateBackbone(item, 'RelatedPerson_Communication');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new related_person_communication payload using builder methods [RelatedPersonCommunication.builder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builder
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

    const validate = await _validateBackbone(item, 'RelatedPerson_Communication');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();

    expect(item).toBeDefined();
    expect(item).toEqual({
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

  it('should be able to validate a new related_person_communication payload and validate with wrong data', async () => {
    const item = {
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

    const validate = await _validateBackbone(item, 'RelatedPerson_Communication');

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
        schemaPath: 'r4base.schema.json#/definitions/boolean/type',
      },
      {
        instancePath: '/preferred',
        keyword: 'pattern',
        message: "The value '/preferred' does not match with datatype 'boolean'",
        params: { value: '/preferred' },
        schemaPath: 'r4base.schema.json#/definitions/boolean/pattern',
      },
    ]);
  });
});
