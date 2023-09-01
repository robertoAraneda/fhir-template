import { IQuantity } from '../../../src/r4/interfaces/datatypes';
import FHIRContext from '../../../src';
import { QuantityComparatorEnum } from '../../../src/r4/enums';
import { QuantityBuilder } from '../../../src/r4/models/datatypes/QuantityBuilder';
import InvalidFieldException from '../../../src/globals/exceptions/InvalidFieldException';
import { QuantityValidator } from '../../../src/r4/models/datatypes/QuantityValidator';

describe('Quantity FHIR R4', () => {
  let builder: QuantityBuilder;
  const { Quantity } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = Quantity.builder();
  });

  it('should be able to create a new quantity and validate with correct data [new Quantity()]', async () => {
    const item = new Quantity({
      code: 'test',
      comparator: QuantityComparatorEnum.GREATER_OR_EQUAL,
      system: 'test',
      unit: 'test',
      value: 1,
    });

    expect(item).toBeDefined();
  });

  it('should be able to create a new quantity and validate with correct data [IQuantity]', async () => {
    const item: IQuantity = {
      code: 'test',
      comparator: QuantityComparatorEnum.GREATER_OR_EQUAL,
      system: 'test',
      unit: 'test',
      value: 1,
    };

    expect(() => QuantityValidator(item)).not.toThrow();
  });

  it('should be validate: Extra property should throw an InvalidFieldException', async () => {
    const item = {
      code: 'test',
      comparator: QuantityComparatorEnum.GREATER_OR_EQUAL,
      system: 'test',
      unit: 'test',
      value: 1,
      test: 'test', // wrong property
    };

    expect(() => QuantityValidator(item)).toThrow(InvalidFieldException);
    expect(() => QuantityValidator(item)).toThrowError(
      "InvalidFieldException: field(s) 'test' is not a valid for Quantity",
    );
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
});
