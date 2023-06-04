import { CodeableConcept } from '../../src/r5/interfaces/datatypes/CodeableConcept';
import { CodeableConceptBuilder } from '../../src/r5/builders/datatypes/CodeableConceptBuilder';
import ElementBuilder from '../../src/r5/ElementBuilder';
import ElementValidator from '../../src/r5/ElementValidator';

describe('CodeableConcept', () => {
  let builder: CodeableConceptBuilder;

  // create global
  beforeEach(() => {
    builder = ElementBuilder.CodeableConcept().setText('test').setId('123');
  });

  it('should be able to create a new codeableconcept and validate with correct data', async () => {
    const dataType: CodeableConcept = {
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

    const validate = await ElementValidator.CodeableConcept(dataType);

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

    const validate = await ElementValidator.CodeableConcept(dataType);

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
