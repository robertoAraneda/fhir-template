import FHIRContext from '../../../src';
import { IPeriod } from '../../../src/r5/interfaces/datatypes';
import PeriodBuilder from '../../../src/r5/models/datatypes/PeriodBuilder';
import { _validateDataType } from '../../../src/r5/validators/BaseValidator';
import { PeriodValidator } from '../../../src/r5/models/datatypes/PeriodValidator';

describe('Period FHIR R5', () => {
  let builder: PeriodBuilder;
  const { Period } = new FHIRContext().forR5();

  // create global
  beforeEach(() => {
    builder = Period.builder();
  });

  it('should be able to create a new attachment and validate with correct data [IPeriod]', async function () {
    const item: IPeriod = {
      start: '2020-01-01',
      end: '2020-01-02',
    };

    expect(() => PeriodValidator(item)).not.toThrow();
  });

  it('should be able to create a new attachment and validate with correct data [new Period]', async function () {
    const item = new Period({
      start: '2020-01-01',
      end: '2020-01-02',
    });

    const validate = await _validateDataType(item, 'Period');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should return a Period with method', async function () {
    const item = builder
      .setId('id')
      .setStart('2020-01-01')
      .setEnd('2020-01-02')
      .addParamExtension('start', {
        id: 'start',
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/iso21090-EN-restriction',
            valueBoolean: true,
          },
        ],
      })
      .addParamExtension('end', {
        extension: [
          {
            url: 'test',
            valueBoolean: true,
          },
        ],
      })
      .build();

    expect(item).toEqual({
      end: '2020-01-02',
      id: 'id',
      start: '2020-01-01',
      _start: {
        id: 'start',
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/iso21090-EN-restriction',
            valueBoolean: true,
          },
        ],
      },
      _end: {
        extension: [
          {
            url: 'test',
            valueBoolean: true,
          },
        ],
      },
    });

    const validate = await _validateDataType(item, 'Period');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should return an error if attribute does not exist', async function () {
    const item = {
      start: '2020-01-01',
      end: '2020-01-02',
      notExist: 'not exist',
    } as any;

    const validate = await _validateDataType(item, 'Period');

    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toHaveLength(1);
  });
});
