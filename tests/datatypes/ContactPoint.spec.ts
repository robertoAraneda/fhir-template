import { ContactPointBuilder } from '../../src/r5/builders/datatypes';
import { IContactPoint } from '../../src/r5/interfaces/datatypes';
import { IValidatorContext } from '../../src/r5';
import FHIRContext from '../../src';

describe('ContactPoint', () => {
  let validator: IValidatorContext;
  let builder: ContactPointBuilder;

  beforeAll(() => {
    const context = new FHIRContext();
    validator = context.forR5().validators;
  });

  // create global
  beforeEach(() => {
    builder = new ContactPointBuilder();
  });

  it('should be able to create a new contact point and validate with correct data', async () => {
    const dataType: IContactPoint = {
      id: '123',
      value: 'test',
      system: 'url',
      rank: 1,
      use: 'home',
    };

    const validate = await validator.ContactPoint(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new contact point and validate with wrong data', async () => {
    const dataType = {
      id: '123',
      value: 'test',
      system: 'bad system', // wrong property
      rank: 1,
      use: 'home',
      test: 'test', // wrong property
    };

    const validate = await validator.ContactPoint(dataType);

    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors).toHaveLength(2);
    expect(validate.errors).toEqual([
      {
        instancePath: '',
        schemaPath: '#/additionalProperties',
        keyword: 'additionalProperties',
        params: { additionalProperty: 'test' },
        message: 'must NOT have additional properties',
      },
      {
        instancePath: '/system',
        schemaPath: '#/properties/system/enum',
        keyword: 'enum',
        params: { allowedValues: ['phone', 'fax', 'email', 'pager', 'url', 'sms', 'other'] },
        message: 'must be equal to one of the allowed values',
      },
    ]);
  });

  it('should be able to create a new contact point using builder methods', async () => {
    // build() is a method that returns the object that was built
    const dataType = builder
      .setId('123')
      .setRank(1)
      .setSystem('url')
      .setValue('test')
      .addContactPointParamExtension('system', { extension: [{ id: '123', url: 'url', valueDate: '2022-06-12' }] })
      .build();

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
      id: '123',
      rank: 1,
      system: 'url',
      value: 'test',
      _system: {
        extension: [
          {
            id: '123',
            url: 'url',
            valueDate: '2022-06-12',
          },
        ],
      },
    });
  });
});
