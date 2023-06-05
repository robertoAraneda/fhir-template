import { ReferenceBuilder } from '../../src/r5/builders/datatypes';
import { IReference } from '../../src/r5/interfaces/base';
import { IOrganization } from '../../src/r5/interfaces/resources';
import { IValidatorContext } from '../../src/r5';
import FHIRContext from '../../src';

describe('Reference', () => {
  let validator: IValidatorContext;
  let builder: ReferenceBuilder;

  beforeAll(() => {
    const context = new FHIRContext();
    validator = context.forR5().validators;
  });

  // create global
  beforeEach(() => {
    builder = new ReferenceBuilder();
  });

  it('should be able to create a new reference and validate with correct data', async () => {
    const dataType: IReference = {
      type: 'official',
      reference: 'Organization/123',
      display: 'Organization display',
    };

    const validate = await validator.dataTypes.Reference(dataType);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new reference and validate with wrong data', async () => {
    const dataType = {
      type: 'official',
      reference: 'Organization/123',
      display: 'Organization display',
      test: 'test', // wrong property
    };

    const validate = await validator.dataTypes.Reference(dataType);

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

  it('should be able to create a new address using builder methods', async () => {
    // build() is a method that returns the object that was built
    const dataType = builder
      .setType('official')
      .setReference('Organization/123')
      .setDisplay('Organization display')
      .build();

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({ type: 'official', display: 'Organization display', reference: 'Organization/123' });
  });

  it('should return errors if identifiers has wrong data', async () => {
    const dataType = builder
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

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
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

    const validate = await validator.dataTypes.Reference(dataType);
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
    const dataType = new ReferenceBuilder().setReference(organization).setDisplay('Organization display').build();

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
      reference: 'Organization/123',
      display: 'Organization display',
    });
  });
});
