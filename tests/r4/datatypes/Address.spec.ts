import FHIRContext from '../../../src';
import { AddressBuilder } from '../../../src/r4/builders/datatypes';
import { AddressTypeEnum } from '../../../src/r4/enums';
import { Address } from '../../../src/r4/models/datatypes';
import { IAddress } from '../../../src/r4/interfaces/datatypes';

describe('Address FHIR R4', () => {
  let builder: AddressBuilder;
  let builderFromFunction: AddressBuilder;
  const { Validator, createDatatype, Builder } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = new AddressBuilder();
    builderFromFunction = Builder.dataTypes.AddressBuilder();
  });

  it('should be able to validate a new address [createDatatype]', async () => {
    const item = createDatatype('Address', {
      id: '123',
      type: AddressTypeEnum.BOTH,
      use: 'old',
      city: 'Anytown',
      line: ['123 Main St'],
      country: 'USA',
    });

    const validate = await Validator.dataTypes.Address(item);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new address [new Address()]', async () => {
    const item = new Address({
      id: '123',
      type: AddressTypeEnum.BOTH,
      use: 'old',
      city: 'Anytown',
      line: ['123 Main St'],
      country: 'USA',
    });

    const validate = await Validator.dataTypes.Address(item);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new address [IAddress]', async () => {
    const item: IAddress = {
      id: '123',
      type: AddressTypeEnum.BOTH,
      use: 'old',
      city: 'Anytown',
      line: ['123 Main St'],
      country: 'USA',
    };

    const validate = await Validator.dataTypes.Address(item);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new address using builder methods [new Address()]', async () => {
    const item = builder
      .setId('123')
      .addLine('123 Main St')
      .setType(AddressTypeEnum.BOTH)
      .setUse('old')
      .setCity('Anytown')
      .addParamExtension('district', {
        extension: [
          {
            url: 'district',
            valueString: 'district',
          },
        ],
      })
      .build();

    expect(item).toEqual({
      _district: {
        extension: [
          {
            url: 'district',
            valueString: 'district',
          },
        ],
      },
      city: 'Anytown',
      id: '123',
      line: ['123 Main St'],
      type: 'both',
      use: 'old',
    });
  });

  it('should be able to create a new address using builder methods [builders.dataTypes.AddressBuilder()]', async () => {
    const item = builderFromFunction
      .setId('123')
      .addLine('123 Main St')
      .setType(AddressTypeEnum.BOTH)
      .setUse('old')
      .setCity('Anytown')
      .addParamExtension('district', {
        extension: [
          {
            url: 'district',
            valueString: 'district',
          },
        ],
      })
      .build();

    expect(item).toEqual({
      _district: {
        extension: [
          {
            url: 'district',
            valueString: 'district',
          },
        ],
      },
      city: 'Anytown',
      id: '123',
      line: ['123 Main St'],
      type: 'both',
      use: 'old',
    });
  });

  it('should be get errors validators if new address has wrong data', async () => {
    const item = {
      id: '123',
      wrongProperty: 'wrong',
    };

    const validate = await Validator.dataTypes.Address(item);
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
