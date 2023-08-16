import { IPractitionerQualification } from '../../../src/r5/interfaces/backbones';
import FHIRContext from '../../../src';
import PractitionerQualificationBuilder from '../../../src/r5/models/backbones/PractitionerQualificationBuilder';
import { PractitionerQualificationValidator } from '../../../src/r5/models/backbones/PractitionerQualificationValidator';

describe('PractitionerQualification FHIR R5', () => {
  const { PractitionerQualification } = new FHIRContext().forR5();
  let builder: PractitionerQualificationBuilder;

  // create global
  beforeEach(() => {
    builder = PractitionerQualification.builder();
  });

  it('should be able to create a new practitioner_qualification payload and validate with correct data [IPractitionerQualification]', async () => {
    const item: IPractitionerQualification = {
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

    expect(() => PractitionerQualificationValidator(item)).not.toThrow();
  });

  it('should be able to create a new practitioner_qualification payload and validate with correct data [new PractitionerQualification()]', async () => {
    const item = new PractitionerQualification({
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

  it('should be able to validate a new practitioner_qualification payload and validate with wrong data', async () => {
    const item = {
      id: '123',
      issuer: {
        reference: 'Organization/1',
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

    expect(() => PractitionerQualificationValidator(item as any)).toThrow(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for PractitionerQualification",
    );
  });

  it('should be able to create a new practitioner_qualification payload using builder methods [new PractitionerQualificationBuilder()]', async () => {
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
