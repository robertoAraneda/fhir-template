import { AddressBuilder } from '../../src/r5/builders/datatypes';
import { IAddress } from '../../src/r5/interfaces/datatypes';
import { IValidatorContext } from '../../src/r5';
import FHIRContext from '../../src';
import { Address } from '../../src/r5/datatypes/Address';

describe('Address', () => {
  const { validators: val, builders, createDatatype } = new FHIRContext().forR5();
  const validator: IValidatorContext = val;
  let builder: AddressBuilder;

  // create global
  beforeEach(async () => {
    builder = await builders.dataTypes.AddressBuilder();
  });

  it('should be able to validate a new address', async () => {
    const address = createDatatype('Address').data({
      id: '123',
      type: 'postal',
      period: {
        start: '2020-01-01',
        end: '2020-01-02',
      },
      text: '123 Main St',
      line: ['123 Main St'],
      district: 'Anycounty',
      country: 'USA',
      postalCode: '12345',
      state: 'AnyState',
    });

    const validateAddress = await validator.dataTypes.Address(address);
    expect(validateAddress.isValid).toBeTruthy();
    expect(validateAddress.errors).toBeUndefined();
  });

  it('should be able to validate a new address', async () => {
    const address = new Address({
      id: '123',
      type: 'postal',
      period: {
        start: '2020-01-01',
        end: '2020-01-02',
      },
      text: '123 Main St',
      line: ['123 Main St'],
      district: 'Anycounty',
      country: 'USA',
      postalCode: '12345',
      state: 'AnyState',
    });

    const validateAddress = await validator.dataTypes.Address(address);
    expect(validateAddress.isValid).toBeTruthy();
    expect(validateAddress.errors).toBeUndefined();
  });

  it('should be able to validate a new address', async () => {
    const address: IAddress = {
      id: '123',
      type: 'postal',
      period: {
        start: '2020-01-01',
        end: '2020-01-02',
      },
      text: '123 Main St',
      line: ['123 Main St'],
      city: 'Anytown',
      use: 'home',
      district: 'Anycounty',
      country: 'USA',
      postalCode: '12345',
      state: 'AnyState',
    };

    const validateAddress = await validator.dataTypes.Address(address);
    expect(validateAddress.isValid).toBeTruthy();
    expect(validateAddress.errors).toBeUndefined();
  });

  it('should be able to create a new address using builder methods', async () => {
    const address: IAddress = new AddressBuilder()
      .setCity('Anytown')
      .setCountry('USA')
      .setDistrict('Anycounty')
      .setId('123')
      .addLine('123 Main St')
      .setPeriod({
        start: '2020-01-01',
        end: '2020-01-02',
      })
      .setPostalCode('12345')
      .setState('AnyState')
      .setType('postal')
      .setUse('home')
      .addAddressParamExtension('line', [
        {
          extension: [
            {
              url: 'latitude',
              valueCode: '123',
            },
          ],
        },
      ])
      .addAddressParamExtension('city', {
        extension: [
          {
            url: 'latitude',
            valueCode: '123',
          },
        ],
      })
      .build();

    expect(address).toEqual({
      id: '123',
      type: 'postal',
      period: {
        start: '2020-01-01',
        end: '2020-01-02',
      },
      line: ['123 Main St'],
      _line: [
        {
          extension: [
            {
              url: 'latitude',
              valueCode: '123',
            },
          ],
        },
      ],
      city: 'Anytown',
      use: 'home',
      district: 'Anycounty',
      country: 'USA',
      postalCode: '12345',
      state: 'AnyState',
      _city: {
        extension: [
          {
            url: 'latitude',
            valueCode: '123',
          },
        ],
      },
    });
  });

  it('should be get errors validators if new address has wrong period', async () => {
    const address: IAddress = {
      id: '123',
      type: 'both',
      period: {
        start: 'bas start period', // wrong start period,
        end: 'bad end period', // wrong end period
      },
      text: '123 Main St',
      line: ['123 Main St'],
      _line: [
        {
          extension: [
            {
              url: 'latitude',
              valueCode: '123',
            },
          ],
        },
      ],
      city: 'Anytown',
      use: 'temp',
      district: 'Anycounty',
      country: 'USA',
      postalCode: '12345',
      state: 'AnyState',
      extension: [
        {
          url: 'http://hl7.org/fhir/StructureDefinition/geolocation',
          valueCode: '123',
          extension: [
            {
              url: 'latitude',
              valueId: '123',
              extension: [
                {
                  url: 'longitude',
                  valueAddress: {
                    city: 'Anytown',
                  },
                },
              ],
            },
          ],
        },
      ],
    };

    const validateAddress = await validator.dataTypes.Address(address);
    expect(validateAddress.isValid).toBeFalsy();
    expect(validateAddress.errors).toBeDefined();
    expect(validateAddress.errors?.length).toBe(2);

    for (const error of validateAddress.errors!) {
      expect(error.instancePath).toContain('period');
    }
  });
});
