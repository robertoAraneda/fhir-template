import { ICodeableReference } from '../../../src/r5/interfaces/datatypes';
import FHIRContext from '../../../src';
import CodeableReferenceBuilder from '../../../src/r5/models/datatypes/CodeableReferenceBuilder';
import { _validateDataType } from '../../../src/r5/validators/BaseValidator';

describe('CodeableReference', () => {
  let builder: CodeableReferenceBuilder;
  const { CodeableReference } = new FHIRContext().forR5();

  // create global
  beforeEach(() => {
    builder = CodeableReference.builder();
  });

  it('should be able to create a new codeableconcept and validate with correct data [new CodeableReference]', async () => {
    const item = new CodeableReference({
      id: '123',
      concept: {
        coding: [
          {
            system: 'http://hl7.org/fhir/sid/us-npi',
            code: '123',
            display: 'test',
          },
        ],
        text: 'test',
      },
      reference: {
        reference: 'test',
      },
    });

    const validate = await _validateDataType(item, 'CodeableReference');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new codeableconcept and validate with correct data [ICodeableReference]', async () => {
    const item: ICodeableReference = {
      id: '123',
      concept: {
        coding: [
          {
            system: 'http://hl7.org/fhir/sid/us-npi',
            code: '123',
            display: 'test',
          },
        ],
        text: 'test',
      },
      reference: {
        reference: 'test',
      },
    };

    const validate = await _validateDataType(item, 'CodeableReference');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new codeableconcept and validate with wrong data', async () => {
    const item = {
      id: '123',
      concept: {
        coding: [
          {
            system: 'http://hl7.org/fhir/sid/us-npi',
            code: '123',
            display: 'test',
          },
        ],
        text: 'test',
      },
      reference: {
        reference: 'test',
      },
      test: 'test', // wrong property
    };

    const validate = await _validateDataType(item, 'CodeableReference');

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

  it('should be able to create a new codeableconcept using builder methods [new CodeableReferenceBuilder]', async () => {
    // build() is a method that returns the object that was built
    const item = builder
      .setId('123')
      .setConcept({
        coding: [
          {
            system: 'http://hl7.org/fhir/sid/us-npi',
            code: '123',
            display: 'test',
          },
        ],
      })
      .setReference({
        reference: 'test',
      })
      .build();

    expect(item).toBeDefined();
    expect(item).toEqual({
      concept: {
        coding: [
          {
            code: '123',
            display: 'test',
            system: 'http://hl7.org/fhir/sid/us-npi',
          },
        ],
      },
      id: '123',
      reference: {
        reference: 'test',
      },
    });

    const validate = await _validateDataType(item, 'CodeableReference');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });
});
