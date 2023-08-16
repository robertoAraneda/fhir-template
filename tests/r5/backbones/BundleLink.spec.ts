import FHIRContext from '../../../src';
import { IBundleLink } from '../../../src/r5/interfaces/backbones';
import { BundleLinkBuilder } from '../../../src/r5/models/backbones/BundleLinkBuilder';
import { BundleLinkValidator } from '../../../src/r5/models/backbones/BundleLinkValidator';
import BundleLinkRelationEnum from '../../../src/r5/enums/BundleLinkRelationEnum';

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
      relation: BundleLinkRelationEnum.COPYRIGHT,
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
      relation: 'self',
      url: 'http://example.com',
      wrongProperty: 'wrongProperty',
    };

    expect(() => BundleLinkValidator(item as any)).toThrowError(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for BundleLink",
    );
  });
});
