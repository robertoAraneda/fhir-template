import { ISimpleQuantity } from '../../../src/r5/interfaces/datatypes';
import { SimpleQuantityBuilder } from '../../../src/r5/builders/datatypes';
import FHIRContext from '../../../src';
import { SimpleQuantity } from '../../../src/r5/models/datatypes';

describe('SimpleQuantity FHIR R5', () => {
  let builder: SimpleQuantityBuilder;
  let builderFromFunction: SimpleQuantityBuilder;
  const { Validator, createDatatype, Builder } = new FHIRContext().forR5();

  // create global
  beforeEach(() => {
    builder = new SimpleQuantityBuilder();
    builderFromFunction = Builder.dataTypes.SimpleQuantity();
  });

  it('should be able to create a new simple_quantity and validate with correct data [createDatatype()]', async () => {
    const item = createDatatype('SimpleQuantity', {
      code: 'test',
      unit: 'test',
      value: 1,
    });

    const validate = await Validator.dataTypes.SimpleQuantity(item);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new simple_quantity and validate with correct data [new SimpleQuantity()]', async () => {
    const item = new SimpleQuantity({
      code: 'test',
      unit: 'test',
      value: 1,
    });

    const validate = await Validator.dataTypes.SimpleQuantity(item);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new simple_quantity and validate with correct data [ISimpleQuantity]', async () => {
    const item: ISimpleQuantity = {
      code: 'test',
      unit: 'test',
      value: 1,
    };

    const validate = await Validator.dataTypes.SimpleQuantity(item);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new simple_quantity and validate with wrong data', async () => {
    const item = {
      code: 'test',
      unit: 'test',
      value: 1,
      test: 'test', // wrong property
    };

    const validate = await Validator.dataTypes.SimpleQuantity(item);

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

  it('should be able to create a new attachment using builder methods [new SimpleQuantityBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builder.setCode('test').setSystem('test').build();

    expect(item).toBeDefined();
    expect(item).toEqual({
      code: 'test',
      system: 'test',
    });
  });

  it('should be able to create a new attachment using builder methods [Builder.dataTypes.SimpleQuantityBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builderFromFunction.setCode('test').setSystem('test').build();

    expect(item).toBeDefined();
    expect(item).toEqual({
      code: 'test',
      system: 'test',
    });
  });
});
