import FHIRContext from '../../../src';
import { _validateBackbone } from '../../../src/r4/validators/BaseValidator';
import { IPractitionerRoleAvailableTime } from '../../../src/r4/interfaces/backbones';

import { PractitionerRoleAvailableTimeBuilder } from '../../../src/r4/models/backbones/PractitionerRoleAvailableTimeBuilder';

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

    const validate = await _validateBackbone(item, 'PractitionerRole_AvailableTime');
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new practitioner_role_available_time [IPractitionerRoleAvailableTime]', async () => {
    const item: IPractitionerRoleAvailableTime = {
      id: '123',
      daysOfWeek: ['mon'],
      allDay: true,
    };

    const validate = await _validateBackbone(item, 'PractitionerRole_AvailableTime');
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new practitioner_role_available_time using builder methods [new PractitionerRoleAvailableTime()]', async () => {
    const item = builder.setId('123').addDaysOfWeek('mon').build();

    const validate = await _validateBackbone(item, 'PractitionerRole_AvailableTime');
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();

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

    const validate = await _validateBackbone(item, 'PractitionerRole_AvailableTime');

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
