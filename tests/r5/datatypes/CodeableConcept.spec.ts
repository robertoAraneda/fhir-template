import { ICodeableConcept } from '../../../src/r5/interfaces/datatypes';
import FHIRContext from '../../../src';
import CodeableConceptBuilder from '../../../src/r5/models/datatypes/CodeableConceptBuilder';
import { CodeableConceptValidator } from '../../../src/r5/models/datatypes/CodeableConceptValidator';

describe('CodeableConcept', () => {
  let builder: CodeableConceptBuilder;
  const { CodeableConcept } = new FHIRContext().forR5();

  // create global
  beforeEach(() => {
    builder = CodeableConcept.builder();
  });

  it('should be able to create a new codeableconcept and validate with correct data [new CodeableConcept]', async () => {
    const item = new CodeableConcept({
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

    expect(item).toBeDefined();
  });

  it('should be able to create a new codeableconcept and validate with correct data [ICodeableConcept]', async () => {
    const item: ICodeableConcept = {
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

    expect(() => CodeableConceptValidator(item)).not.toThrowError();
  });

  it('should be able to validate a new codeableconcept and validate with wrong data', async () => {
    const item = {
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

    expect(() => CodeableConceptValidator(item)).toThrowError(
      "InvalidFieldException: field(s) 'test' is not a valid for CodeableConcept",
    );
  });

  it('should be able to create a new codeableconcept using builder methods [new CodeableConceptBuilder]', async () => {
    // build() is a method that returns the object that was built
    const item = builder
      .setId('123')
      .setText('test')
      .addParamExtension('text', {
        extension: [
          {
            url: 'url',
            valueId: '1221',
          },
        ],
      })
      .build();

    expect(item).toBeDefined();

    expect(item).toEqual({
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
