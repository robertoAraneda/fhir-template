import { MetaBuilder } from '../../src/r5/builders/datatypes/MetaBuilder';
import { Meta } from '../../src/r5/interfaces/datatypes/Meta';
import ElementBuilder from '../../src/r5/ElementBuilder';
import ElementValidator from '../../src/r5/ElementValidator';

describe('Meta', () => {
  let builder: MetaBuilder;

  // create global
  beforeEach(() => {
    builder = ElementBuilder.Meta();
  });

  it('should be able to create a new meta and validate with correct data', async () => {
    const dataType: Meta = {
      id: '123',
      tag: [
        {
          code: '123',
          system: 'http://hl7.org/fhir/sid/us-npi',
        },
      ],
      source: 'test',
      security: [{ system: 'test', code: 'test' }],
      lastUpdated: '2030-06-02T12:00:00.000Z',
      versionId: 'test',
    };

    const validate = await ElementValidator.Meta(dataType);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new meta and validate with wrong data', async () => {
    const dataType = {
      id: '123',
      tag: [
        {
          code: '123',
          system: 'http://hl7.org/fhir/sid/us-npi',
        },
      ],
      source: 'test',
      security: [{ system: 'test', code: 'test' }],
      lastUpdated: '2030', // wrong date
      versionId: 'test',
      wrongProperty: 'test', // wrong property
    };

    const validate = await ElementValidator.Meta(dataType);

    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors).toHaveLength(2);
    expect(validate.errors).toEqual([
      {
        instancePath: '',
        keyword: 'additionalProperties',
        message: 'must NOT have additional properties',
        params: { additionalProperty: 'wrongProperty' },
        schemaPath: '#/additionalProperties',
      },
      {
        instancePath: '/lastUpdated',
        keyword: 'pattern',
        message: "The value '/lastUpdated' does not match with datatype 'instant'",
        params: { value: '/lastUpdated' },
        schemaPath: 'base.schema.json#/definitions/instant/pattern',
      },
    ]);
  });

  it('should be able to create a new meta using builder methods', async () => {
    // build() is a method that returns the object that was built
    const dataType = builder
      .addProfile('http://hl7.org/fhir/us/core/StructureDefinition/patient')
      .addSecurity({ system: 'test', code: 'test' })
      .addTag({ code: '123', system: 'http://hl7.org/fhir/sid/us-npi' })
      .setLastUpdated('2030-06-02T12:00:00.000Z')
      .setSource('test')
      .setVersionId('test')
      .build();

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
      source: 'test',
      tag: [
        {
          code: '123',
          system: 'http://hl7.org/fhir/sid/us-npi',
        },
      ],
      versionId: 'test',
      lastUpdated: '2030-06-02T12:00:00.000Z',
      profile: ['http://hl7.org/fhir/us/core/StructureDefinition/patient'],
      security: [
        {
          system: 'test',
          code: 'test',
        },
      ],
    });
  });
});
