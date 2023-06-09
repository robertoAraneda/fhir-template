import { DurationBuilder } from '../../../src/r4/builders/datatypes';
import { IDuration } from '../../../src/r4/interfaces/datatypes';
import { IValidatorContext } from '../../../src/r4';
import FHIRContext from '../../../src';
import { Duration } from '../../../src/r4/models/datatypes/Duration';

describe('Duration', () => {
  let validator: IValidatorContext;
  let builder: DurationBuilder;
  let builderFromFunction: DurationBuilder;
  const { validators: val, createDatatype, builders } = new FHIRContext().forR4();
  validator = val;

  // create global
  beforeEach(() => {
    builder = new DurationBuilder();
    builderFromFunction = builders.dataTypes.DurationBuilder();
  });

  it('should be able to create a new contact point and validate with correct data [createDatatype]', async () => {
    const dataType = createDatatype('Duration', {
      id: '123',
      value: 45,
      system: 'url',
      comparator: '>',
      code: 'test',
      unit: 'test',
    });

    const validate = await validator.dataTypes.Duration(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new contact point and validate with correct data [new Duration()]', async () => {
    const dataType = new Duration({
      id: '123',
      value: 45,
      system: 'url',
      comparator: '>',
      code: 'test',
      unit: 'test',
    });

    const validate = await validator.dataTypes.Duration(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new contact point and validate with correct data [IDuration]', async () => {
    const dataType: IDuration = {
      id: '123',
      value: 45,
      system: 'url',
      comparator: '>',
      code: 'test',
      unit: 'test',
    };

    const validate = await validator.dataTypes.Duration(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new contact point and validate with wrong data', async () => {
    const dataType = {
      id: '123',
      value: 45,
      system: 'url',
      comparator: '>',
      code: 'test',
      unit: 'test',
      test: 'test', // wrong property
    };

    const validate = await validator.dataTypes.Duration(dataType);

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
    const dataType = builder
      .setId('123')
      .setCode('test')
      .setSystem('url')
      .setValue(4)
      .setComparator('<=')
      .setUnit('test')
      .addDurationParamExtension('system', { extension: [{ id: '123', url: 'url', valueDate: '2022-06-12' }] })
      .build();

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
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
  });

  it('should be able to create a new contact point using builder methods', async () => {
    // build() is a method that returns the object that was built
    const dataType = builderFromFunction
      .setId('123')
      .setCode('test')
      .setSystem('url')
      .setValue(4)
      .setComparator('<=')
      .setUnit('test')
      .addDurationParamExtension('system', { extension: [{ id: '123', url: 'url', valueDate: '2022-06-12' }] })
      .build();

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
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
  });
});
