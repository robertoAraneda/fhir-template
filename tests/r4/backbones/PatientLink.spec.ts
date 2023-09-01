import FHIRContext from '../../../src';
import { IPatientLink } from '../../../src/r4/interfaces/backbones';
import { LinkTypeEnum } from '../../../src/r4/enums';
import { PatientLinkBuilder } from '../../../src/r4/models/backbones/PatientLinkBuilder';

import { PatientLinkValidator } from '../../../src/r4/models/backbones/PatientLinkValidator';

describe('PatientLink FHIR R4', () => {
  let builder: PatientLinkBuilder;

  const { PatientLink } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = PatientLink.builder();
  });

  it('should be able to validate a new patient_link [new PatientLink()]', async () => {
    const item = new PatientLink({
      id: '123',
      other: {
        reference: 'Patient/123',
        type: 'Patient',
      },
      type: 'replaced-by',
    });

    expect(item).toBeDefined();
  });

  it('should be able to validate a new patient_link [IPatientLink]', async () => {
    const item: IPatientLink = {
      id: '123',
      other: {
        reference: 'Patient/123',
        type: 'Patient',
      },
      type: 'replaced-by',
    };

    expect(() => PatientLinkValidator(item)).not.toThrow();
  });

  it('should be able to create a new patient_link using builder methods [new PatientLink()]', async () => {
    const item = builder
      .setId('123')
      .setType(LinkTypeEnum.REPLACES)
      .setOther({
        reference: 'Patient/123',
      })
      .addParamExtension('type', {
        extension: [
          {
            url: 'preferred',
            valueDate: '2020-01-01',
          },
        ],
      })
      .build();

    expect(item).toBeDefined();

    expect(item).toEqual({
      _type: {
        extension: [
          {
            url: 'preferred',
            valueDate: '2020-01-01',
          },
        ],
      },
      id: '123',
      other: {
        reference: 'Patient/123',
      },
      type: 'replaces',
    });
  });

  it('should be get errors validators if new address has wrong data', async () => {
    const item = {
      id: '123',
      other: {
        reference: 'Patient/123',
      },
      type: 'replaced-by',
      wrongProperty: 'wrongProperty',
    };

    expect(() => PatientLinkValidator(item as IPatientLink)).toThrowError(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for PatientLink",
    );
  });
});
