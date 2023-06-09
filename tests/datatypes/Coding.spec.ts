import { CodeableReferenceBuilder, CodingBuilder } from '../../src/r5/builders/datatypes';
import { ICoding } from '../../src/r5/interfaces/datatypes';
import { IValidatorContext } from '../../src/r5';
import FHIRContext from '../../src';
import { Coding } from '../../src/r5/models/datatypes/Coding';

describe('Coding', () => {
  let validator: IValidatorContext;
  let builder: CodingBuilder;
  let builderFromFunction: CodingBuilder;
  const { validators: val, createDatatype, builders } = new FHIRContext().forR5();
  validator = val;

  // create global
  beforeEach(() => {
    builder = new CodingBuilder();
    builderFromFunction = builders.dataTypes.CodingBuilder();
  });

  it('should be able to create a new coding and validate with correct data [createDatatype]', async () => {
    const dataType = createDatatype('Coding', {
      id: '123',
      code: '123',
      version: '1.0.0',
      display: 'test',
      system: 'http://hl7.org/fhir/sid/us-npi',
    });

    const validate = await validator.dataTypes.Coding(dataType);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });
  it('should be able to create a new coding and validate with correct data [new Coding]', async () => {
    const dataType = new Coding({
      id: '123',
      code: '123',
      version: '1.0.0',
      display: 'test',
      system: 'http://hl7.org/fhir/sid/us-npi',
    });

    const validate = await validator.dataTypes.Coding(dataType);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new coding and validate with correct data [ICoding]', async () => {
    const dataType: ICoding = {
      id: '123',
      code: '123',
      version: '1.0.0',
      display: 'test',
      system: 'http://hl7.org/fhir/sid/us-npi',
    };

    const validate = await validator.dataTypes.Coding(dataType);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new coding and validate with wrong data', async () => {
    const dataType = {
      id: '123',
      code: '123',
      version: '1.0.0',
      display: 'test',
      system: 'http://hl7.org/fhir/sid/us-npi',
      test: 'test', // wrong property
    };

    const validate = await validator.dataTypes.Coding(dataType);

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

  it('should be able to create a new coding using builder methods [new CodingBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const dataType = builder
      .setCode('123')
      .setDisplay('test')
      .setSystem('http://hl7.org/fhir/sid/us-npi')
      .setUserSelected(true)
      .setVersion('1.0.0')
      .addCodingParamExtension('code', { id: '123', extension: [{ url: 'url', valueId: '1221' }] })
      .build();

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
      _code: {
        extension: [
          {
            url: 'url',
            valueId: '1221',
          },
        ],
        id: '123',
      },
      code: '123',
      display: 'test',
      system: 'http://hl7.org/fhir/sid/us-npi',
      userSelected: true,
      version: '1.0.0',
    });
  });

  it('should be able to create a new coding using builder methods [builders.dataTypes.CodingBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const dataType = builderFromFunction
      .setCode('123')
      .setDisplay('test')
      .setSystem('http://hl7.org/fhir/sid/us-npi')
      .setUserSelected(true)
      .setVersion('1.0.0')
      .addCodingParamExtension('code', { id: '123', extension: [{ url: 'url', valueId: '1221' }] })
      .build();

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
      _code: {
        extension: [
          {
            url: 'url',
            valueId: '1221',
          },
        ],
        id: '123',
      },
      code: '123',
      display: 'test',
      system: 'http://hl7.org/fhir/sid/us-npi',
      userSelected: true,
      version: '1.0.0',
    });
  });
});
