import FHIRContext from '../../../src';
import { IPeriod } from '../../../src/r4/interfaces/datatypes';
import { IPeriodBuilder } from '../../../src/r4/models/datatypes/Period';
import { _validateDataType } from '../../../src/r4/validators/BaseValidator';

describe('Period FHIR R4', () => {
  let builder: IPeriodBuilder;
  const { Period } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = Period.builder();
  });

  it('should be able to create a new period and validate with correct data [IPeriod]', async function () {
    const item: IPeriod = {
      start: '2020-01-01',
      end: '2020-01-02',
    };

    const validate = await _validateDataType(item, 'Period');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new period and validate with correct data [new Period()]', async function () {
    const item = new Period({
      start: '2020-01-01',
      end: '2020-01-02',
    });

    const validate = await _validateDataType(item, 'Period');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should return a Period with builder methods [new PeriodBuilder()]', async function () {
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

    const validate = await _validateDataType(item, 'Period');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();

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
    expect(validate.errors).toEqual([
      {
        instancePath: '',
        keyword: 'additionalProperties',
        message: 'must NOT have additional properties',
        params: {
          additionalProperty: 'notExist',
        },
        schemaPath: '#/additionalProperties',
      },
    ]);
  });
});
