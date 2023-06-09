import { MetaBuilder } from '../../src/r5/builders/datatypes';
import { IMeta } from '../../src/r5/interfaces/datatypes';
import { IValidatorContext } from '../../src/r5';
import FHIRContext from '../../src';
import { Meta } from '../../src/r5/models/datatypes/Meta';

describe('Meta', () => {
  let validator: IValidatorContext;
  let builder: MetaBuilder;
  let builderFromFunction: MetaBuilder;
  const { validators: val, createDatatype, builders } = new FHIRContext().forR5();
  validator = val;

  // create global
  beforeEach(() => {
    builder = new MetaBuilder();
    builderFromFunction = builders.dataTypes.MetaBuilder();
  });

  it('should be able to create a new meta and validate with correct data [new Meta()]', async () => {
    const dataType = new Meta({
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

    const validate = await validator.dataTypes.Meta(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new meta and validate with correct data [createDatatype()]', async () => {
    const dataType = createDatatype('Meta', {
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
    });

    const validate = await validator.dataTypes.Meta(dataType);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new meta and validate with correct data [IMeta]', async () => {
    const dataType: IMeta = {
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

    const validate = await validator.dataTypes.Meta(dataType);
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

    const validate = await validator.dataTypes.Meta(dataType);

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

  it('should be able to create a new meta using builder methods [new MetaBuilder()]', async () => {
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

  it('should be able to create a new meta using builder methods [builders.dataType.MetaBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const dataType = builderFromFunction
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
