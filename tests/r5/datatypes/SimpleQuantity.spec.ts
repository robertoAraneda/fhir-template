import { ISimpleQuantity } from '../../../src/r5/interfaces/datatypes';
import FHIRContext from '../../../src';
import SimpleQuantityBuilder from '../../../src/r5/models/datatypes/SimpleQuantityBuilder';
import { _validateDataType } from '../../../src/r5/validators/BaseValidator';

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

    const validate = await _validateDataType(item, 'SimpleQuantity');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new simple_quantity and validate with correct data [ISimpleQuantity]', async () => {
    const item: ISimpleQuantity = {
      code: 'test',
      unit: 'test',
      value: 1,
    };

    const validate = await _validateDataType(item, 'SimpleQuantity');

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

    const validate = await _validateDataType(item, 'SimpleQuantity');

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

    const validate = await _validateDataType(item, 'SimpleQuantity');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });
});
