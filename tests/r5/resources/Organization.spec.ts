import FHIRContext from '../../../src';
import { IOrganization } from '../../../src/r5/interfaces/resources';
import OrganizationBuilder from '../../../src/r5/models/resources/OrganizationBuilder';

describe('Organization FHIR R5', () => {
  let builder: OrganizationBuilder;
  const context = new FHIRContext();
  const { Validator, Organization } = context.forR5();

  // create global
  beforeEach(() => {
    builder = Organization.builder();
  });

  it('should be able to create a new organization and validate with correct data [Example Organization/1]', async () => {
    const resource = new Organization({
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
    });

    const validate = await Validator.Organization(resource);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new organization and validate with correct data [Example Organization/1]', async () => {
    const resource: IOrganization = {
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

    const validate = await Validator.Organization(resource);
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

    const validate = await Validator.Organization(resource);

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
    const resource = builder
      .setName('test')
      .setActive(true)
      .setId('123')
      .setDescription('test')
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
    const validate = await Validator.Organization(resource);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });
});
