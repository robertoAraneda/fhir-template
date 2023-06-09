import { ICodeableConcept } from '../../../src/r4b/interfaces/datatypes';
import { CodeableConceptBuilder } from '../../../src/r4b/builders/datatypes';
import { IValidatorContext } from '../../../src/r4b';
import FHIRContext from '../../../src';
import { CodeableConcept } from '../../../src/r4b/models/datatypes/CodeableConcept';

describe('CodeableConcept', () => {
  let validator: IValidatorContext;
  let builder: CodeableConceptBuilder;
  let builderFromFunction: CodeableConceptBuilder;
  const { validators: val, createDatatype, builders } = new FHIRContext().forR4B();
  validator = val;

  // create global
  beforeEach(() => {
    builder = new CodeableConceptBuilder();
    builderFromFunction = builders.dataTypes.CodeableConceptBuilder();
  });

  it('should be able to create a new codeableconcept and validate with correct data [new CodeableConcept]', async () => {
    const dataType = createDatatype('CodeableConcept', {
      id: '123',
      coding: [
        {
          code: '123',
          system: 'http://hl7.org/fhir/sid/us-npi',
          display: 'test',
        },
      ],
      text: 'test',
    });

    const validate = await validator.dataTypes.CodeableConcept(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new codeableconcept and validate with correct data [new CodeableConcept]', async () => {
    const dataType = new CodeableConcept({
      id: '123',
      coding: [
        {
          code: '123',
          system: 'http://hl7.org/fhir/sid/us-npi',
          display: 'test',
        },
      ],
      text: 'test',
    });

    const validate = await validator.dataTypes.CodeableConcept(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new codeableconcept and validate with correct data [ICodeableConcept]', async () => {
    const dataType: ICodeableConcept = {
      id: '123',
      coding: [
        {
          code: '123',
          system: 'http://hl7.org/fhir/sid/us-npi',
          display: 'test',
        },
      ],
      text: 'test',
    };

    const validate = await validator.dataTypes.CodeableConcept(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new codeableconcept and validate with wrong data', async () => {
    const dataType = {
      id: '123',
      coding: [
        {
          code: '123',
          system: 'http://hl7.org/fhir/sid/us-npi',
          display: 'test',
        },
      ],
      text: 'test',
      test: 'test', // wrong property
    };

    const validate = await validator.dataTypes.CodeableConcept(dataType);

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

  it('should be able to create a new codeableconcept using builder methods [new CodeableConceptBuilder]', async () => {
    // build() is a method that returns the object that was built
    const dataType = builder
      .setId('123')
      .setText('test')
      .addCodeableConceptParamExtension('text', {
        extension: [
          {
            url: 'url',
            valueId: '1221',
          },
        ],
      })
      .build();

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
      _text: {
        extension: [
          {
            url: 'url',
            valueId: '1221',
          },
        ],
      },
      id: '123',
      text: 'test',
    });
  });

  it('should be able to create a new codeableconcept using builder methods [builders.dataTypes.CodeableConceptBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const dataType = builderFromFunction
      .setId('123')
      .setText('test')
      .addCodeableConceptParamExtension('text', {
        extension: [
          {
            url: 'url',
            valueId: '1221',
          },
        ],
      })
      .build();

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
      _text: {
        extension: [
          {
            url: 'url',
            valueId: '1221',
          },
        ],
      },
      id: '123',
      text: 'test',
    });
  });
});
