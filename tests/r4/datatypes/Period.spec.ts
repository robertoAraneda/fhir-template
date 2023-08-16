import FHIRContext from '../../../src';
import { IPeriod } from '../../../src/r4/interfaces/datatypes';
import { PeriodBuilder } from '../../../src/r4/models/datatypes/PeriodBuilder';

import { PeriodValidator } from '../../../src/r4/models/datatypes/PeriodValidator';

describe('Period FHIR R4', () => {
  let builder: PeriodBuilder;
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

    expect(() => PeriodValidator(item)).not.toThrowError();
  });

  it('should be able to create a new period and validate with correct data [new Period()]', async function () {
    const item = new Period({
      start: '2020-01-01T00:00:00.000Z',
      end: '2020-01-02',
    });

    expect(item).toBeDefined();
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
    };

    expect(() => PeriodValidator(item as IPeriod)).toThrow(
      "InvalidFieldException: field(s) 'notExist' is not a valid for Period",
    );
  });
});
