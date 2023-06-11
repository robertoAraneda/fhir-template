import { IQuantity } from '../../../src/r4/interfaces/datatypes';
import { QuantityBuilder } from '../../../src/r4/builders/datatypes';
import FHIRContext from '../../../src';
import { Quantity } from '../../../src/r4/models/datatypes';
import { QuantityComparatorEnum } from '../../../src/r4/enums';

describe('Quantity FHIR R4', () => {
  let builder: QuantityBuilder;
  let builderFromFunction: QuantityBuilder;
  const { Validator, createDatatype, Builder } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = new QuantityBuilder();
    builderFromFunction = Builder.dataTypes.QuantityBuilder();
  });

  it('should be able to create a new quantity and validate with correct data [createDatatype()]', async () => {
    const item = createDatatype('Quantity', {
      code: 'test',
      comparator: QuantityComparatorEnum.GREATER_OR_EQUAL,
      system: 'test',
      unit: 'test',
      value: 1,
    });

    const validate = await Validator.dataTypes.Quantity(item);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new quantity and validate with correct data [new Quantity()]', async () => {
    const item = new Quantity({
      code: 'test',
      comparator: QuantityComparatorEnum.GREATER_OR_EQUAL,
      system: 'test',
      unit: 'test',
      value: 1,
    });

    const validate = await Validator.dataTypes.Quantity(item);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new quantity and validate with correct data [IQuantity]', async () => {
    const item: IQuantity = {
      code: 'test',
      comparator: QuantityComparatorEnum.GREATER_OR_EQUAL,
      system: 'test',
      unit: 'test',
      value: 1,
    };

    const validate = await Validator.dataTypes.Quantity(item);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new quantity and validate with wrong data', async () => {
    const item = {
      code: 'test',
      comparator: QuantityComparatorEnum.GREATER_OR_EQUAL,
      system: 'test',
      unit: 'test',
      value: 1,
      test: 'test', // wrong property
    };

    const validate = await Validator.dataTypes.Quantity(item);

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
    const item = builder
      .setCode('test')
      .setComparator(QuantityComparatorEnum.GREATER_OR_EQUAL)
      .setSystem('test')
      .build();

    expect(item).toBeDefined();
    expect(item).toEqual({
      code: 'test',
      comparator: '>=',
      system: 'test',
    });
  });

  it('should be able to create a new attachment using builder methods [Builder.dataTypes.QuantityBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builderFromFunction
      .setCode('test')
      .setComparator(QuantityComparatorEnum.GREATER_OR_EQUAL)
      .setSystem('test')
      .build();

    expect(item).toBeDefined();
    expect(item).toEqual({
      code: 'test',
      comparator: '>=',
      system: 'test',
    });
  });
});
