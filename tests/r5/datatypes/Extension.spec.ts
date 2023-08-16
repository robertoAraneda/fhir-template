import { IExtension } from '../../../src/r5/interfaces/datatypes';
import FHIRContext from '../../../src';
import ExtensionBuilder from '../../../src/r5/models/datatypes/ExtensionBuilder';
import { ExtensionValidator } from '../../../src/r5/models/datatypes/ExtensionValidator';

describe('Extension FHIR R5', () => {
  let builder: ExtensionBuilder;
  const { Extension } = new FHIRContext().forR5();

  // create global
  beforeEach(() => {
    builder = Extension.builder();
  });

  it('should be able to create a new extension and validate with correct data [new Extension()]', async () => {
    const item = new Extension({
      id: '123',
      url: 'url',
      valueDateTime: '2020-01-01T00:00:00.000Z',
    });

    expect(item).toBeDefined();
  });

  it('should be able to create a new extension and validate with correct data [IExtension]', async () => {
    const item: IExtension = {
      id: '123',
      url: 'url',
      valueBoolean: true,
    };

    expect(() => ExtensionValidator(item)).not.toThrow();
  });

  it('should be validate: Must have either extensions or value[x], not both', async () => {
    const item: IExtension = {
      id: '123',
      url: 'url',
      valueBoolean: true,
      extension: [], // extra property
    };

    expect(() => ExtensionValidator(item, 'this')).toThrow(
      'ConstraintException: [Extension] must have either extensions or value[x], not both for this',
    );
  });

  it('should be able to validate a new extension and validate with wrong data', async () => {
    const item = {
      id: '123',
      valueBoolean: true,
      test: 'test', // wrong property
    };
    expect(() => ExtensionValidator(item as any)).toThrow(
      "InvalidFieldException: field(s) 'test' is not a valid for Extension",
    );
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
