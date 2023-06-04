import { OrganizationQualificationBuilder } from '../../src/r5/builders/backbones/OrganizationQualificationBuilder';
import { OrganizationQualification } from '../../src/r5/interfaces/backbones';
import BackboneElementBuilder from '../../src/r5/BackboneElementBuilder';
import BackboneElementValidator from '../../src/r5/BackboneElementValidator';

describe('OrganizationQualification', () => {
  let builder: OrganizationQualificationBuilder;

  // create global
  beforeEach(() => {
    builder = BackboneElementBuilder.OrganizationQualification()
      .setId('123')
      .setCode({
        coding: [
          {
            system: 'http://hl7.org/fhir/organization-qualification',
            code: 'any',
          },
        ],
        text: 'test',
      });
  });

  it('should be able to create a new organization_qualification payload and validate with correct data', async () => {
    const dataType: OrganizationQualification = {
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

    const validate = await BackboneElementValidator.OrganizationQualification(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new organization_qualification payload and validate with wrong data', async () => {
    const dataType = {
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

    const validate = await BackboneElementValidator.OrganizationQualification(dataType);

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

  it('should be able to create a new organization_qualification payload using builder methods', async () => {
    // build() is a method that returns the object that was built
    const dataType = builder
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

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
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
