import { ReferenceBuilder } from '../../src/r5/builders/datatypes/ReferenceBuilder';
import { Reference } from '../../src/r5/interfaces/base/Reference';
import { Organization } from '../../src/r5/interfaces/resources/Organization';
import ElementBuilder from '../../src/r5/ElementBuilder';
import ElementValidator from '../../src/r5/ElementValidator';

describe('Reference', () => {
  let builder: ReferenceBuilder;

  // create global identifierBuilder
  beforeEach(() => {
    builder = ElementBuilder.Reference().setType('official').setDisplay('2020-01-01');
  });

  it('should be able to create a new reference and validate with correct data', async () => {
    const dataType: Reference = {
      type: 'official',
      reference: 'Organization/123',
      display: 'Organization display',
    };

    const validate = await ElementValidator.Reference(dataType);
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

    const validate = await ElementValidator.Reference(dataType);

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
    const dataType = builder.setReference('Organization/123').setDisplay('Organization display').build();

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({ type: 'official', display: 'Organization display', reference: 'Organization/123' });
  });

  it('should return errors if identifiers has wrong data', async () => {
    const dataType = builder
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

    const validate = await ElementValidator.Reference(dataType);
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
    const organization: Organization = {
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
