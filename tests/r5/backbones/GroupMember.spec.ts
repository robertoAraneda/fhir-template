import FHIRContext from '../../../src';
import { IGroupMember } from '../../../src/r5/interfaces/backbones';
import GroupMemberBuilder from '../../../src/r5/models/backbones/GroupMemberBuilder';
import { GroupMemberValidator } from '../../../src/r5/models/backbones/GroupMemberValidator';

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
    expect(item).toBeDefined();
  });

  it('should be able to validate a new group_characteristic [IGroupMember]', async () => {
    const item: IGroupMember = {
      id: '123',
      inactive: false,
      entity: {
        reference: 'Patient/123',
      },
    };

    expect(() => GroupMemberValidator(item)).not.toThrow();
  });

  it('should be able to create a new group_characteristic using builder methods [new GroupMemberBuilder()]', async () => {
    const item = builder
      .setId('123')
      .setEntity({
        reference: 'Patient/123',
      })
      .setInactive(false)
      .build();

    expect(item).toBeDefined();

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
      entity: {
        reference: 'Patient/123',
      },
      wrongProperty: 'wrongProperty',
    };

    expect(() => GroupMemberValidator(item)).toThrowError(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for GroupMember",
    );
  });
});
