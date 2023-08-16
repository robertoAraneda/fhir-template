import FHIRContext from '../../../src';
import { IPractitionerRoleAvailableTime } from '../../../src/r4/interfaces/backbones';
import { PractitionerRoleAvailableTimeBuilder } from '../../../src/r4/models/backbones/PractitionerRoleAvailableTimeBuilder';

import { PractitionerRoleAvailableTimeValidator } from '../../../src/r4/models/backbones/PractitionerRoleAvailableTimeValidator';

describe('PractitionerRoleAvailableTime FHIR R4', () => {
  let builder: PractitionerRoleAvailableTimeBuilder;
  const { PractitionerRoleAvailableTime } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = PractitionerRoleAvailableTime.builder();
  });

  it('should be able to validate a new practitioner_role_available_time [new PractitionerRoleAvailableTime()]', async () => {
    const item = new PractitionerRoleAvailableTime({
      id: '123',
      daysOfWeek: ['mon'],
      allDay: true,
    });

    expect(item).toBeDefined();
  });

  it('should be able to validate a new practitioner_role_available_time [IPractitionerRoleAvailableTime]', async () => {
    const item: IPractitionerRoleAvailableTime = {
      id: '123',
      daysOfWeek: ['mon'],
      allDay: true,
    };

    expect(() => PractitionerRoleAvailableTimeValidator(item)).not.toThrow();
  });

  it('should be able to create a new practitioner_role_available_time using builder methods [new PractitionerRoleAvailableTime()]', async () => {
    const item = builder.setId('123').addDaysOfWeek('mon').build();

    expect(item).toBeDefined();

    expect(item).toEqual({
      daysOfWeek: ['mon'],
      id: '123',
    });
  });

  it('should be get errors validators if new address has wrong data', async () => {
    const item = {
      id: '123',
      wrongProperty: '123',
    };

    expect(() => PractitionerRoleAvailableTimeValidator(item)).toThrowError(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for PractitionerRoleAvailableTime",
    );
  });
});
