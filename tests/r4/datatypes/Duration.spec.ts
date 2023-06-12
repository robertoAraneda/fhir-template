import { DurationBuilder } from '../../../src/r4/builders/datatypes';
import { IDuration } from '../../../src/r4/interfaces/datatypes';
import FHIRContext from '../../../src';
import { Duration } from '../../../src/r4/models/datatypes';

describe('Duration FHIR R4', () => {
  let builder: DurationBuilder;
  let builderFromFunction: DurationBuilder;
  const { Validator, createDatatype, Builder } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = new DurationBuilder();
    builderFromFunction = Builder.dataTypes.Duration();
  });

  it('should be able to create a new duration and validate with correct data [createDatatype]', async () => {
    const item = createDatatype('Duration', {
      id: '123',
      value: 45,
      system: 'url',
      comparator: '>',
      code: 'test',
      unit: 'test',
    });

    const validate = await Validator.dataTypes.Duration(item);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new duration and validate with correct data [new Duration()]', async () => {
    const item = new Duration({
      id: '123',
      value: 45,
      system: 'url',
      comparator: '>',
      code: 'test',
      unit: 'test',
    });

    const validate = await Validator.dataTypes.Duration(item);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new duration and validate with correct data [IDuration]', async () => {
    const item: IDuration = {
      id: '123',
      value: 45,
      system: 'url',
      comparator: '>',
      code: 'test',
      unit: 'test',
    };

    const validate = await Validator.dataTypes.Duration(item);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new duration and validate with wrong data', async () => {
    const item = {
      id: '123',
      value: 45,
      system: 'url',
      comparator: '>',
      code: 'test',
      unit: 'test',
      test: 'test', // wrong property
    };

    const validate = await Validator.dataTypes.Duration(item);

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

  it('should be able to create a new duration using builder methods', async () => {
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
  });

  it('should be able to create a new duration using builder methods', async () => {
    // build() is a method that returns the object that was built
    const item = builderFromFunction
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
  });
});
