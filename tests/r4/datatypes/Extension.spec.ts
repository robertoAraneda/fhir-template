import { IExtension } from '../../../src/r4/interfaces/datatypes';
import FHIRContext from '../../../src';
import { _validateDataType } from '../../../src/r4/validators/BaseValidator';
import { IExtensionBuilder } from '../../../src/r4/models/datatypes/ExtensionBuilder';

describe('Extension FHIR R4', () => {
  let builder: IExtensionBuilder;
  const { Extension } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = Extension.builder();
  });

  it('should be able to create a new extension and validate with correct data [new Extension()]', async () => {
    const item = new Extension({
      id: '123',
      url: 'url',
      valueBoolean: true,
    });

    const validate = await _validateDataType(item, 'Extension');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new extension and validate with correct data [IExtension]', async () => {
    const item: IExtension = {
      id: '123',
      url: 'url',
      valueBoolean: true,
    };

    const validate = await _validateDataType(item, 'Extension');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new extension and validate with wrong data', async () => {
    const item = {
      id: '123',
      url: 'url',
      valueBoolean: true,
      test: 'test', // wrong property
    };

    const validate = await _validateDataType(item, 'Extension');

    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors).toHaveLength(1);
    expect(validate.errors).toEqual([
      {
        instancePath: '',
        keyword: 'additionalProperties',
        message: 'must NOT have additional properties',
        params: { additionalProperty: 'test' },
        schemaPath: '#/additionalProperties',
      },
    ]);
  });

  it('should be able to create a new extension using builder methods', async () => {
    // build() is a method that returns the object that was built
    const item = builder
      .setId('123')
      .setUrl('url')
      .addParamExtension('valueUrl', {
        extension: [
          {
            url: 'url',
            valueDate: '2022-06-12',
          },
        ],
      })
      .build();

    const validate = await _validateDataType(item, 'Extension');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();

    expect(item).toBeDefined();
    expect(item).toEqual({
      _valueUrl: {
        extension: [
          {
            url: 'url',
            valueDate: '2022-06-12',
          },
        ],
      },
      id: '123',
      url: 'url',
    });
  });
});
