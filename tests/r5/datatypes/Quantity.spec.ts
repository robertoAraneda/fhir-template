import { IQuantity } from '../../../src/r5/interfaces/datatypes';
import FHIRContext from '../../../src';
import { QuantityComparatorEnum } from '../../../src/r5/enums';
import QuantityBuilder from '../../../src/r5/models/datatypes/QuantityBuilder';
import { _validateDataType } from '../../../src/r5/validators/BaseValidator';

describe('Quantity FHIR R5', () => {
  let builder: QuantityBuilder;
  const { Quantity } = new FHIRContext().forR5();

  // create global
  beforeEach(() => {
    builder = Quantity.builder();
  });

  it('should be able to create a new availability and validate with correct data [new Quantity()]', async () => {
    const item = new Quantity({
      code: 'test',
      comparator: QuantityComparatorEnum.GREATER_OR_EQUAL,
      system: 'test',
      unit: 'test',
      value: 1,
    });

    const validate = await _validateDataType(item, 'Quantity');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new availability and validate with correct data [IQuantity]', async () => {
    const item: IQuantity = {
      code: 'test',
      comparator: QuantityComparatorEnum.GREATER_OR_EQUAL,
      system: 'test',
      unit: 'test',
      value: 1,
    };
    const validate = await _validateDataType(item, 'Quantity');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new availability and validate with wrong data', async () => {
    const item = {
      code: 'test',
      comparator: QuantityComparatorEnum.GREATER_OR_EQUAL,
      system: 'test',
      unit: 'test',
      value: 1,
      test: 'test', // wrong property
    };

    const validate = await _validateDataType(item, 'Quantity');

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

    const validate = await _validateDataType(item, 'Quantity');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });
});
