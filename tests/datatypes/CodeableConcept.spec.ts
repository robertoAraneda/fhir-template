import { ICodeableConcept } from '../../src/r5/interfaces/datatypes';
import { CodeableConceptBuilder } from '../../src/r5/builders/datatypes';
import { IValidatorContext } from '../../src/r5';
import FHIRContext from '../../src';

describe('CodeableConcept', () => {
  let validator: IValidatorContext;
  let builder: CodeableConceptBuilder;

  beforeAll(() => {
    const context = new FHIRContext();
    validator = context.forR5().validators;
  });

  // create global
  beforeEach(() => {
    builder = new CodeableConceptBuilder();
  });

  it('should be able to create a new codeableconcept and validate with correct data', async () => {
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

    const validate = await validator.CodeableConcept(dataType);

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

    const validate = await validator.CodeableConcept(dataType);

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

  it('should be able to create a new codeableconcept using builder methods', async () => {
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
});
