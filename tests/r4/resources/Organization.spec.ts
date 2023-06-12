import FHIRContext from '../../../src';
import { Organization } from '../../../src/r4/models/resources';
import { IOrganization } from '../../../src/r4/interfaces/resources';
import { OrganizationBuilder } from '../../../src/r4/builders/resources';

describe('Organization Resource FHIR R4', () => {
  let builder: OrganizationBuilder;
  let builderFromFunction: OrganizationBuilder;
  const context = new FHIRContext();
  const { Validator, Builder, createResource } = context.forR4();

  // create global
  beforeEach(() => {
    builder = new OrganizationBuilder();
    builderFromFunction = Builder.resources.Organization();
  });

  it('should be able to create a new organization and validate with correct data [new Organization() FHIR R4]', async () => {
    const resource = new Organization({
      resourceType: 'Organization',
      id: 'hl7',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      Health Level Seven International\n      <br/>\n\t\t\t\t3300 Washtenaw Avenue, Suite 227\n      <br/>\n\t\t\t\tAnn Arbor, MI 48104\n      <br/>\n\t\t\t\tUSA\n      <br/>\n\t\t\t\t(+1) 734-677-7777 (phone)\n      <br/>\n\t\t\t\t(+1) 734-677-6622 (fax)\n      <br/>\n\t\t\t\tE-mail:  \n      <a href="mailto:hq@HL7.org">hq@HL7.org</a>\n    \n    </div>',
      },
      name: 'Health Level Seven International',
      alias: ['HL7 International'],
      telecom: [
        {
          system: 'phone',
          value: '(+1) 734-677-7777',
        },
        {
          system: 'fax',
          value: '(+1) 734-677-6622',
        },
        {
          system: 'email',
          value: 'hq@HL7.org',
        },
      ],
      address: [
        {
          line: ['3300 Washtenaw Avenue, Suite 227'],
          city: 'Ann Arbor',
          state: 'MI',
          postalCode: '48104',
          country: 'USA',
        },
      ],
      endpoint: [
        {
          reference: 'Endpoint/example',
        },
      ],
    });

    const validate = await Validator.resources.Organization(resource);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new organization and validate with correct data [IOrganization]', async () => {
    const resource: IOrganization = {
      resourceType: 'Organization',
      id: '1',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <p>Gastroenterology @ Acme Hospital. ph: +1 555 234 3523, email: \n        <a href="mailto:gastro@acme.org">gastro@acme.org</a>\n      </p>\n    \n    </div>',
      },
      identifier: [
        {
          system: 'http://www.acme.org.au/units',
          value: 'Gastro',
        },
      ],
      name: 'Gastroenterology',
      telecom: [
        {
          system: 'phone',
          value: '+1 555 234 3523',
          use: 'mobile',
        },
        {
          system: 'email',
          value: 'gastro@acme.org',
          use: 'work',
        },
      ],
    };
    const validate = await Validator.resources.Organization(resource);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new organization and validate with correct data [createResource]', async () => {
    const resource = createResource('Organization', {
      resourceType: 'Organization',
      id: 'f001',
      text: {
        status: 'generated',
        div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f001</p><p><b>identifier</b>: 91654 (OFFICIAL), 17-0112278 (USUAL)</p><p><b>type</b>: University Medical Hospital <span>(Details : {urn:oid:2.16.840.1.113883.2.4.15.1060 code 'V6' = 'V6', given as 'University Medical Hospital'}; {http://terminology.hl7.org/CodeSystem/organization-type code 'prov' = 'Healthcare Provider', given as 'Healthcare Provider'})</span></p><p><b>name</b>: Burgers University Medical Center</p><p><b>telecom</b>: ph: 022-655 2300(WORK)</p><p><b>address</b>: </p><ul><li>Galapagosweg 91 Den Burg 9105 PZ NLD (WORK)</li><li>PO Box 2311 Den Burg 9100 AA NLD (WORK)</li></ul><blockquote><p><b>contact</b></p><p><b>purpose</b>: Press <span>(Details : {http://terminology.hl7.org/CodeSystem/contactentity-type code 'PRESS' = 'Press)</span></p><p><b>telecom</b>: ph: 022-655 2334</p></blockquote><blockquote><p><b>contact</b></p><p><b>purpose</b>: Patient <span>(Details : {http://terminology.hl7.org/CodeSystem/contactentity-type code 'PATINF' = 'Patient)</span></p><p><b>telecom</b>: ph: 022-655 2335</p></blockquote></div>",
      },
      identifier: [
        {
          use: 'official',
          system: 'urn:oid:2.16.528.1',
          value: '91654',
        },
        {
          use: 'usual',
          system: 'urn:oid:2.16.840.1.113883.2.4.6.1',
          value: '17-0112278',
        },
      ],
      type: [
        {
          coding: [
            {
              system: 'urn:oid:2.16.840.1.113883.2.4.15.1060',
              code: 'V6',
              display: 'University Medical Hospital',
            },
            {
              system: 'http://terminology.hl7.org/CodeSystem/organization-type',
              code: 'prov',
              display: 'Healthcare Provider',
            },
          ],
        },
      ],
      name: 'Burgers University Medical Center',
      telecom: [
        {
          system: 'phone',
          value: '022-655 2300',
          use: 'work',
        },
      ],
      address: [
        {
          use: 'work',
          line: ['Galapagosweg 91'],
          city: 'Den Burg',
          postalCode: '9105 PZ',
          country: 'NLD',
        },
        {
          use: 'work',
          line: ['PO Box 2311'],
          city: 'Den Burg',
          postalCode: '9100 AA',
          country: 'NLD',
        },
      ],
      contact: [
        {
          purpose: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/contactentity-type',
                code: 'PRESS',
              },
            ],
          },
          telecom: [
            {
              system: 'phone',
              value: '022-655 2334',
            },
          ],
        },
        {
          purpose: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/contactentity-type',
                code: 'PATINF',
              },
            ],
          },
          telecom: [
            {
              system: 'phone',
              value: '022-655 2335',
            },
          ],
        },
      ],
    });

    const validate = await Validator.resources.Organization(resource);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new organization and validate with wrong data [Example Organization/mmanu]', async () => {
    const resource = {
      wrongProperty: 'wrong', // wrong property
      resourceType: 'Organization',
      id: 'mmanu',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n<p>Acme Corporation, Proud member of the pharma industry</p>\n</div>',
      },
      active: 'true', // wrong type
      name: 'Acme Corporation',
      contact: [
        {
          address: {
            country: 'Swizterland',
          },
        },
      ],
    };
    const validate = await Validator.resources.Organization(resource);

    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors).toHaveLength(2);
    expect(validate.errors).toEqual([
      {
        instancePath: '',
        keyword: 'additionalProperties',
        message: 'must NOT have additional properties',
        params: { additionalProperty: 'wrongProperty' },
        schemaPath: '#/additionalProperties',
      },
      {
        instancePath: '/active',
        keyword: 'type',
        message: 'must be boolean',
        params: { type: 'boolean' },
        schemaPath: 'r4base.schema.json#/definitions/boolean/type',
      },
    ]);
  });

  it('should be able to create a new organization using builder methods [Builder.resources.OrganizationBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const resource = builderFromFunction
      .setName('test')
      .setActive(true)
      .setId('123')
      .addParamExtension('active', {
        extension: [
          {
            url: 'active',
            valueBoolean: true,
          },
        ],
      })
      .addParamExtension('alias', [
        {
          extension: [
            {
              url: 'alias',
              valueCode: 'test',
            },
          ],
        },
      ])
      .addContact({
        name: {
          use: 'official',
          family: 'test',
          given: ['test'],
        },
      })
      .addType({
        text: 'test',
        coding: [
          {
            code: '123',
            system: 'http://hl7.org/fhir/sid/us-npi',
          },
        ],
      })
      .addAlias('test')
      .addAlias('test2')
      .addEndpoint({
        reference: 'test',
      })
      .build();

    expect(resource).toBeDefined();
    expect(resource).toEqual({
      _active: {
        extension: [
          {
            url: 'active',
            valueBoolean: true,
          },
        ],
      },
      _alias: [
        {
          extension: [
            {
              url: 'alias',
              valueCode: 'test',
            },
          ],
        },
      ],
      active: true,
      alias: ['test', 'test2'],
      contact: [
        {
          name: {
            family: 'test',
            given: ['test'],
            use: 'official',
          },
        },
      ],
      endpoint: [
        {
          reference: 'test',
        },
      ],
      id: '123',
      name: 'test',
      resourceType: 'Organization',
      type: [
        {
          coding: [
            {
              code: '123',
              system: 'http://hl7.org/fhir/sid/us-npi',
            },
          ],
          text: 'test',
        },
      ],
    });
  });

  it('should be able to create a new organization using builder methods [new OrganizationBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const resource = builder
      .setName('test')
      .setActive(true)
      .setId('123')
      .addParamExtension('active', {
        extension: [
          {
            url: 'active',
            valueBoolean: true,
          },
        ],
      })
      .addParamExtension('alias', [
        {
          extension: [
            {
              url: 'alias',
              valueCode: 'test',
            },
          ],
        },
      ])
      .addContact({
        name: {
          use: 'official',
          family: 'test',
          given: ['test'],
        },
      })
      .addType({
        text: 'test',
        coding: [
          {
            code: '123',
            system: 'http://hl7.org/fhir/sid/us-npi',
          },
        ],
      })
      .addAlias('test')
      .addAlias('test2')
      .addEndpoint({
        reference: 'test',
      })
      .build();

    expect(resource).toBeDefined();
    expect(resource).toEqual({
      _active: {
        extension: [
          {
            url: 'active',
            valueBoolean: true,
          },
        ],
      },
      _alias: [
        {
          extension: [
            {
              url: 'alias',
              valueCode: 'test',
            },
          ],
        },
      ],
      active: true,
      alias: ['test', 'test2'],
      contact: [
        {
          name: {
            family: 'test',
            given: ['test'],
            use: 'official',
          },
        },
      ],
      endpoint: [
        {
          reference: 'test',
        },
      ],
      id: '123',
      name: 'test',
      resourceType: 'Organization',
      type: [
        {
          coding: [
            {
              code: '123',
              system: 'http://hl7.org/fhir/sid/us-npi',
            },
          ],
          text: 'test',
        },
      ],
    });
  });
});
