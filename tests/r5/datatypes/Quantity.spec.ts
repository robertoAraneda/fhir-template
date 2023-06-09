import { IQuantity } from '../../../src/r5/interfaces/datatypes';
import { IValidatorContext } from '../../../src/r5';
import { QuantityBuilder } from '../../../src/r5/builders/datatypes';
import FHIRContext from '../../../src';
import { Quantity } from '../../../src/r5/models/datatypes/Quantity';
import { QuantityComparatorEnum } from '../../../src/r5/enums';

describe('Quantity', () => {
  let validator: IValidatorContext;
  let builder: QuantityBuilder;
  let builderFromFunction: QuantityBuilder;
  const { validators: val, createDatatype, builders } = new FHIRContext().forR5();
  validator = val;

  // create global
  beforeEach(() => {
    builder = new QuantityBuilder();
    builderFromFunction = builders.dataTypes.QuantityBuilder();
  });

  it('should be able to create a new availability and validate with correct data [createDatatype()]', async () => {
    const dataType = createDatatype('Quantity', {
      code: 'test',
      comparator: QuantityComparatorEnum.GREATER_OR_EQUAL,
      system: 'test',
      unit: 'test',
      value: 1,
    });

    const validate = await validator.dataTypes.Quantity(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new availability and validate with correct data [new Quantity()]', async () => {
    const dataType = new Quantity({
      code: 'test',
      comparator: QuantityComparatorEnum.GREATER_OR_EQUAL,
      system: 'test',
      unit: 'test',
      value: 1,
    });

    const validate = await validator.dataTypes.Quantity(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new availability and validate with correct data [IQuantity]', async () => {
    const dataType: IQuantity = {
      code: 'test',
      comparator: QuantityComparatorEnum.GREATER_OR_EQUAL,
      system: 'test',
      unit: 'test',
      value: 1,
    };

    const validate = await validator.dataTypes.Quantity(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new availability and validate with wrong data', async () => {
    const dataType = {
      code: 'test',
      comparator: QuantityComparatorEnum.GREATER_OR_EQUAL,
      system: 'test',
      unit: 'test',
      value: 1,
      test: 'test', // wrong property
    };

    const validate = await validator.dataTypes.Quantity(dataType);

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

  it('should be able to create a new attachment using builder methods [new QuantityBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const dataType = builder
      .setCode('test')
      .setComparator(QuantityComparatorEnum.GREATER_OR_EQUAL)
      .setSystem('test')
      .build();

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
      code: 'test',
      comparator: '>=',
      system: 'test',
    });
  });

  it('should be able to create a new attachment using builder methods [builders.dataTypes.QuantityBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const dataType = builderFromFunction
      .setCode('test')
      .setComparator(QuantityComparatorEnum.GREATER_OR_EQUAL)
      .setSystem('test')
      .build();

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
      code: 'test',
      comparator: '>=',
      system: 'test',
    });
  });
});
