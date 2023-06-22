import FHIRContext from '../../../src';
import { IBundleEntryResponse } from '../../../src/r5/interfaces/backbones';
import { _validateBackbone } from '../../../src/r5/validators/BaseValidator';
import { BundleEntryResponseBuilder } from '../../../src/r5/models/backbones/BundleEntryResponseBuilder';

describe('BundleEntryResponse FHIR R5', () => {
  let builder: BundleEntryResponseBuilder;
  const { BundleEntryResponse } = new FHIRContext().forR5();

  // create global
  beforeEach(() => {
    builder = BundleEntryResponse.builder();
  });

  it('should be able to validate a new bundle_entry_response [new BundleEntryResponse()]', async () => {
    const item = new BundleEntryResponse({
      id: '123',
      status: '200',
      location: 'http://example.com',
      etag: '123',
    });

    const validate = await _validateBackbone(item, 'Bundle_Response');
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new bundle_entry_response [IBundleEntryResponse]', async () => {
    const item: IBundleEntryResponse = {
      id: '123',
      status: '200',
      location: 'http://example.com',
      etag: '123',
    };

    const validate = await _validateBackbone(item, 'Bundle_Response');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new bundle_entry_response using builder methods [new BundleEntryResponseBuilder()]', async () => {
    const item = builder.setId('123').setEtag('123').setLocation('http://example.com').setStatus('200').build();

    expect(item).toEqual({
      id: '123',
      etag: '123',
      location: 'http://example.com',
      status: '200',
    });
  });

  it('should be get errors validators if new bundle_entry_response has wrong data', async () => {
    const item = {
      id: '123',
      wrongProperty: 'wrongProperty',
    };

    const validate = await _validateBackbone(item, 'Bundle_Response');
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
