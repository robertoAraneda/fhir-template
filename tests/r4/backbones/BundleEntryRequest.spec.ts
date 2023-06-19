import FHIRContext from '../../../src';
import { IBundleEntryRequest } from '../../../src/r4/interfaces/backbones';
import BundleEntryRequestMethodEnum from '../../../src/r4/enums/BundleEntryRequestMethodEnum';
import { _validateBackbone } from '../../../src/r4/validators/BaseValidator';
import { IBundleEntryRequestBuilder } from '../../../src/r4/models/backbones/BundleEntryRequestBuilder';
describe('BundleEntryRequest FHIR R4', () => {
  let builder: IBundleEntryRequestBuilder;
  const { BundleEntryRequest } = new FHIRContext().forR4();

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

    const validate = await _validateBackbone(item, 'Bundle_Request');
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new bundle_entry_request [IBundleEntryRequest]', async () => {
    const item: IBundleEntryRequest = {
      id: '123',
      method: BundleEntryRequestMethodEnum.GET,
      url: 'http://example.com',
      ifMatch: '123',
    };

    const validate = await _validateBackbone(item, 'Bundle_Request');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new bundle_entry_request using builder methods [new BundleEntryRequestBuilder()]', async () => {
    const item = builder
      .setId('123')
      .setUrl('http://example.com')
      .setMethod(BundleEntryRequestMethodEnum.GET)
      .setIfMatch('123')
      .build();

    const validate = await _validateBackbone(item, 'Bundle_Request');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();

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
      wrongProperty: 'wrongProperty',
    };

    const validate = await _validateBackbone(item, 'Bundle_Request');
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
