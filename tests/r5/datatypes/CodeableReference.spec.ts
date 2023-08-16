import { ICodeableReference } from '../../../src/r5/interfaces/datatypes';
import FHIRContext from '../../../src';
import CodeableReferenceBuilder from '../../../src/r5/models/datatypes/CodeableReferenceBuilder';

import { CodeableReferenceValidator } from '../../../src/r5/models/datatypes/CodeableReferenceValidator';

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
        reference: 'Patient/id',
      },
    });

    expect(item).toBeDefined();
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
        reference: 'Patient/id',
      },
    };

    expect(() => CodeableReferenceValidator(item)).not.toThrowError();
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
        reference: 'Patient/id',
      },
      test: 'test', // wrong property
    };

    expect(() => CodeableReferenceValidator(item)).toThrowError(
      "InvalidFieldException: field(s) 'test' is not a valid for CodeableReference",
    );
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
        reference: 'Patient/id',
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
        reference: 'Patient/id',
      },
    });
  });
});
