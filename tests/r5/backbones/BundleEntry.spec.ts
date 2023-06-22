import FHIRContext from '../../../src';
import { IBundleEntry } from '../../../src/r5/interfaces/backbones';
import { AdministrativeGenderEnum, BundleEntryRequestMethodEnum } from '../../../src/r5/enums';
import { _validateBackbone } from '../../../src/r5/validators/BaseValidator';
import { BundleEntryBuilder } from '../../../src/r5/models/backbones/BundleEntryBuilder';
import { ILocation, IPatient } from '../../../src/r5/interfaces/resources';

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

    const validate = _validateBackbone(item, 'Bundle_Entry');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
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
    const validate = await _validateBackbone(item, 'Bundle_Entry');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
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

    const validate = await _validateBackbone(item, 'Bundle_Entry');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();

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

    const validate = await _validateBackbone(item, 'Bundle_Entry');
    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors?.length).toBe(1);
    expect(validate.errors).toEqual([
      {
        instancePath: '',
        keyword: 'additionalProperties',
        message: 'must NOT have additional properties',
        params: {
          additionalProperty: 'wrongProperty',
        },
        schemaPath: '#/additionalProperties',
      },
    ]);
  });
});
