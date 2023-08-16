import { IGroup } from '../../../src/r5/interfaces/resources';
import FHIRContext from '../../../src';
import GroupBuilder from '../../../src/r5/models/resources/GroupBuilder';
import { GroupValidator } from '../../../src/r5/models/resources/GroupValidator';

describe('Group FHIR R5', () => {
  let builder: GroupBuilder;
  const context = new FHIRContext();
  const { Validator, Group } = context.forR5();

  // create global
  beforeEach(() => {
    builder = Group.builder();
  });

  it('should be able to create a new group and validate with correct data [IGroup]', async () => {
    const item: IGroup = {
      resourceType: 'Group',
      id: '101',
      membership: 'enumerated',
      text: {
        status: 'additional',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>Herd of 25 horses</p>\n      <p>Gender: mixed</p>\n      <p>Owner: John Smith</p>\n    </div>',
      },
      identifier: [
        {
          system: 'http://someveterinarianclinic.org/fhir/NamingSystem/herds',
          value: '12345',
        },
      ],
      type: 'animal',
      code: {
        text: 'Horse',
      },
      name: "John's herd",
      quantity: 25,
      characteristic: [
        {
          code: {
            text: 'gender',
          },
          valueCodeableConcept: {
            text: 'mixed',
          },
          exclude: false,
        },
        {
          code: {
            text: 'owner',
          },
          valueCodeableConcept: {
            text: 'John Smith',
          },
          exclude: false,
        },
      ],
    };
    expect(item).toBeDefined();
  });

  it('should be able to create a new group and validate with correct data [new Group()]', async () => {
    const item = new Group({
      resourceType: 'Group',
      membership: 'enumerated',
      id: '102',
      text: {
        status: 'additional',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>Selected Patients</p>\n      <ul>\n        <li>Patient Donald DUCK @ Acme Healthcare, Inc. MR = 654321</li>\n        <li>Patient Donald D DUCK @ Acme Healthcare, Inc. MR = 123456</li>\n        <li>Patient Simon Notsowell @ Acme Healthcare, Inc. MR = 123457, DECEASED</li>\n        <li>Patient Sandy Notsowell @ Acme Healthcare, Inc. MR = 123458, DECEASED</li>\n      </ul>\n    </div>',
      },
      type: 'person',
      member: [
        {
          entity: {
            reference: 'Patient/pat1',
          },
          period: {
            start: '2014-10-08',
          },
        },
        {
          entity: {
            reference: 'Patient/pat2',
          },
          period: {
            start: '2015-04-02',
          },
          inactive: true,
        },
        {
          entity: {
            reference: 'Patient/pat3',
          },
          period: {
            start: '2015-08-06',
          },
        },
        {
          entity: {
            reference: 'Patient/pat4',
          },
          period: {
            start: '2015-08-06',
          },
        },
      ],
    });

    expect(() => GroupValidator(item)).not.toThrow();
  });

  it('should be able to create a new group and validate with correct data [Group-example-patientlist.json]', async () => {
    const item: IGroup = {
      resourceType: 'Group',
      id: 'example-patientlist',
      membership: 'enumerated',
      text: {
        status: 'additional',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>All patients primarily attributed to Practitioner 123</p>\n    </div>',
      },
      type: 'person',
      characteristic: [
        {
          code: {
            coding: [
              {
                system: 'http://example.org',
                code: 'attributed-to',
              },
            ],
            text: 'Patients primarily attributed to',
          },
          valueReference: {
            reference: 'Practitioner/123',
          },
          exclude: false,
        },
      ],
    };
    expect(() => GroupValidator(item)).not.toThrow();
  });

  it('should be able to create a new group and validate with wrong data', async () => {
    const item = {
      resourceType: 'Group',
      id: 'xcda1',
      wrongProperty: 'wrong', // wrong property
    };

    expect(() => GroupValidator(item as any)).toThrow(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for Group",
    );
  });

  it('should be able to create a new group with builder methods [new GroupBuilder()]', async () => {
    const item = builder
      .setActive(true)
      .setMembership('definitional')
      .setName('Name')
      .setType('animal')
      .addMember({
        entity: {
          reference: 'Patient/123',
        },
      })
      .build();

    expect(item).toBeDefined();

    expect(item).toEqual({
      resourceType: 'Group',
      membership: 'definitional',
      active: true,
      member: [
        {
          entity: {
            reference: 'Patient/123',
          },
        },
      ],
      name: 'Name',
      type: 'animal',
    });
  });
});
