import FHIRContext from '../../../src';
import { IPractitionerQualification } from '../../../src/r4/interfaces/backbones';
import { PractitionerQualificationBuilder } from '../../../src/r4/models/backbones/PractitionerQualificationBuilder';
import { PractitionerQualificationValidator } from '../../../src/r4/models/backbones/PractitionerQualificationValidator';

describe('PractitionerQualification FHIR R4', () => {
  let builder: PractitionerQualificationBuilder;
  const { PractitionerQualification } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = PractitionerQualification.builder();
  });

  it('should be able to validate a new practitioner_qualification [new PractitionerQualification()]', async () => {
    const item = new PractitionerQualification({
      id: '123',
      code: {
        coding: [
          {
            code: '123',
            system: 'system',
          },
        ],
      },
      issuer: {
        reference: 'Organization/123',
      },
    });

    expect(item).toBeDefined();
  });

  it('should be able to validate a new practitioner_qualification [IPractitionerQualification]', async () => {
    const item: IPractitionerQualification = {
      id: '123',
      code: {
        coding: [
          {
            code: '123',
            system: 'system',
          },
        ],
      },
      issuer: {
        reference: 'Organization/123',
      },
    };
    expect(() => PractitionerQualificationValidator(item)).not.toThrow();
  });

  it('should be able to create a new practitioner_qualification using builder methods [new PractitionerQualification()]', async () => {
    const item = builder
      .setId('123')
      .setCode({
        coding: [
          {
            code: '123',
            system: 'system',
          },
        ],
      })
      .setIssuer({
        reference: 'Organization/123',
      })
      .setPeriod({
        start: '2020-01-01',
        end: '2020-01-01',
      })
      .build();

    expect(item).toBeDefined();

    expect(item).toEqual({
      code: {
        coding: [
          {
            code: '123',
            system: 'system',
          },
        ],
      },
      id: '123',
      issuer: {
        reference: 'Organization/123',
      },
      period: {
        end: '2020-01-01',
        start: '2020-01-01',
      },
    });
  });

  it('should be get errors validators if new address has wrong data', async () => {
    const item = {
      id: '123',
      code: {
        coding: [
          {
            code: '123',
            system: 'system',
          },
        ],
      },
      wrongProperty: '123',
    };

    expect(() => PractitionerQualificationValidator(item)).toThrowError(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for PractitionerQualification",
    );
  });
});
