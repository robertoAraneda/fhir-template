import { IMeta } from '../../../src/r4/interfaces/datatypes';
import FHIRContext from '../../../src';
import { _validateDataType } from '../../../src/r4/validators/BaseValidator';
import { IMetaBuilder } from '../../../src/r4/models/datatypes/MetaBuilder';

describe('Meta FHIR R4', () => {
  let builder: IMetaBuilder;
  const { Meta } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = Meta.builder();
  });

  it('should be able to create a new meta and validate with correct data [new Meta()]', async () => {
    const item = new Meta({
      id: '123',
      tag: [
        {
          code: '123',
          system: 'http://hl7.org/fhir/sid/us-npi',
        },
      ],
      profile: ['test'],
      source: 'test',
      security: [{ system: 'test', code: 'test' }],
      lastUpdated: '2030-06-02T12:00:00.000Z',
      versionId: 'test',
    });

    const validate = await _validateDataType(item, 'Meta');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new meta and validate with correct data [IMeta]', async () => {
    const item: IMeta = {
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

    const validate = await _validateDataType(item, 'Meta');
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new meta and validate with wrong data', async () => {
    const item = {
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

    const validate = await _validateDataType(item, 'Meta');

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
        schemaPath: 'r4base.schema.json#/definitions/instant/pattern',
      },
    ]);
  });

  it('should be able to create a new meta using builder methods [new MetaBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builder
      .addProfile('http://hl7.org/fhir/us/core/StructureDefinition/patient')
      .addSecurity({ system: 'test', code: 'test' })
      .addTag({ code: '123', system: 'http://hl7.org/fhir/sid/us-npi' })
      .setLastUpdated('2030-06-02T12:00:00.000Z')
      .setSource('test')
      .setVersionId('test')
      .build();

    const validate = await _validateDataType(item, 'Meta');
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();

    expect(item).toBeDefined();
    expect(item).toEqual({
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
