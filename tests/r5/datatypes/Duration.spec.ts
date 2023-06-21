import { IDuration } from '../../../src/r5/interfaces/datatypes';
import FHIRContext from '../../../src';
import DurationBuilder from '../../../src/r5/models/datatypes/DurationBuilder';
import { _validateDataType } from '../../../src/r5/validators/BaseValidator';

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
      system: 'url',
      comparator: '>',
      code: 'test',
      unit: 'test',
    });

    const validate = await _validateDataType(item, 'Duration');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new contact point and validate with correct data [IDuration]', async () => {
    const item: IDuration = {
      id: '123',
      value: 45,
      system: 'url',
      comparator: '>',
      code: 'test',
      unit: 'test',
    };

    const validate = await _validateDataType(item, 'Duration');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new contact point and validate with wrong data', async () => {
    const item = {
      id: '123',
      value: 45,
      system: 'url',
      comparator: '>',
      code: 'test',
      unit: 'test',
      test: 'test', // wrong property
    };

    const validate = await _validateDataType(item, 'Duration');

    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors).toHaveLength(1);
    expect(validate.errors).toEqual([
      {
        instancePath: '',
        keyword: 'additionalProperties',
        message: 'must NOT have additional properties',
        params: { additionalProperty: 'test' },
        schemaPath: '#/additionalProperties',
      },
    ]);
  });

  it('should be able to create a new contact point using builder methods', async () => {
    // build() is a method that returns the object that was built
    const item = builder
      .setId('123')
      .setCode('test')
      .setSystem('url')
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
      system: 'url',
      unit: 'test',
      value: 4,
    });

    const validate = await _validateDataType(item, 'Duration');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });
});
