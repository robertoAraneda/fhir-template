import { PeriodBuilder } from '../../../src/r4/builders/datatypes';
import FHIRContext from '../../../src';
import { Period } from '../../../src/r4/models/datatypes';
import { IPeriod } from '../../../src/r4/interfaces/datatypes';

describe('Period FHIR R4', () => {
  let builder: PeriodBuilder;
  let builderFromFunction: PeriodBuilder;
  const { Validator, createDatatype, Builder } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = new PeriodBuilder();
    builderFromFunction = Builder.dataTypes.Period();
  });

  it('should be able to create a new period and validate with correct data [IPeriod]', async function () {
    const item: IPeriod = {
      start: '2020-01-01',
      end: '2020-01-02',
    };

    const validate = await Validator.dataTypes.Period(item);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new period and validate with correct data [new Period()]', async function () {
    const item = new Period({
      start: '2020-01-01',
      end: '2020-01-02',
    });

    const validate = await Validator.dataTypes.Period(item);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new period and validate with correct data [createDataType]', async function () {
    const item = createDatatype('Period', {
      start: '2020-01-01',
      end: '2020-01-02',
    });

    const validate = await Validator.dataTypes.Period(item);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should return a Period with builder methods [Builder.dataTypes.PeriodBuilder()]', async function () {
    const item = builderFromFunction
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

    const validate = await Validator.dataTypes.Period(item);

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

    const validate = await Validator.dataTypes.Period(item);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should return an error if attribute does not exist', async function () {
    const item = {
      start: '2020-01-01',
      end: '2020-01-02',
      notExist: 'not exist',
    } as any;

    const validate = await Validator.dataTypes.Period(item);

    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toHaveLength(1);
  });
});
