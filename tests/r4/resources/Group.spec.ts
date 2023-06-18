import { GroupBuilder } from '../../../src/r4/builders/resources';
import { IGroup } from '../../../src/r4/interfaces/resources';
import FHIRContext from '../../../src';
import { Group } from '../../../src/r4/models/resources';

describe('Group FHIR R4', () => {
  let builder: GroupBuilder;
  let builderFromFunction: GroupBuilder;
  const context = new FHIRContext();
  const { Validator, Builder, createResource } = context.forR4();

  // create global
  beforeEach(() => {
    builder = new GroupBuilder();
    builderFromFunction = Builder.resources.Group();
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

    const validate = await Validator.resources.Group(item);
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

    const validate = await Validator.resources.Group(item);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new group and validate with correct data [createResource]', async () => {
    const item = createResource('Group', {
      resourceType: 'Group',
      id: 'herd1',
      text: {
        status: 'generated',
        div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: herd1</p><p><b>identifier</b>: 20171120-1234</p><p><b>active</b>: true</p><p><b>type</b>: animal</p><p><b>actual</b>: true</p><p><b>code</b>: Porcine <span>(Details : {SNOMED CT code '388393002' = 'Genus Sus', given as 'Genus Sus (organism)'}; {https://www.aphis.usda.gov code 'POR' = 'POR', given as 'porcine'})</span></p><p><b>name</b>: Breeding herd</p><p><b>quantity</b>: 2500</p><h3>Characteristics</h3><table><tr><td>-</td><td><b>Code</b></td><td><b>Value[x]</b></td><td><b>Exclude</b></td></tr><tr><td>*</td><td>gender <span>(Details )</span></td><td>female <span>(Details )</span></td><td>false</td></tr></table></div>",
      },
      extension: [
        {
          url: 'http://example.org/fhir/StructureDefinition/owner',
          valueReference: {
            reference: 'RelatedPerson/peter',
            display: 'Peter Chalmers',
          },
        },
      ],
      identifier: [
        {
          system: 'https://vetmed.iastate.edu/vdl',
          value: '20171120-1234',
        },
      ],
      active: true,
      type: 'animal',
      actual: true,
      code: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '388393002',
            display: 'Genus Sus (organism)',
          },
          {
            system: 'https://www.aphis.usda.gov',
            code: 'POR',
            display: 'porcine',
          },
        ],
        text: 'Porcine',
      },
      name: 'Breeding herd',
      quantity: 2500,
      characteristic: [
        {
          code: {
            text: 'gender',
          },
          valueCodeableConcept: {
            text: 'female',
          },
          exclude: false,
        },
      ],
    });

    const validate = await Validator.resources.Group(item);

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

    const validate = await Validator.resources.Group(item);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new group and validate with wrong data', async () => {
    const item = {
      resourceType: 'Group',
      id: 'xcda1',
      wrongProperty: 'wrong', // wrong property
    };
    const validate = await Validator.resources.Group(item);

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
    const group = builder
      .setActive(true)
      .setName('Name')
      .setType('animal')
      .addMember({
        entity: {
          reference: 'Patient/123',
        },
      })
      .build();

    expect(group).toEqual({
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

  it('should be able to create a new group with builder methods [Builder.resources.Group()]', async () => {
    const group = builderFromFunction
      .setActive(true)
      .setName('Name')
      .setType('animal')
      .addMember({
        entity: {
          reference: 'Patient/123',
        },
      })
      .build();

    expect(group).toEqual({
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
