import { IRange } from '../../../src/r4/interfaces/datatypes';
import FHIRContext from '../../../src';
import { _validateDataType } from '../../../src/r4/validators/BaseValidator';
import { RangeBuilder } from '../../../src/r4/models/datatypes/RangeBuilder';

describe('Range FHIR R4', () => {
  let builder: RangeBuilder;

  const { Range } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = Range.builder();
  });

  it('should be able to create a new range and validate with correct data [new Range()]', async () => {
    const item = new Range({
      id: 'test',
      low: {
        code: 'test',
      },
      high: {
        code: 'test',
      },
    });

    const validate = await _validateDataType(item, 'Range');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new range and validate with correct data [IRange]', async () => {
    const item: IRange = {
      id: 'test',
      low: {
        code: 'test',
      },
      high: {
        code: 'test',
      },
    };

    const validate = await _validateDataType(item, 'Range');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new range and validate with wrong data', async () => {
    const item = {
      id: 'test',
      low: {
        code: 'test',
      },
      high: {
        code: 'test',
      },
      test: 'test', // wrong property
    };

    const validate = await _validateDataType(item, 'Range');

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

  it('should be able to create a new attachment using builder methods [new RangeBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builder.setId('123').setLow({ code: 'code' }).setHigh({ code: 'code' }).build();

    const validate = await _validateDataType(item, 'Range');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();

    expect(item).toBeDefined();
    expect(item).toEqual({
      high: {
        code: 'code',
      },
      id: '123',
      low: {
        code: 'code',
      },
    });
  });
});
