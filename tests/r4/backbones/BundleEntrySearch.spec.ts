import FHIRContext from '../../../src';
import { IBundleEntrySearch } from '../../../src/r4/interfaces/backbones';
import { BundleEntrySearchModeEnum } from '../../../src/r4/enums';
import { _validateBackbone } from '../../../src/r4/validators/BaseValidator';
import { IBundleEntrySearchBuilder } from '../../../src/r4/models/backbones/BundleEntrySearchBuilder';

describe('BundleEntrySearch FHIR R4', () => {
  let builder: IBundleEntrySearchBuilder;
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

    const validate = await _validateBackbone(item, 'Bundle_Search');
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new bundle_entry_search [IBundleEntrySearch]', async () => {
    const item: IBundleEntrySearch = {
      id: '123',
      mode: 'match',
      score: 0.5,
    };

    const validate = await _validateBackbone(item, 'Bundle_Search');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new bundle_entry_search using builder methods [new BundleEntrySearchBuilder()]', async () => {
    const item = builder.setId('123').setMode(BundleEntrySearchModeEnum.MATCH).setScore(0.5).build();

    const validate = await _validateBackbone(item, 'Bundle_Search');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();

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

    const validate = await _validateBackbone(item, 'Bundle_Search');
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
