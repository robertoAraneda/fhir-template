import { ICodeableReference } from '../../../src/r5/interfaces/datatypes';
import { CodeableReferenceBuilder } from '../../../src/r5/builders/datatypes';
import FHIRContext from '../../../src';
import { CodeableReference } from '../../../src/r5/models/datatypes';

describe('CodeableReference', () => {
  let builder: CodeableReferenceBuilder;
  let builderFromFunction: CodeableReferenceBuilder;
  const { Validator, createDatatype, Builder } = new FHIRContext().forR5();

  // create global
  beforeEach(() => {
    builder = new CodeableReferenceBuilder();
    builderFromFunction = Builder.dataTypes.CodeableReference();
  });

  it('should be able to create a new codeableconcept and validate with correct data [new CodeableReference]', async () => {
    const dataType = createDatatype('CodeableReference', {
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

    const validate = await Validator.dataTypes.CodeableReference(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new codeableconcept and validate with correct data [new CodeableReference]', async () => {
    const dataType = new CodeableReference({
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

    const validate = await Validator.dataTypes.CodeableReference(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new codeableconcept and validate with correct data [ICodeableReference]', async () => {
    const dataType: ICodeableReference = {
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

    const validate = await Validator.dataTypes.CodeableReference(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new codeableconcept and validate with wrong data', async () => {
    const dataType = {
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

    const validate = await Validator.dataTypes.CodeableReference(dataType);

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
    const dataType = builder
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

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
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
  });

  it('should be able to create a new codeableconcept using builder methods [Builder.dataTypes.CodeableReference()]', async () => {
    // build() is a method that returns the object that was built
    const dataType = builderFromFunction
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

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
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
  });
});
