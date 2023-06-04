import { CodingBuilder } from '../../src/r5/builders/datatypes/CodingBuilder';
import { Coding } from '../../src/r5/interfaces/datatypes/Coding';
import ElementValidator from '../../src/r5/ElementValidator';
import ElementBuilder from '../../src/r5/ElementBuilder';

describe('Coding', () => {
  let builder: CodingBuilder;

  // create global
  beforeEach(() => {
    builder = ElementBuilder.Coding()
      .setCode('123')
      .setDisplay('test')
      .setSystem('http://hl7.org/fhir/sid/us-npi')
      .setUserSelected(true)
      .setVersion('1.0.0');
  });

  it('should be able to create a new coding and validate with correct data', async () => {
    const dataType: Coding = {
      id: '123',
      code: '123',
      version: '1.0.0',
      display: 'test',
      system: 'http://hl7.org/fhir/sid/us-npi',
    };

    const validate = await ElementValidator.Coding(dataType);
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

    const validate = await ElementValidator.Coding(dataType);

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

  it('should be able to create a new coding using builder methods', async () => {
    // build() is a method that returns the object that was built
    const dataType = builder.addCodingParamExtension('code', { id: '123', url: 'url', valueId: '1221' }).build();

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
      code: '123',
      display: 'test',
      system: 'http://hl7.org/fhir/sid/us-npi',
      userSelected: true,
      version: '1.0.0',
      _code: {
        id: '123',
        url: 'url',
        valueId: '1221',
      },
    });
  });
});
