import { ICodeableConcept } from '../../../src/r4/interfaces/datatypes';
import FHIRContext from '../../../src';
import { CodeableConceptBuilder } from '../../../src/r4/models/datatypes/CodeableConceptBuilder';
import { CodeableConceptValidator } from '../../../src/r4/models/datatypes/CodeableConceptValidator';

describe('CodeableConcept FHIR R4', () => {
  let builder: CodeableConceptBuilder;
  const { CodeableConcept } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = CodeableConcept.builder();
  });

  it('should be able to create a new codeable_concept and validate with correct data [new CodeableConcept]', async () => {
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
      extension: [
        {
          id: '123',
          url: 'http://example.com',
        },
      ],
    });

    expect(item).toBeDefined();
  });

  it('should be able to create a new codeable_concept and validate with correct data [ICodeableConcept]', async () => {
    const item: ICodeableConcept = {
      id: '123',
      coding: [
        {
          code: '123',
          system: 'http://hl7.org/fhir/sid/us-npi',
          display: 'test',
          _code: {
            extension: [
              {
                id: '123',
                url: 'http://example.com',
              },
            ],
          },
        },
      ],
      text: 'test',
    };

    expect(() => CodeableConceptValidator(item)).not.toThrowError();
  });

  it('should be able to validate a new codeable_concept and validate with wrong data', async () => {
    const item = {
      id: '123',
      coding: [
        {
          code: '123',
          system: 'http://hl7.org/fhir/sid/us-npi',
          display: 'test',
        },
      ],
      text: 'text',
      test: 'test', // wrong property
    };

    expect(() => CodeableConceptValidator(item)).toThrowError(
      "InvalidFieldException: field(s) 'test' is not a valid for CodeableConcept",
    );
  });

  it('should be able to create a new codeable_concept using builder methods [new CodeableConceptBuilder]', async () => {
    // build() is a method that returns the object that was built
    const item = builder
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
