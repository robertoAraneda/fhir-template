import FHIRContext from '../../../src';
import { IGroupMember } from '../../../src/r5/interfaces/backbones';
import GroupMemberBuilder from '../../../src/r5/models/backbones/GroupMemberBuilder';
import { _validateBackbone } from '../../../src/r5/validators/BaseValidator';

describe('GroupMember FHIR R5', () => {
  let builder: GroupMemberBuilder;
  const { GroupMember } = new FHIRContext().forR5();

  // create global
  beforeEach(() => {
    builder = GroupMember.builder();
  });

  it('should be able to validate a new group_characteristic [new GroupMember()]', async () => {
    const item = new GroupMember({
      id: '123',
      inactive: false,
      entity: {
        reference: 'Patient/123',
      },
    });

    const validate = await _validateBackbone(item, 'Group_Member');
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new group_characteristic [IGroupMember]', async () => {
    const item: IGroupMember = {
      id: '123',
      inactive: false,
      entity: {
        reference: 'Patient/123',
      },
    };

    const validate = await _validateBackbone(item, 'Group_Member');

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

    const validate = await _validateBackbone(item, 'Group_Member');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();

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

    const validate = await _validateBackbone(item, 'Group_Member');
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
