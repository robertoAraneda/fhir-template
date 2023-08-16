import { IDuration } from '../../../src/r5/interfaces/datatypes';
import FHIRContext from '../../../src';
import DurationBuilder from '../../../src/r5/models/datatypes/DurationBuilder';
import { DurationValidator } from '../../../src/r5/models/datatypes/DurationValidator';

describe('Duration', () => {
  let builder: DurationBuilder;
  const { Duration } = new FHIRContext().forR5();

  // create global
  beforeEach(() => {
    builder = Duration.builder();
  });

  it('should be able to create a new contact point and validate with correct data [new Duration()]', async () => {
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

  it('should be able to create a new contact point and validate with correct data [IDuration]', async () => {
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

  it('should be able to validate a new contact point and validate with wrong data', async () => {
    const item = {
      id: '123',
      value: 45,
      system: 'http://unitsofmeasure.org',
      comparator: '>',
      code: 'test',
      unit: 'test',
      test: 'test', // wrong property
    };

    expect(() => DurationValidator(item)).toThrowError(
      "InvalidFieldException: field(s) 'test' is not a valid for Duration",
    );
  });

  it('should be able to create a new contact point using builder methods', async () => {
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
});
