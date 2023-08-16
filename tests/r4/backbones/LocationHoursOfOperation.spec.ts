import FHIRContext from '../../../src';
import { ILocationHoursOfOperation } from '../../../src/r4/interfaces/backbones';
import { LocationHoursOfOperationBuilder } from '../../../src/r4/models/backbones/LocationHoursOfOperationBuilder';

import { LocationHoursOfOperationValidator } from '../../../src/r4/models/backbones/LocationHoursOfOperationValidator';

describe('LocationHoursOfOperation FHIR R4', () => {
  let builder: LocationHoursOfOperationBuilder;
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

    expect(item).toBeDefined();
  });

  it('should be able to validate a new location_hours_of_operation [ILocationHoursOfOperation]', async () => {
    const item: ILocationHoursOfOperation = {
      id: '123',
      daysOfWeek: ['mon', 'tue', 'wed', 'thu', 'fri'],
      allDay: false,
      closingTime: '10:00:00',
      openingTime: '12:00:00',
    };

    expect(() => LocationHoursOfOperationValidator(item)).not.toThrowError();
  });

  it('should be able to create a new location_hours_of_operation using builder methods [LocationHoursOfOperation.builder()]', async () => {
    const item = builder
      .setId('123')
      .setClosingTime('12:00:00')
      .setOpeningTime('10:00:00')
      .setAllDay(false)
      .addDaysOfWeek('mon')
      .build();

    expect(item).toBeDefined();

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

    expect(() => LocationHoursOfOperationValidator(item)).toThrowError(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for LocationHoursOfOperation",
    );
  });
});
