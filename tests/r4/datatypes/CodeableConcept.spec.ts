import { ICodeableConcept } from '../../../src/r4/interfaces/datatypes';
import FHIRContext from '../../../src';
import { _validateDataType } from '../../../src/r4/validators/BaseValidator';

import { ICodeableConceptBuilder } from '../../../src/r4/models/datatypes/CodeableConceptBuilder';

describe('CodeableConcept FHIR R4', () => {
  let builder: ICodeableConceptBuilder;
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
    });

    const validate = await _validateDataType(item, 'CodeableConcept');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new codeable_concept and validate with correct data [ICodeableConcept]', async () => {
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

    const validate = await _validateDataType(item, 'CodeableConcept');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
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
      text: 'test',
      test: 'test', // wrong property
    };

    const validate = await _validateDataType(item, 'CodeableConcept');

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

    const validate = await _validateDataType(item, 'CodeableConcept');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();

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
