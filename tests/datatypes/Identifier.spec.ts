import { IIdentifier } from '../../src/r5/interfaces/datatypes';
import { IdentifierBuilder } from '../../src/r5/builders/datatypes';
import { IValidatorContext } from '../../src/r5';
import FHIRContext from '../../src';

describe('Identifier', () => {
  let validator: IValidatorContext;
  let builder: IdentifierBuilder;

  beforeAll(() => {
    const context = new FHIRContext();
    validator = context.forR5().validators;
  });

  // create global
  beforeEach(() => {
    builder = new IdentifierBuilder();
  });

  it('should be able to create a new identifier and validate with correct data', async () => {
    const dataType: IIdentifier = {
      id: '123',
      use: 'official',
      value: '1234567890',
      system: 'http://hl7.org/fhir/sid/us-npi',
      period: {
        start: '2020-01-01',
        end: '2020-01-02',
      },
      assigner: {
        reference: 'Organization/123',
      },
    };

    const validate = await validator.Identifier(dataType);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new reference and validate with wrong data', async () => {
    const dataType = {
      id: '123',
      use: 'official',
      value: '1234567890',
      system: 'http://hl7.org/fhir/sid/us-npi',
      period: {
        start: '2020-01-01',
        end: '2020-01-02',
      },
      assigner: {
        reference: 'Organization/123',
      },
      test: 'test', // wrong property
    };

    const validate = await validator.Identifier(dataType);

    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors).toHaveLength(1);
    expect(validate.errors).toEqual([
      {
        instancePath: '',
        schemaPath: '#/additionalProperties',
        keyword: 'additionalProperties',
        params: { additionalProperty: 'test' },
        message: 'must NOT have additional properties',
      },
    ]);
  });

  it('should be able to create a new identifier using builder methods', async () => {
    // build() is a method that returns the object that was built
    const dataType = builder
      .setUse('official')
      .setSystem('http://hl7.org/fhir/sid/us-npi')
      .setPeriod({
        start: '2020-01-01',
        end: '2020-01-02',
      })
      .setValue('1234567890')
      .setAssigner({ reference: 'Organization/123' })
      .build();

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
      assigner: {
        reference: 'Organization/123',
      },
      period: {
        start: '2020-01-01',
        end: '2020-01-02',
      },
      system: 'http://hl7.org/fhir/sid/us-npi',
      use: 'official',
      value: '1234567890',
    });
  });

  it('should return errors if identifiers has wrong data', async () => {
    const dataType = builder
      .setUse('official')
      .setSystem('http://hl7.org/fhir/sid/us-npi')
      .setPeriod({
        start: '2020-01-01',
        end: '2020-01-02',
      })
      .setValue('1234567890')
      .setAssigner({ reference: 'Organization/123' })
      .setPeriod({
        start: '2020-01-01 HH:MM:SS', // wrong format
        end: '2020-01-02',
      })
      .build();

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
      assigner: {
        reference: 'Organization/123',
      },
      period: {
        end: '2020-01-02',
        start: '2020-01-01 HH:MM:SS',
      },
      system: 'http://hl7.org/fhir/sid/us-npi',
      use: 'official',
      value: '1234567890',
    });

    const validate = await validator.Identifier(dataType);
    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors).toHaveLength(1);
    if (validate.errors) {
      expect(validate.errors).toEqual([
        {
          keyword: 'pattern',
          instancePath: '/period/start',
          message: "The value '/period/start' does not match with datatype 'dateTime'",
          params: { value: '/period/start' },
          schemaPath: 'base.schema.json#/definitions/dateTime/pattern',
        },
      ]);
    }
  });
});
