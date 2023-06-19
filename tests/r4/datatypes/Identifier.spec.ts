import { IIdentifier } from '../../../src/r4/interfaces/datatypes';
import FHIRContext from '../../../src';
import { _validateDataType } from '../../../src/r4/validators/BaseValidator';
import { IIdentifierBuilder } from '../../../src/r4/models/datatypes/IdentifierBuilder';

describe('Identifier FHIR R4', () => {
  let builder: IIdentifierBuilder;
  const { Identifier } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = Identifier.builder();
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

    const validate = await _validateDataType(item, 'Identifier');
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

    const validate = await _validateDataType(item, 'Identifier');
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

    const validate = await _validateDataType(item, 'Identifier');

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

    const validate = await _validateDataType(item, 'Identifier');
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();

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
});
