import FHIRContext from '../../../src';
import { LocationHoursOfOperation } from '../../../src/r4/models/backbones';
import { LocationHoursOfOperationBuilder } from '../../../src/r4/builders/backbones';
import { ILocationHoursOfOperation } from '../../../src/r4/interfaces/backbones';

describe('LocationHoursOfOperation FHIR R4', () => {
  let builder: LocationHoursOfOperationBuilder;
  let builderFromFunction: LocationHoursOfOperationBuilder;
  const { Validator, createBackboneElement, Builder } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = new LocationHoursOfOperationBuilder();
    builderFromFunction = Builder.backboneElements.LocationHoursOfOperation();
  });

  it('should be able to validate a new location_hours_of_operation [createBackboneElement]', async () => {
    const item = createBackboneElement('LocationHoursOfOperation', {
      id: '123',
      daysOfWeek: ['mon', 'tue', 'wed', 'thu', 'fri'],
      allDay: false,
      closingTime: '10:00:00',
      openingTime: '12:00:00',
    });

    const validate = await Validator.backboneElements.LocationHoursOfOperation(item);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new location_hours_of_operation [new LocationHoursOfOperation()]', async () => {
    const item = new LocationHoursOfOperation({
      id: '123',
      daysOfWeek: ['mon', 'tue', 'wed', 'thu', 'fri'],
      allDay: false,
      closingTime: '10:00:00',
      openingTime: '12:00:00',
    });

    const validateAddress = await Validator.backboneElements.LocationHoursOfOperation(item);
    expect(validateAddress.isValid).toBeTruthy();
    expect(validateAddress.errors).toBeUndefined();
  });

  it('should be able to validate a new location_hours_of_operation [ILocationHoursOfOperation]', async () => {
    const item: ILocationHoursOfOperation = {
      id: '123',
      daysOfWeek: ['mon', 'tue', 'wed', 'thu', 'fri'],
      allDay: false,
      closingTime: '10:00:00',
      openingTime: '12:00:00',
    };

    const validate = await Validator.backboneElements.LocationHoursOfOperation(item);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new location_hours_of_operation using builder methods [new LocationHoursOfOperationBuilder()]', async () => {
    const item = builder
      .setId('123')
      .setClosingTime('12:00:00')
      .setOpeningTime('10:00:00')
      .setAllDay(false)
      .addDaysOfWeek('mon')
      .build();

    expect(item).toEqual({
      allDay: false,
      closingTime: '12:00:00',
      daysOfWeek: ['mon'],
      id: '123',
      openingTime: '10:00:00',
    });
  });

  it('should be able to create a new location_hours_of_operation using builder methods [Builder.backboneElements.LocationHoursOfOperation()]', async () => {
    const item = builderFromFunction
      .setId('123')
      .setClosingTime('12:00:00')
      .setOpeningTime('10:00:00')
      .setAllDay(false)
      .addDaysOfWeek('mon')
      .build();

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

    const validate = await Validator.backboneElements.LocationHoursOfOperation(item);
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
