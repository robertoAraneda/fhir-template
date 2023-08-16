import FHIRContext from '../../../src';
import { IBundleEntry } from '../../../src/r4/interfaces/backbones';
import { AdministrativeGenderEnum, BundleEntryRequestMethodEnum } from '../../../src/enums';
import { BundleEntryBuilder } from '../../../src/r4/models/backbones/BundleEntryBuilder';
import InvalidFieldException from '../../../src/globals/exceptions/InvalidFieldException';
import { BundleEntryValidator } from '../../../src/r4/models/backbones/BundleEntryValidator';

describe('BundleEntry FHIR R4', () => {
  let builder: BundleEntryBuilder;
  const { BundleEntry } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = BundleEntry.builder();
  });

  it('should be able to validate a new bundle_entry [new BundleEntry()]', async () => {
    const item = new BundleEntry({
      id: '123',
      link: [
        {
          url: 'http://example.com',
          relation: 'self',
        },
      ],
      fullUrl: 'http://example.com',
      resource: {
        resourceType: 'Patient',
        id: '123',
      },
      request: {
        method: BundleEntryRequestMethodEnum.GET,
        url: 'http://example.com',
        ifMatch: '123',
      },
    });

    expect(item).toBeDefined();
  });

  it('should be able to validate a new bundle_entry [IBundleEntry]', async () => {
    const item: IBundleEntry = {
      id: '123',
      link: [
        {
          url: 'http://example.com',
          relation: 'self',
        },
      ],
      fullUrl: 'http://example.com',
      resource: {
        resourceType: 'Patient',
        id: '123',
        name: [],
      },
      request: {
        method: BundleEntryRequestMethodEnum.GET,
        url: 'http://example.com',
        ifMatch: '123',
      },
    };

    expect(() => BundleEntryValidator(item)).not.toThrowError();
  });

  it('should be able to create a new bundle_entry using builder methods [new BundleEntryBuilder()]', async () => {
    const item = builder
      .setId('123')
      .setFullUrl('http://example.com')
      .addLink({
        url: 'http://example.com',
        relation: 'self',
      })
      .setResource('Patient', {
        resourceType: 'Patient',
        id: '123',
        gender: AdministrativeGenderEnum.MALE,
      })
      .build();

    expect(item).toBeDefined();

    expect(item).toEqual({
      fullUrl: 'http://example.com',
      id: '123',
      link: [
        {
          relation: 'self',
          url: 'http://example.com',
        },
      ],
      resource: {
        gender: 'male',
        id: '123',
        resourceType: 'Patient',
      },
    });
  });

  it('should be get errors validators if new bundle_entry has wrong data', async () => {
    const item = {
      id: '123',
      wrongProperty: 'wrongProperty',
    };

    expect(() => BundleEntryValidator(item)).toThrowError(InvalidFieldException);
    expect(() => BundleEntryValidator(item)).toThrowError(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for BundleEntry",
    );
  });
});
