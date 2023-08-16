import { ICoding } from '../../../src/r4/interfaces/datatypes';
import FHIRContext from '../../../src';
import { CodingBuilder } from '../../../src/r4/models/datatypes/CodingBuilder';
import { CodingValidator } from '../../../src/r4/models/datatypes/CodingValidator';

describe('Coding FHIR R4', () => {
  let builder: CodingBuilder;
  const { Coding } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = Coding.builder();
  });

  it('should be able to create a new coding and validate with correct data [new Coding()]', async () => {
    const item = new Coding({
      id: '123',
      code: '123',
      version: '1.0.0',
      display: 'test',
      system: 'http://hl7.org/fhir/sid/us-npi',
    });

    expect(item).toBeDefined();
  });

  it('should be able to create a new coding and validate with correct data [ICoding]', async () => {
    const item: ICoding = {
      id: '123',
      code: '123',
      version: '1.0.0',
      display: 'test',
      system: 'http://hl7.org/fhir/sid/us-npi',
      _code: {
        extension: [
          {
            id: '123',
            url: 'url',
            valueString: 'test',
          },
        ],
      },
    };

    expect(() => CodingValidator(item)).not.toThrowError();
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

    expect(() => CodingValidator(item)).toThrowError(
      "InvalidFieldException: field(s) 'test' is not a valid for Coding",
    );
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
});
