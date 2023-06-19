import { IGroup } from '../../../src/r4/interfaces/resources';
import FHIRContext from '../../../src';

import { IGroupBuilder } from '../../../src/r4/models/resources/GroupBuilder';

describe('Group FHIR R4', () => {
  let builder: IGroupBuilder;

  const context = new FHIRContext();
  const { Group, Validator } = context.forR4();

  // create global
  beforeEach(() => {
    builder = Group.builder();
  });

  it('should be able to create a new group and validate with correct data [IGroup]', async () => {
    const item: IGroup = {
      resourceType: 'Group',
      id: '101',
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
      actual: true,
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

    const validate = await Validator.Group(item);

    console.log(JSON.stringify(validate, null, 2));
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new group and validate with correct data [new Group()]', async () => {
    const item = new Group({
      resourceType: 'Group',
      id: '102',
      text: {
        status: 'additional',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>Selected Patients</p>\n      <ul>\n        <li>Patient Donald DUCK @ Acme Healthcare, Inc. MR = 654321</li>\n        <li>Patient Donald D DUCK @ Acme Healthcare, Inc. MR = 123456</li>\n        <li>Patient Simon Notsowell @ Acme Healthcare, Inc. MR = 123457, DECEASED</li>\n        <li>Patient Sandy Notsowell @ Acme Healthcare, Inc. MR = 123458, DECEASED</li>\n      </ul>\n    </div>',
      },
      type: 'person',
      actual: true,
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

    const validate = await Validator.Group(item);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new group and validate with correct data [Group-example-patientlist.json]', async () => {
    const item: IGroup = {
      resourceType: 'Group',
      id: 'example-patientlist',
      text: {
        status: 'additional',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>All patients primarily attributed to Practitioner 123</p>\n    </div>',
      },
      type: 'person',
      actual: true,
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

    const validate = await Validator.Group(item);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new group and validate with wrong data', async () => {
    const item = {
      resourceType: 'Group',
      id: 'xcda1',
      wrongProperty: 'wrong', // wrong property
    };
    const validate = await Validator.Group(item);

    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors).toEqual([
      {
        instancePath: '',
        schemaPath: '#/additionalProperties',
        keyword: 'additionalProperties',
        params: { additionalProperty: 'wrongProperty' },
        message: 'must NOT have additional properties',
      },
    ]);
  });

  it('should be able to create a new group with builder methods [new GroupBuilder()]', async () => {
    const item = builder
      .setActive(true)
      .setName('Name')
      .setType('animal')
      .addMember({
        entity: {
          reference: 'Patient/123',
        },
      })
      .build();

    const validate = await Validator.Group(item);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();

    expect(item).toEqual({
      resourceType: 'Group',
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
