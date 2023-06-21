import { IOrganization } from '../../../src/r5/interfaces/resources';
import FHIRContext from '../../../src';
import { IReference } from '../../../src/r5/interfaces/datatypes';
import ReferenceBuilder from '../../../src/r5/models/datatypes/ReferenceBuilder';
import { _validateDataType } from '../../../src/r5/validators/BaseValidator';

describe('Reference FHIR R5', () => {
  let builder: ReferenceBuilder;
  const { Reference } = new FHIRContext().forR5();

  // create global
  beforeEach(() => {
    builder = Reference.builder();
  });

  it('should be able to create a new reference and validate with correct data [new Reference()]', async () => {
    const item = new Reference({
      type: 'official',
      reference: 'Organization/123',
      display: 'Organization display',
    });

    const validate = await _validateDataType(item, 'Reference');
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new reference and validate with correct data [IReference]', async () => {
    const item: IReference = {
      type: 'official',
      reference: 'Organization/123',
      display: 'Organization display',
    };

    const validate = await _validateDataType(item, 'Reference');
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new reference and validate with wrong data', async () => {
    const item = {
      type: 'official',
      reference: 'Organization/123',
      display: 'Organization display',
      test: 'test', // wrong property
    };

    const validate = await _validateDataType(item, 'Reference');

    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors).toHaveLength(1);
    expect(validate.errors).toEqual([
      {
        instancePath: '',
        schemaPath: '#/additionalProperties',
        keyword: 'additionalProperties',
        params: { additionalProperty: 'test' },
        message: 'must NOT have additional properties',
      },
    ]);
  });

  it('should be able to create a new reference using builder methods [new ReferenceBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builder
      .setType('official')
      .setReference('Organization/123')
      .setDisplay('Organization display')
      .build();

    expect(item).toBeDefined();
    expect(item).toEqual({ type: 'official', display: 'Organization display', reference: 'Organization/123' });

    const validate = await _validateDataType(item, 'Reference');
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should return errors if reference has wrong data', async () => {
    const item = builder
      .setType('official')
      .setReference('Organization/123')
      .setIdentifier({
        period: {
          start: '2020-01-01 HH:MM:SS',
          end: '2020-01-02',
        },
      })
      .setDisplay('Organization display')
      .build();

    expect(item).toBeDefined();
    expect(item).toEqual({
      type: 'official',
      display: 'Organization display',
      reference: 'Organization/123',
      identifier: {
        period: {
          end: '2020-01-02',
          start: '2020-01-01 HH:MM:SS',
        },
      },
    });

    const validate = await _validateDataType(item, 'Reference');

    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors).toHaveLength(1);
    if (validate.errors) {
      expect(validate.errors).toEqual([
        {
          keyword: 'pattern',
          instancePath: '/identifier/period/start',
          message: "The value '/identifier/period/start' does not match with datatype 'dateTime'",
          params: { value: '/identifier/period/start' },
          schemaPath: 'base.schema.json#/definitions/dateTime/pattern',
        },
      ]);
    }
  });

  it('should be able to create a new reference as resource with builder methods', async () => {
    const organization: IOrganization = {
      resourceType: 'Organization',
      id: '123',
    };
    const item = new ReferenceBuilder().setReference(organization).setDisplay('Organization display').build();

    expect(item).toBeDefined();
    expect(item).toEqual({
      reference: 'Organization/123',
      display: 'Organization display',
    });

    const validate = await _validateDataType(item, 'Reference');
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });
});
