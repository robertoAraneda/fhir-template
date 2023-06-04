import { Period } from '../../src/r5/interfaces/datatypes/Period';
import ElementBuilder from '../../src/r5/ElementBuilder';
import ElementValidator from '../../src/r5/ElementValidator';
import { PeriodBuilder } from '../../src/r5/builders/datatypes/PeriodBuilder';

describe('Period', () => {
  let builder: PeriodBuilder;
  beforeAll(async () => {
    builder = ElementBuilder.Period();
  });

  it('should return a Period with method', async function () {
    const dataType = builder
      .setId('id')
      .setStart('2020-01-01')
      .setEnd('2020-01-02')
      .addPeriodParamExtension('start', {
        id: 'start',
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/iso21090-EN-restriction',
            valueBoolean: true,
          },
        ],
      })
      .addPeriodParamExtension('end', {
        extension: [
          {
            url: 'test',
            valueBoolean: true,
          },
        ],
      })
      .build();

    expect(dataType).toEqual({
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

    const validate = await ElementValidator.Period(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should return an error if attribute does not exist', async function () {
    const dataType = {
      start: '2020-01-01',
      end: '2020-01-02',
      notExist: 'not exist',
    } as any;

    const validate = await ElementValidator.Period(dataType);

    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toHaveLength(1);
  });
});
