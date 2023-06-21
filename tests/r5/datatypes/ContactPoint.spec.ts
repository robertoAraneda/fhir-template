import { IContactPoint } from '../../../src/r5/interfaces/datatypes';
import FHIRContext from '../../../src';
import { _validateDataType } from '../../../src/r5/validators/BaseValidator';
import ContactPointBuilder from '../../../src/r5/models/datatypes/ContactPointBuilder';

describe('ContactPoint FHIR R5', () => {
  let builder: ContactPointBuilder;
  const { ContactPoint } = new FHIRContext().forR5();

  // create global
  beforeEach(() => {
    builder = ContactPoint.builder();
  });

  it('should be able to create a new contact point and validate with correct data [new ContactPoint()]', async () => {
    const item = new ContactPoint({
      id: '123',
      value: 'test',
      system: 'url',
      rank: 1,
      use: 'home',
    });

    const validate = await _validateDataType(item, 'ContactPoint');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new contact point and validate with correct data [IContactPoint]', async () => {
    const item: IContactPoint = {
      id: '123',
      value: 'test',
      system: 'url',
      rank: 1,
      use: 'home',
    };

    const validate = await _validateDataType(item, 'ContactPoint');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new contact point and validate with wrong data', async () => {
    const item = {
      id: '123',
      value: 'test',
      system: 'bad system', // wrong property
      rank: 1,
      use: 'home',
      test: 'test', // wrong property
    };

    const validate = await _validateDataType(item, 'ContactPoint');

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
    const item = builder
      .setId('123')
      .setRank(1)
      .setSystem('url')
      .setValue('test')
      .addParamExtension('system', { extension: [{ id: '123', url: 'url', valueDate: '2022-06-12' }] })
      .build();

    expect(item).toBeDefined();
    expect(item).toEqual({
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

    const validate = await _validateDataType(item, 'ContactPoint');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });
});
