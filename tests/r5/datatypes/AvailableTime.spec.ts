import { IAvailableTime } from '../../../src/r5/interfaces/datatypes';
import FHIRContext from '../../../src';
import AvailableTimeBuilder from '../../../src/r5/models/datatypes/AvailableTimeBuilder';
import { DaysOfWeekEnum } from '../../../src/r5/enums';

import { AvailableTimeValidator } from '../../../src/r5/models/datatypes/AvailableTimeValidator';

describe('AvailableTime FHIR R5', () => {
  let builder: AvailableTimeBuilder;

  const { AvailableTime } = new FHIRContext().forR5();

  // create global
  beforeEach(() => {
    builder = AvailableTime.builder();
  });

  it('should be able to create a new available time and validate with correct data [new AvailableTime()]', async () => {
    const item = new AvailableTime({
      allDay: true,
      availableEndTime: '12:00:00',
      availableStartTime: '13:00:00',
      daysOfWeek: ['mon', DaysOfWeekEnum.SAT],
    });

    expect(item).toBeDefined();
  });

  it('should be able to create a new available time and validate with correct data [IAvailableTime]', async () => {
    const item: IAvailableTime = {
      id: '123',
      _daysOfWeek: [
        {
          extension: [
            {
              url: 'test',
              valueString: 'test',
            },
          ],
        },
      ],
    };

    expect(() => AvailableTimeValidator(item)).not.toThrow();
  });

  it('should be able to validate a new available time and validate with wrong data', async () => {
    const item = {
      id: '123',
      test: 'test', // wrong property
    };

    expect(() => AvailableTimeValidator(item)).toThrow(
      "InvalidFieldException: field(s) 'test' is not a valid for AvailableTime",
    );
  });

  it('should be able to create a new available time using builder methods [new AvailableTimeBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builder.setId('123').addDaysOfWeek(DaysOfWeekEnum.MON).addDaysOfWeek(DaysOfWeekEnum.SAT).build();

    expect(item).toBeDefined();
    expect(item).toEqual({
      id: '123',
      daysOfWeek: ['mon', 'sat'],
    });
  });
});
