import { IIdentifier } from '../../../src/r4/interfaces/datatypes';
import { IdentifierBuilder } from '../../../src/r4/builders/datatypes';
import { IValidatorContext } from '../../../src/r4';
import FHIRContext from '../../../src';
import { Identifier } from '../../../src/r4/models/datatypes';

describe('Identifier FHIR R4', () => {
  let builder: IdentifierBuilder;
  let builderFromFunction: IdentifierBuilder;
  const { Validator, createDatatype, Builder } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = new IdentifierBuilder();
    builderFromFunction = Builder.dataTypes.IdentifierBuilder();
  });

  it('should be able to create a new identifier and validate with correct data [new Identifier()]', async () => {
    const item = new Identifier({
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
    });

    const validate = await Validator.dataTypes.Identifier(item);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new identifier and validate with correct data [createDatatype()]', async () => {
    const item = createDatatype('Identifier', {
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
    });

    const validate = await Validator.dataTypes.Identifier(item);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new identifier and validate with correct data [IIdentifier]', async () => {
    const item: IIdentifier = {
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

    const validate = await Validator.dataTypes.Identifier(item);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new reference and validate with wrong data', async () => {
    const item = {
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

    const validate = await Validator.dataTypes.Identifier(item);

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

  it('should be able to create a new identifier using builder methods [new IdentifierBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builder
      .setUse('official')
      .setSystem('http://hl7.org/fhir/sid/us-npi')
      .setPeriod({
        start: '2020-01-01',
        end: '2020-01-02',
      })
      .setValue('1234567890')
      .setAssigner({ reference: 'Organization/123' })
      .build();

    expect(item).toBeDefined();
    expect(item).toEqual({
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

  it('should be able to create a new identifier using builder methods [builders.dataTypes.IdentifierBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builderFromFunction
      .setUse('official')
      .setSystem('http://hl7.org/fhir/sid/us-npi')
      .setPeriod({
        start: '2020-01-01',
        end: '2020-01-02',
      })
      .setValue('1234567890')
      .setAssigner({ reference: 'Organization/123' })
      .build();

    expect(item).toBeDefined();
    expect(item).toEqual({
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
    const item = builder
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

    expect(item).toBeDefined();
    expect(item).toEqual({
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

    const validate = await Validator.dataTypes.Identifier(item);
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
          schemaPath: 'r4base.schema.json#/definitions/dateTime/pattern',
        },
      ]);
    }
  });
});
