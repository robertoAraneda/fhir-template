import { IAvailability } from '../../../src/r4b/interfaces/datatypes';
import { IValidatorContext } from '../../../src/r4b';
import { AvailabilityBuilder } from '../../../src/r4b/builders/datatypes';
import FHIRContext from '../../../src';
import { Availability } from '../../../src/r4b/models/datatypes/Availability';

describe('Availability', () => {
  let validator: IValidatorContext;
  let builder: AvailabilityBuilder;
  let builderFromFunction: AvailabilityBuilder;
  const { validators: val, createDatatype, builders } = new FHIRContext().forR4B();
  validator = val;

  // create global
  beforeEach(() => {
    builder = new AvailabilityBuilder();
    builderFromFunction = builders.dataTypes.AvailabilityBuilder();
  });

  it('should be able to create a new availability and validate with correct data [createDatatype()]', async () => {
    const dataType = createDatatype('Availability', {
      availableTime: [
        {
          allDay: true,
          availableStartTime: '08:00:00',
          daysOfWeek: ['mon', 'tue'],
        },
      ],
      notAvailableTime: [
        {
          description: 'test',
          during: {
            start: '2023-01-01',
            end: '2023-01-01',
          },
        },
      ],
    });

    const validate = await validator.dataTypes.Availability(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new availability and validate with correct data [new Availability()]', async () => {
    const dataType = new Availability({
      availableTime: [
        {
          allDay: true,
          availableStartTime: '08:00:00',
          daysOfWeek: ['mon', 'tue'],
        },
      ],
      notAvailableTime: [
        {
          description: 'test',
          during: {
            start: '2023-01-01',
            end: '2023-01-01',
          },
        },
      ],
    });

    const validate = await validator.dataTypes.Availability(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new availability and validate with correct data [IAvailability]', async () => {
    const dataType: IAvailability = {
      availableTime: [
        {
          allDay: true,
          availableStartTime: '08:00:00',
          daysOfWeek: ['mon', 'tue'],
        },
      ],
      notAvailableTime: [
        {
          description: 'test',
          during: {
            start: '2020-01-01',
            end: '2020-01-01',
          },
        },
      ],
    };

    const validate = await validator.dataTypes.Availability(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new availability and validate with wrong data', async () => {
    const dataType = {
      availableTime: [
        {
          allDay: true,
          availableStartTime: '2020-01-01', // wrong data
          daysOfWeek: ['mon', 'tue'],
        },
      ],
      notAvailableTime: [
        {
          description: 'test',
          during: {
            start: '2020-01-01',
            end: '2020-01-02',
          },
        },
      ],
      test: 'test', // wrong property
    };

    const validate = await validator.dataTypes.Availability(dataType);

    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors).toHaveLength(2);
    expect(validate.errors).toEqual([
      {
        instancePath: '',
        keyword: 'additionalProperties',
        message: 'must NOT have additional properties',
        params: { additionalProperty: 'test' },
        schemaPath: '#/additionalProperties',
      },
      {
        instancePath: '/availableTime/0/availableStartTime',
        keyword: 'pattern',
        message: "The value '/availableTime/0/availableStartTime' does not match with datatype 'time'",
        params: { value: '/availableTime/0/availableStartTime' },
        schemaPath: 'base.schema.json#/definitions/time/pattern',
      },
    ]);
  });

  it('should be able to create a new attachment using builder methods [new AvailabilityBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const dataType = builder
      .addAvailableTime({
        allDay: true,
        daysOfWeek: ['mon', 'tue'],
      })
      .addNotAvailableTime({
        description: 'test',
        during: {
          start: '2020-01-01',
          end: '2020-01-02',
        },
      })
      .build();

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
      availableTime: [
        {
          allDay: true,
          daysOfWeek: ['mon', 'tue'],
        },
      ],
      notAvailableTime: [
        {
          description: 'test',
          during: {
            end: '2020-01-02',
            start: '2020-01-01',
          },
        },
      ],
    });
  });

  it('should be able to create a new attachment using builder methods [builders.dataTypes.AvailabilityBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const dataType = builderFromFunction
      .addAvailableTime({
        allDay: true,
        daysOfWeek: ['mon', 'tue'],
      })
      .addNotAvailableTime({
        description: 'test',
        during: {
          start: '2020-01-01',
          end: '2020-01-02',
        },
      })
      .build();

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
      availableTime: [
        {
          allDay: true,
          daysOfWeek: ['mon', 'tue'],
        },
      ],
      notAvailableTime: [
        {
          description: 'test',
          during: {
            end: '2020-01-02',
            start: '2020-01-01',
          },
        },
      ],
    });
  });
});
