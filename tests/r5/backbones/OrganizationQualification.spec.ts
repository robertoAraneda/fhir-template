import FHIRContext from '../../../src';
import { IOrganizationQualification } from '../../../src/r5/interfaces/backbones';
import OrganizationQualificationBuilder from '../../../src/r5/models/backbones/OrganizationQualificationBuilder';
import { OrganizationQualificationValidator } from '../../../src/r5/models/backbones/OrganizationQualificationValidator';
import { Identifier } from '../../../src/r5/models/datatypes';

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
        reference: 'Organization/1',
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
    expect(item).toBeDefined();
  });

  it('should be able to create a new organization_qualification payload and validate with correct data [IOrganizationQualification]', async () => {
    const item: IOrganizationQualification = {
      id: '123',
      issuer: {
        reference: 'Organization/1',
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

    expect(() => OrganizationQualificationValidator(item)).not.toThrow();
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

    expect(() => OrganizationQualificationValidator(item)).toThrowError(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for OrganizationQualification",
    );
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
      .setMultipleIdentifier([
        new Identifier({
          use: 'old',
          system: 'http://hl7.org/fhir/sid/us-npi',
          value: '123',
        }),
      ])
      .build();

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
        {
          system: 'http://hl7.org/fhir/sid/us-npi',
          use: 'old',
          value: '123',
        },
      ],
      issuer: {
        reference: 'Organization/1',
      },
    });
  });
});
