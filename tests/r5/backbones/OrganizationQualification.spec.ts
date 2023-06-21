import FHIRContext from '../../../src';
import { IOrganizationQualification } from '../../../src/r5/interfaces/backbones';
import OrganizationQualificationBuilder from '../../../src/r5/models/backbones/OrganizationQualificationBuilder';
import { _validateBackbone } from '../../../src/r5/validators/BaseValidator';

describe('OrganizationQualification FHIR R5', () => {
  const { OrganizationQualification } = new FHIRContext().forR5();
  let builder: OrganizationQualificationBuilder;

  // create global
  beforeEach(() => {
    builder = OrganizationQualification.builder();
  });

  it('should be able to create a new organization_qualification payload and validate with correct data [new OrganizationQualification()]', async () => {
    const item = new OrganizationQualification({
      id: '123',
      issuer: {
        reference: 'test',
      },
      code: {
        coding: [
          {
            system: 'http://hl7.org/fhir/organization-qualification',
            code: 'any',
          },
        ],
      },
    });

    const validate = await _validateBackbone(item, 'Organization_Qualification');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new organization_qualification payload and validate with correct data [IOrganizationQualification]', async () => {
    const item: IOrganizationQualification = {
      id: '123',
      issuer: {
        reference: 'test',
      },
      code: {
        coding: [
          {
            system: 'http://hl7.org/fhir/organization-qualification',
            code: 'any',
          },
        ],
      },
    };

    const validate = await _validateBackbone(item, 'Organization_Qualification');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new organization_qualification payload and validate with wrong data', async () => {
    const item = {
      id: '123',
      issuer: {
        reference: 'test',
      },
      period: {
        start: 'wrong date', // wrong date
        end: '2023-01-01',
      },
      code: {
        coding: [
          {
            system: 'http://hl7.org/fhir/organization-qualification',
            code: 'any',
          },
        ],
      },
      wrongProperty: 'test', // wrong property
    };

    const validate = await _validateBackbone(item, 'Organization_Qualification');

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
        instancePath: '/period/start',
        keyword: 'pattern',
        message: "The value '/period/start' does not match with datatype 'dateTime'",
        params: { value: '/period/start' },
        schemaPath: 'base.schema.json#/definitions/dateTime/pattern',
      },
    ]);
  });

  it('should be able to create a new organization_qualification payload using builder methods [new OrganizationQualificationBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builder
      .setId('123')
      .setCode({
        coding: [
          {
            system: 'http://hl7.org/fhir/organization-qualification',
            code: 'any',
          },
        ],
        text: 'test',
      })
      .setIssuer({
        reference: 'Organization/1',
      })
      .setCode({
        coding: [
          {
            system: 'http://hl7.org/fhir/organization-qualification',
            code: 'any',
          },
        ],
        text: 'test',
      })
      .addIdentifier({
        use: 'official',
        system: 'http://hl7.org/fhir/sid/us-npi',
        value: '123',
      })
      .build();

    const validate = await _validateBackbone(item, 'Organization_Qualification');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();

    expect(item).toBeDefined();
    expect(item).toEqual({
      code: {
        coding: [
          {
            code: 'any',
            system: 'http://hl7.org/fhir/organization-qualification',
          },
        ],
        text: 'test',
      },
      id: '123',
      identifier: [
        {
          system: 'http://hl7.org/fhir/sid/us-npi',
          use: 'official',
          value: '123',
        },
      ],
      issuer: {
        reference: 'Organization/1',
      },
    });
  });
});
