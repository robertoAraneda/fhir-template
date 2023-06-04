import { ContactPointBuilder } from '../../src/r5/builders/datatypes/ContactPointBuilder';
import { ContactPoint } from '../../src/r5/interfaces/datatypes/ContactPoint';
import ElementBuilder from '../../src/r5/ElementBuilder';
import ElementValidator from '../../src/r5/ElementValidator';

describe('ContactPoint', () => {
  let builder: ContactPointBuilder;

  // create global
  beforeEach(() => {
    builder = ElementBuilder.ContactPoint().setId('123').setSystem('url').setRank(1).setValue('test');
  });

  it('should be able to create a new contact point and validate with correct data', async () => {
    const dataType: ContactPoint = {
      id: '123',
      value: 'test',
      system: 'url',
      rank: 1,
      use: 'home',
    };

    const validate = await ElementValidator.ContactPoint(dataType);

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

    const validate = await ElementValidator.ContactPoint(dataType);

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
