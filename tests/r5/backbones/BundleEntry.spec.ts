import FHIRContext from '../../../src';
import { IBundleEntry } from '../../../src/r5/interfaces/backbones';
import { AdministrativeGenderEnum, BundleEntryRequestMethodEnum } from '../../../src/r5/enums';
import { BundleEntryBuilder } from '../../../src/r5/models/backbones/BundleEntryBuilder';
import { ILocation, IPatient } from '../../../src/r5/interfaces/resources';
import { BundleEntryValidator } from '../../../src/r5/models/backbones/BundleEntryValidator';

describe('BundleEntry FHIR R5', () => {
  let builder: BundleEntryBuilder;
  const { BundleEntry, Patient } = new FHIRContext().forR5();

  // create global
  beforeEach(() => {
    builder = BundleEntry.builder();
  });

  it('should be able to validate a new bundle_entry [new BundleEntry()]', () => {
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
        resourceType: 'Location',
        name: 'test',
      } as ILocation,
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
      } as IPatient,
      request: {
        method: BundleEntryRequestMethodEnum.GET,
        url: 'http://example.com',
        ifMatch: '123',
      },
    };
    expect(() => BundleEntryValidator(item)).not.toThrow();
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

    expect(() => BundleEntryValidator(item)).toThrow(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for BundleEntry",
    );
  });
});
