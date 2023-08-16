import FHIRContext from '../../../src';
import { IOrganization } from '../../../src/r4/interfaces/resources';

import { OrganizationBuilder } from '../../../src/r4/models/resources/OrganizationBuilder';
import { OrganizationValidator } from '../../../src/r4/models/resources/OrganizationValidator';

describe('Organization Resource FHIR R4', () => {
  let builder: OrganizationBuilder;
  const context = new FHIRContext();
  const { Organization, Validator } = context.forR4();

  // create global
  beforeEach(() => {
    builder = Organization.builder();
  });

  it('should be able to create a new organization and validate with correct data [new Organization() FHIR R4]', async () => {
    const item = new Organization({
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

    expect(item).toBeDefined();
  });

  it('should be able to create a new organization and validate with correct data [IOrganization]', async () => {
    const item: IOrganization = {
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
    expect(() => OrganizationValidator(item)).not.toThrow();
  });

  it('should be able to validate a new organization and validate with wrong data [Example Organization/mmanu]', async () => {
    const item = {
      wrongProperty: 'wrong', // wrong property
      resourceType: 'Organization',
      id: 'mmanu',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n<p>Acme Corporation, Proud member of the pharma industry</p>\n</div>',
      },
      active: true,
      name: 'Acme Corporation',
      contact: [
        {
          address: {
            country: 'Swizterland',
          },
        },
      ],
    };
    expect(() => OrganizationValidator(item as IOrganization)).toThrow(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for Organization",
    );
  });

  it('should be able to create a new organization using builder methods [new OrganizationBuilder()]', async () => {
    const item = builder
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

    expect(item).toBeDefined();
    expect(item).toEqual({
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
