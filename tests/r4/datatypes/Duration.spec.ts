import { IDuration } from '../../../src/r4/interfaces/datatypes';
import FHIRContext from '../../../src';
import { DurationBuilder } from '../../../src/r4/models/datatypes/DurationBuilder';

import { DurationValidator } from '../../../src/r4/models/datatypes/DurationValidator';

describe('Duration FHIR R4', () => {
  let builder: DurationBuilder;
  const { Duration } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = Duration.builder();
  });

  it('should be able to create a new duration and validate with correct data [new Duration()]', async () => {
    const item = new Duration({
      id: '123',
      value: 45,
      system: 'http://unitsofmeasure.org',
      comparator: '>',
      code: 'test',
      unit: 'test',
    });

    expect(item).toBeDefined();
  });

  it('should be able to create a new duration and validate with correct data [IDuration]', async () => {
    const item: IDuration = {
      id: '123',
      value: 45,
      system: 'http://unitsofmeasure.org',
      comparator: '>',
      code: 'test',
      unit: 'test',
    };

    expect(() => DurationValidator(item)).not.toThrow();
  });

  it('should be able to validate a new duration and validate with wrong data', async () => {
    const item = {
      id: '123',
      value: 45,
      comparator: '>',
      code: 'test',
      unit: 'test',
      test: 'test', // wrong property
    };
    expect(() => DurationValidator(item as IDuration)).toThrow(
      "InvalidFieldException: field(s) 'test' is not a valid for Duration",
    );
  });

  it('should be able to create a new duration using builder methods', async () => {
    // build() is a method that returns the object that was built
    const item = builder
      .setId('123')
      .setCode('test')
      .setSystem('http://unitsofmeasure.org')
      .setValue(4)
      .setComparator('<=')
      .setUnit('test')
      .addParamExtension('system', { extension: [{ id: '123', url: 'url', valueDate: '2022-06-12' }] })
      .build();

    expect(item).toBeDefined();
    expect(item).toEqual({
      _system: {
        extension: [
          {
            id: '123',
            url: 'url',
            valueDate: '2022-06-12',
          },
        ],
      },
      code: 'test',
      comparator: '<=',
      id: '123',
      system: 'http://unitsofmeasure.org',
      unit: 'test',
      value: 4,
    });
  });

  it('should be throw an error not SHALL be a code if there is a value [drt-1]', async () => {
    const item: IDuration = {
      id: '123',
      value: 45,
      code: undefined, // missing property
      system: 'http://unitsofmeasure.org',
      comparator: '>',
      unit: 'test',
    };

    expect(() => DurationValidator(item)).toThrow(
      'ConstraintException: [Duration] There SHALL be a code if there is a value and it SHALL be an expression of time. (drt-1)',
    );
  });

  it('should be throw an error if system is not UCUM [drt-1]', async () => {
    const item: IDuration = {
      id: '123',
      value: 45,
      code: 'code',
      system: 'anothersystem,', // wrong system
      comparator: '>',
      unit: 'test',
    };

    expect(() => DurationValidator(item)).toThrow(
      'ConstraintException: [Duration] If system is present, it SHALL be UCUM. (drt-1)',
    );
  });
});
