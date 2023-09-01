import { IAvailability } from '../../../src/r5/interfaces/datatypes';
import FHIRContext from '../../../src';
import AvailabilityBuilder from '../../../src/r5/models/datatypes/AvailabilityBuilder';

import { AvailabilityValidator } from '../../../src/r5/models/datatypes/AvailabilityValidator';

describe('Availability FHIR R5', () => {
  let builder: AvailabilityBuilder;
  const { Availability } = new FHIRContext().forR5();

  // create global
  beforeEach(() => {
    builder = Availability.builder();
  });

  it('should be able to create a new availability and validate with correct data [new Availability()]', async () => {
    const item = new Availability({
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

    expect(item).toBeDefined();
  });

  it('should be able to create a new availability and validate with correct data [IAvailability]', async () => {
    const item: IAvailability = {
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

    expect(() => AvailabilityValidator(item)).not.toThrow();
  });

  it('should be able to validate a new availability and validate with wrong data', async () => {
    const item = {
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

    expect(() => AvailabilityValidator(item as any)).toThrow(
      "InvalidFieldException: field(s) 'test' is not a valid for IAvailability",
    );
  });

  it('should be able to create a new attachment using builder methods [new AvailabilityBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builder
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

    expect(item).toBeDefined();
    expect(item).toEqual({
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
