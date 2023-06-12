import { CodingBuilder } from '../../../src/r4/builders/datatypes';
import { ICoding } from '../../../src/r4/interfaces/datatypes';
import FHIRContext from '../../../src';
import { Coding } from '../../../src/r4/models/datatypes';

describe('Coding FHIR R4', () => {
  let builder: CodingBuilder;
  let builderFromFunction: CodingBuilder;
  const { Validator, createDatatype, Builder } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = new CodingBuilder();
    builderFromFunction = Builder.dataTypes.Coding();
  });

  it('should be able to create a new coding and validate with correct data [createDatatype]', async () => {
    const item = createDatatype('Coding', {
      id: '123',
      code: '123',
      version: '1.0.0',
      display: 'test',
      system: 'http://hl7.org/fhir/sid/us-npi',
    });

    const validate = await Validator.dataTypes.Coding(item);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });
  it('should be able to create a new coding and validate with correct data [new Coding()]', async () => {
    const item = new Coding({
      id: '123',
      code: '123',
      version: '1.0.0',
      display: 'test',
      system: 'http://hl7.org/fhir/sid/us-npi',
    });

    const validate = await Validator.dataTypes.Coding(item);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new coding and validate with correct data [ICoding]', async () => {
    const item: ICoding = {
      id: '123',
      code: '123',
      version: '1.0.0',
      display: 'test',
      system: 'http://hl7.org/fhir/sid/us-npi',
    };

    const validate = await Validator.dataTypes.Coding(item);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new coding and validate with wrong data', async () => {
    const item = {
      id: '123',
      code: '123',
      version: '1.0.0',
      display: 'test',
      system: 'http://hl7.org/fhir/sid/us-npi',
      test: 'test', // wrong property
    };

    const validate = await Validator.dataTypes.Coding(item);

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
    const item = builder
      .setCode('123')
      .setDisplay('test')
      .setSystem('http://hl7.org/fhir/sid/us-npi')
      .setUserSelected(true)
      .setVersion('1.0.0')
      .addParamExtension('code', { id: '123', extension: [{ url: 'url', valueId: '1221' }] })
      .build();

    expect(item).toBeDefined();
    expect(item).toEqual({
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
    const item = builderFromFunction
      .setCode('123')
      .setDisplay('test')
      .setSystem('http://hl7.org/fhir/sid/us-npi')
      .setUserSelected(true)
      .setVersion('1.0.0')
      .addParamExtension('code', { id: '123', extension: [{ url: 'url', valueId: '1221' }] })
      .build();

    expect(item).toBeDefined();
    expect(item).toEqual({
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
