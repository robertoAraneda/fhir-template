import FHIRContext from '../../../src';
import { IBundleEntryRequest } from '../../../src/r5/interfaces/backbones';
import BundleEntryRequestMethodEnum from '../../../src/r5/enums/BundleEntryRequestMethodEnum';
import { BundleEntryRequestBuilder } from '../../../src/r5/models/backbones/BundleEntryRequestBuilder';
import { BundleEntryRequestValidator } from '../../../src/r5/models/backbones/BundleEntryRequestValidator';

describe('BundleEntryRequest FHIR R5', () => {
  let builder: BundleEntryRequestBuilder;
  const { BundleEntryRequest } = new FHIRContext().forR5();

  // create global
  beforeEach(() => {
    builder = BundleEntryRequest.builder();
  });

  it('should be able to validate a new bundle_entry_request [new BundleEntryRequest()]', async () => {
    const item = new BundleEntryRequest({
      id: '123',
      method: BundleEntryRequestMethodEnum.GET,
      url: 'http://example.com',
      ifMatch: '123',
    });

    expect(item).toBeDefined();
  });

  it('should be able to validate a new bundle_entry_request [IBundleEntryRequest]', async () => {
    const item: IBundleEntryRequest = {
      id: '123',
      method: BundleEntryRequestMethodEnum.GET,
      url: 'http://example.com',
      ifMatch: '123',
    };

    expect(() => BundleEntryRequestValidator(item)).not.toThrow();
  });

  it('should be able to create a new bundle_entry_request using builder methods [new BundleEntryRequestBuilder()]', async () => {
    const item = builder
      .setId('123')
      .setUrl('http://example.com')
      .setMethod(BundleEntryRequestMethodEnum.GET)
      .setIfMatch('123')
      .build();

    expect(item).toBeDefined();

    expect(item).toEqual({
      id: '123',
      ifMatch: '123',
      method: 'GET',
      url: 'http://example.com',
    });
  });

  it('should be get errors validators if new bundle_entry_request has wrong data', async () => {
    const item = {
      id: '123',
      method: BundleEntryRequestMethodEnum.GET,
      url: 'http://example.com',
      wrongProperty: 'wrongProperty',
    };

    expect(() => BundleEntryRequestValidator(item as any)).toThrowError(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for BundleEntryRequest",
    );
  });
});
