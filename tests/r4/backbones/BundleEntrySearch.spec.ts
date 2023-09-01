import FHIRContext from '../../../src';
import { IBundleEntrySearch } from '../../../src/r4/interfaces/backbones';
import { BundleEntrySearchModeEnum } from '../../../src/r4/enums';
import { BundleEntrySearchBuilder } from '../../../src/r4/models/backbones/BundleEntrySearchBuilder';

import { BundleEntrySearchValidator } from '../../../src/r4/models/backbones/BundleEntrySearchValidator';
import InvalidFieldException from '../../../src/globals/exceptions/InvalidFieldException';

describe('BundleEntrySearch FHIR R4', () => {
  let builder: BundleEntrySearchBuilder;
  const { BundleEntrySearch } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = BundleEntrySearch.builder();
  });

  it('should be able to validate a new bundle_entry_search [new BundleEntrySearch()]', async () => {
    const item = new BundleEntrySearch({
      id: '123',
      mode: 'match',
      score: 0.5,
    });

    expect(item).toBeDefined();
  });

  it('should be able to validate a new bundle_entry_search [IBundleEntrySearch]', async () => {
    const item: IBundleEntrySearch = {
      id: '123',
      mode: 'match',
      score: 0.5,
    };

    expect(() => BundleEntrySearchValidator(item)).not.toThrow();
  });

  it('should be able to create a new bundle_entry_search using builder methods [new BundleEntrySearchBuilder()]', async () => {
    const item = builder.setId('123').setMode(BundleEntrySearchModeEnum.MATCH).setScore(0.5).build();

    expect(item).toBeDefined();
    expect(item).toEqual({
      id: '123',
      mode: 'match',
      score: 0.5,
    });
  });

  it('should be get errors validators if new bundle_entry_search has wrong data', async () => {
    const item = {
      id: '123',
      wrongProperty: 'wrongProperty',
    };

    expect(() => BundleEntrySearchValidator(item)).toThrowError(InvalidFieldException);
    expect(() => BundleEntrySearchValidator(item)).toThrowError(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for BundleEntrySearch",
    );
  });
});
