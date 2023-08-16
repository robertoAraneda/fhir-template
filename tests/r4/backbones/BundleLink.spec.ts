import FHIRContext from '../../../src';
import { IBundleLink } from '../../../src/r4/interfaces/backbones';
import { BundleLinkBuilder } from '../../../src/r4/models/backbones/BundleLinkBuilder';
import InvalidFieldException from '../../../src/globals/exceptions/InvalidFieldException';
import { BundleLinkValidator } from '../../../src/r4/models/backbones/BundleLinkValidator';

describe('BundleLink FHIR R4', () => {
  let builder: BundleLinkBuilder;
  const { BundleLink } = new FHIRContext().forR4();

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

    expect(item).toBeDefined();
  });

  it('should be able to validate a new bundle_link [IBundleLink]', async () => {
    const item: IBundleLink = {
      id: '123',
      url: 'http://example.com',
      relation: 'self',
    };

    expect(() => BundleLinkValidator(item)).not.toThrow();
  });

  it('should be able to create a new bundle_link using builder methods [BundleLink.builder()]', async () => {
    const item = builder.setId('123').setUrl('http://example.com').setRelation('self').build();

    expect(item).toBeDefined();
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

    expect(() => BundleLinkValidator(item)).toThrow(InvalidFieldException);
    expect(() => BundleLinkValidator(item)).toThrow(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for BundleLink",
    );
  });
});
