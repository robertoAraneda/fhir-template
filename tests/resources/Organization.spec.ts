import { OrganizationBuilder } from '../../src/r5/builders/resources/OrganizationBuilder';
import { Organization } from '../../src/r5/interfaces/resources/Organization';
import ResourceBuilder from '../../src/r5/ResourceBuilder';
import ResourceValidator from '../../src/r5/ResourceValidator';

describe('Organization', () => {
  let builder: OrganizationBuilder;

  // create global
  beforeEach(() => {
    builder = ResourceBuilder.Organization();
  });

  it('should be able to create a new organization and validate with correct data [Example Organization/1]', async () => {
    const dataType: Organization = {
      resourceType: 'Organization',
      id: '1',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\n<p>Gastroenterology @ Acme Hospital. ph: +1 555 234 3523, email: \n<a href="mailto:gastro@acme.org">gastro@acme.org</a>\n</p>\n\n</div>',
      },
      identifier: [
        {
          system: 'http://www.acme.org.au/units',
          value: 'Gastro',
        },
      ],
      name: 'Gastroenterology',
      contact: [
        {
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
        },
      ],
    };

    const validate = await ResourceValidator.Organization(dataType);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new organization and validate with correct data [Example Organization/f203]', async () => {
    const dataType: Organization = {
      meta: {},
      resourceType: 'Organization',
      id: 'f203',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Generated</div>',
      },
      identifier: [
        {
          use: 'official',
          system: 'http://www.zorgkaartnederland.nl/',
          value: 'Blijdorp MC',
        },
      ],
      active: true,
      type: [
        {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '405608006',
              display: 'Academic Medical Center',
            },
            {
              system: 'http://terminology.hl7.org/CodeSystem/organization-type',
              code: 'prov',
            },
          ],
        },
      ],
      name: 'Blijdorp Medisch Centrum (BUMC)',
      contact: [
        {
          telecom: [
            {
              system: 'phone',
              value: '+31107040704',
              use: 'work',
            },
          ],
          address: {
            use: 'work',
            line: ['apenrots 230'],
            city: 'Blijdorp',
            postalCode: '3056BE',
            country: 'NLD',
          },
        },
      ],
    };

    const validate = await ResourceValidator.Organization(dataType);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new organization and validate with wrong data [Example Organization/mmanu]', async () => {
    const dataType = {
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

    const validate = await ResourceValidator.Organization(dataType);

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
        schemaPath: 'base.schema.json#/definitions/boolean/type',
      },
    ]);
  });

  it('should be able to create a new organization using builder methods', async () => {
    // build() is a method that returns the object that was built
    const dataType = builder
      .setName('test')
      .setActive(true)
      .setId('123')
      .setDescription('test')
      .addOrganizationParamExtension('active', {
        extension: [
          {
            url: 'active',
            valueBoolean: true,
          },
        ],
      })
      .addOrganizationParamExtension('alias', [
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
        name: [
          {
            family: 'test',
          },
        ],
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

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
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
          name: [
            {
              family: 'test',
            },
          ],
        },
      ],
      description: 'test',
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
