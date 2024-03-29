import { IAddress } from '../../../src/r5/interfaces/datatypes';
import FHIRContext from '../../../src';
import AddressBuilder from '../../../src/r5/models/datatypes/AddressBuilder';
import { AddressValidator } from '../../../src/r5/models/datatypes/AddressValidator';

describe('Address FHIR R5', () => {
  let builder: AddressBuilder;
  const { Address } = new FHIRContext().forR5();

  // create global
  beforeEach(() => {
    builder = Address.builder();
  });

  it('should be able to validate a new address [new Address()]', async () => {
    const item = new Address({
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

    expect(item).toBeDefined();
  });

  it('should be able to validate a new address [IAddress]', async () => {
    const item: IAddress = {
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

    expect(() => AddressValidator(item)).not.toThrow();
  });

  it('should be able to create a new address using builder methods [new AddressBuilder()]', async () => {
    const item: IAddress = builder
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
      .addParamExtension('line', [
        {
          extension: [
            {
              url: 'latitude',
              valueCode: '123',
            },
          ],
        },
      ])
      .addParamExtension('city', {
        extension: [
          {
            url: 'latitude',
            valueCode: '123',
          },
        ],
      })
      .build();

    expect(item).toBeDefined();

    expect(item).toEqual({
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
    const item: IAddress = {
      id: '123',
      type: 'both',
      period: {
        start: 'bas start period', // wrong start period,
        end: '2020-01-02',
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

    expect(() => AddressValidator(item)).toThrowError(
      'Invalid dateTime: bas start period at path: Address.period.start',
    );
  });
});
