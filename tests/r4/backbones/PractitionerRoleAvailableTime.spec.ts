import FHIRContext from '../../../src';
import { PractitionerRoleAvailableTime } from '../../../src/r4/models/backbones/PractitionerRoleAvailableTime';
import { PractitionerRoleAvailableTimeBuilder } from '../../../src/r4/builders/backbones';
import { IPractitionerRoleAvailableTime } from '../../../src/r4/interfaces/backbones';

describe('PractitionerRoleAvailableTime FHIR R4', () => {
  let builder: PractitionerRoleAvailableTimeBuilder;
  let builderFromFunction: PractitionerRoleAvailableTimeBuilder;
  const { Validator, createBackboneElement, Builder } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = new PractitionerRoleAvailableTimeBuilder();
    builderFromFunction = Builder.backboneElements.PractitionerRoleAvailableTime();
  });

  it('should be able to validate a new practitioner_role_available_time [createBackboneElement]', async () => {
    const backboneElement = createBackboneElement('PractitionerRoleAvailableTime', {
      id: '123',
      daysOfWeek: ['mon'],
      allDay: true,
    });

    const validate = await Validator.backboneElements.PractitionerRoleAvailableTime(backboneElement);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new practitioner_role_available_time [new PractitionerRoleAvailableTime()]', async () => {
    const item = new PractitionerRoleAvailableTime({
      id: '123',
      daysOfWeek: ['mon'],
      allDay: true,
    });

    const validateAddress = await Validator.backboneElements.PractitionerRoleAvailableTime(item);
    expect(validateAddress.isValid).toBeTruthy();
    expect(validateAddress.errors).toBeUndefined();
  });

  it('should be able to validate a new practitioner_role_available_time [IPractitionerRoleAvailableTime]', async () => {
    const item: IPractitionerRoleAvailableTime = {
      id: '123',
      daysOfWeek: ['mon'],
      allDay: true,
    };

    const validate = await Validator.backboneElements.PractitionerRoleAvailableTime(item);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new practitioner_role_available_time using builder methods [new PractitionerRoleAvailableTime()]', async () => {
    const item = builder.setId('123').addDaysOfWeek('mon').build();

    expect(item).toEqual({
      daysOfWeek: ['mon'],
      id: '123',
    });
  });

  it('should be able to create a new address using builder methods [builders.dataTypes.AddressBuilder()]', async () => {
    const item = builderFromFunction.setId('123').addDaysOfWeek('mon').build();

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

    const validate = await Validator.backboneElements.PractitionerRoleAvailableTime(item);
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
