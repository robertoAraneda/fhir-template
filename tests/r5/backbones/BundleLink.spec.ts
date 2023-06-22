import FHIRContext from '../../../src';
import { IBundleLink } from '../../../src/r5/interfaces/backbones';
import { _validateBackbone } from '../../../src/r5/validators/BaseValidator';
import { BundleLinkBuilder } from '../../../src/r5/models/backbones/BundleLinkBuilder';

describe('BundleLink FHIR R5', () => {
  let builder: BundleLinkBuilder;
  const { BundleLink } = new FHIRContext().forR5();

  // create global
  beforeEach(() => {
    builder = BundleLink.builder();
  });

  it('should be able to validate a new bundle_link [new BundleLink()]', async () => {
    const item = new BundleLink({
      id: '123',
      url: 'http://example.com',
      relation: 'self',
    });

    const validate = await _validateBackbone(item, 'Bundle_Link');
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new bundle_link [IBundleLink]', async () => {
    const item: IBundleLink = {
      id: '123',
      url: 'http://example.com',
      relation: 'self',
    };

    const validate = await _validateBackbone(item, 'Bundle_Link');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new bundle_link using builder methods [BundleLink.builder()]', async () => {
    const item = builder.setId('123').setUrl('http://example.com').setRelation('self').build();

    const validate = await _validateBackbone(item, 'Bundle_Link');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
    expect(item).toEqual({
      id: '123',
      relation: 'self',
      url: 'http://example.com',
    });
  });

  it('should be get errors validators if new bundle_link has wrong data', async () => {
    const item = {
      id: '123',
      wrongProperty: 'wrongProperty',
    };

    const validate = await _validateBackbone(item, 'Bundle_Link');
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
