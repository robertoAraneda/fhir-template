import FHIRContext from '../../../src';
import { ILocationHoursOfOperation } from '../../../src/r4/interfaces/backbones';
import { ILocationHoursOfOperationBuilder } from '../../../src/r4/models/backbones/LocationHoursOfOperation';
import { _validateBackbone } from '../../../src/r4/validators/BaseValidator';

describe('LocationHoursOfOperation FHIR R4', () => {
  let builder: ILocationHoursOfOperationBuilder;

  const { LocationHoursOfOperation } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = LocationHoursOfOperation.builder();
  });

  it('should be able to validate a new location_hours_of_operation [new LocationHoursOfOperation()]', async () => {
    const item = new LocationHoursOfOperation({
      id: '123',
      daysOfWeek: ['mon', 'tue', 'wed', 'thu', 'fri'],
      allDay: false,
      closingTime: '10:00:00',
      openingTime: '12:00:00',
    });

    const validate = await _validateBackbone(item, 'Location_HoursOfOperation');
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new location_hours_of_operation [ILocationHoursOfOperation]', async () => {
    const item: ILocationHoursOfOperation = {
      id: '123',
      daysOfWeek: ['mon', 'tue', 'wed', 'thu', 'fri'],
      allDay: false,
      closingTime: '10:00:00',
      openingTime: '12:00:00',
    };

    const validate = await _validateBackbone(item, 'Location_HoursOfOperation');
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new location_hours_of_operation using builder methods [LocationHoursOfOperation.builder()]', async () => {
    const item = builder
      .setId('123')
      .setClosingTime('12:00:00')
      .setOpeningTime('10:00:00')
      .setAllDay(false)
      .addDaysOfWeek('mon')
      .build();

    const validate = await _validateBackbone(item, 'Location_HoursOfOperation');
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();

    expect(item).toEqual({
      allDay: false,
      closingTime: '12:00:00',
      daysOfWeek: ['mon'],
      id: '123',
      openingTime: '10:00:00',
    });
  });

  it('should be get errors validators if new location_hours_of_operation has wrong data', async () => {
    const item = {
      id: '123',
      wrongProperty: 'wrongProperty',
    };

    const validate = await _validateBackbone(item, 'Location_HoursOfOperation');
    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors?.length).toBe(1);
    expect(validate.errors).toEqual([
      {
        instancePath: '',
        keyword: 'additionalProperties',
        message: 'must NOT have additional properties',
        params: {
          additionalProperty: 'wrongProperty',
        },
        schemaPath: '#/additionalProperties',
      },
    ]);
  });
});
