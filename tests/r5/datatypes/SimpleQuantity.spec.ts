import { ISimpleQuantity } from '../../../src/r5/interfaces/datatypes';
import FHIRContext from '../../../src';
import SimpleQuantityBuilder from '../../../src/r5/models/datatypes/SimpleQuantityBuilder';
import { SimpleQuantityValidator } from '../../../src/r5/models/datatypes/SimpleQuantityValidator';

describe('SimpleQuantity FHIR R5', () => {
  let builder: SimpleQuantityBuilder;

  const { SimpleQuantity } = new FHIRContext().forR5();

  // create global
  beforeEach(() => {
    builder = SimpleQuantity.builder();
  });

  it('should be able to create a new simple_quantity and validate with correct data [new SimpleQuantity()]', async () => {
    const item = new SimpleQuantity({
      code: 'test',
      unit: 'test',
      value: 1,
    });

    expect(item).toBeDefined();
  });

  it('should be able to create a new simple_quantity and validate with correct data [ISimpleQuantity]', async () => {
    const item: ISimpleQuantity = {
      code: 'test',
      unit: 'test',
      value: 1,
    };

    expect(() => SimpleQuantityValidator(item)).not.toThrow();
  });

  it('should be able to validate a new simple_quantity and validate with wrong data', async () => {
    const item = {
      code: 'test',
      unit: 'test',
      value: 1,
      test: 'test', // wrong property
    };

    expect(() => SimpleQuantityValidator(item)).toThrow(
      "InvalidFieldException: field(s) 'test' is not a valid for SimpleQuantity",
    );
  });

  it('should be able to create a new attachment using builder methods [new SimpleQuantityBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builder.setCode('test').setSystem('test').build();

    expect(item).toBeDefined();
    expect(item).toEqual({
      code: 'test',
      system: 'test',
    });
  });
});
