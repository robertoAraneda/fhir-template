import { IRange } from '../../../src/r4/interfaces/datatypes';
import FHIRContext from '../../../src';
import { RangeBuilder } from '../../../src/r4/models/datatypes/RangeBuilder';
import InvalidFieldException from '../../../src/globals/exceptions/InvalidFieldException';
import { RangeValidator } from '../../../src/r4/models/datatypes/RangeValidator';

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
        system: 'test',
        code: 'test',
      },
      high: {
        system: 'test',
        code: 'test',
      },
    });

    expect(item).toBeDefined();
  });

  it('should be able to create a new range and validate with correct data [IRange]', async () => {
    const item: IRange = {
      id: 'test',
      low: {
        system: 'test',
        code: 'test',
      },
      high: {
        system: 'test',
        code: 'test',
      },
    };

    expect(() => RangeValidator(item)).not.toThrow();
  });

  it('should be able to validate a new range and validate with wrong data', async () => {
    const item = {
      id: 'test',
      low: {
        system: 'test',
        code: 'test',
      },
      high: {
        system: 'test',
        code: 'test',
      },
      test: 'test', // wrong property
    };

    expect(() => RangeValidator(item)).toThrow(InvalidFieldException);
    expect(() => RangeValidator(item)).toThrow("InvalidFieldException: field(s) 'test' is not a valid for Range");
  });

  it('should be able to create a new attachment using builder methods [new RangeBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builder
      .setId('123')
      .setLow({ code: 'code', system: 'system' })
      .setHigh({ code: 'code', system: 'system' })
      .build();

    expect(item).toBeDefined();
    expect(item).toEqual({
      high: {
        code: 'code',
        system: 'system',
      },
      id: '123',
      low: {
        code: 'code',
        system: 'system',
      },
    });
  });
});
