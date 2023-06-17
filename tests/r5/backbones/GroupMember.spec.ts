import FHIRContext from '../../../src';
import { GroupMember } from '../../../src/r5/models/backbones';
import { GroupMemberBuilder } from '../../../src/r5/builders/backbones';
import { IGroupMember } from '../../../src/r5/interfaces/backbones';

describe('GroupMember FHIR R5', () => {
  let builder: GroupMemberBuilder;
  let builderFromFunction: GroupMemberBuilder;
  const { Validator, createBackboneElement, Builder } = new FHIRContext().forR5();

  // create global
  beforeEach(() => {
    builder = new GroupMemberBuilder();
    builderFromFunction = Builder.backboneElements.GroupMember();
  });

  it('should be able to validate a new group_characteristic [createBackboneElement]', async () => {
    const item = createBackboneElement('GroupMember', {
      id: '123',
      inactive: false,
      entity: {
        reference: 'Patient/123',
      },
    });

    const validate = await Validator.backboneElements.GroupMember(item);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new group_characteristic [new GroupMember()]', async () => {
    const item = new GroupMember({
      id: '123',
      inactive: false,
      entity: {
        reference: 'Patient/123',
      },
    });

    const validateAddress = await Validator.backboneElements.GroupMember(item);
    expect(validateAddress.isValid).toBeTruthy();
    expect(validateAddress.errors).toBeUndefined();
  });

  it('should be able to validate a new group_characteristic [IGroupMember]', async () => {
    const item: IGroupMember = {
      id: '123',
      inactive: false,
      entity: {
        reference: 'Patient/123',
      },
    };

    const validate = await Validator.backboneElements.GroupMember(item);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new group_characteristic using builder methods [new GroupMemberBuilder()]', async () => {
    const item = builder
      .setId('123')
      .setEntity({
        reference: 'Patient/123',
      })
      .setInactive(false)
      .build();

    expect(item).toEqual({
      entity: {
        reference: 'Patient/123',
      },
      id: '123',
      inactive: false,
    });
  });

  it('should be able to create a new group_characteristic using builder methods [Builder.backboneElements.GroupMember()]', async () => {
    const item = builderFromFunction
      .setId('123')
      .setEntity({
        reference: 'Patient/123',
      })
      .setInactive(false)
      .build();

    expect(item).toEqual({
      entity: {
        reference: 'Patient/123',
      },
      id: '123',
      inactive: false,
    });
  });

  it('should be get errors validators if new group_characteristic has wrong data', async () => {
    const item = {
      id: '123',
      wrongProperty: 'wrongProperty',
    };

    const validate = await Validator.backboneElements.GroupMember(item);
    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors?.length).toBe(2);
    expect(validate.errors).toEqual([
      {
        instancePath: '',
        keyword: 'required',
        message: "must have required property 'entity'",
        params: {
          missingProperty: 'entity',
        },
        schemaPath: '#/required',
      },
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
