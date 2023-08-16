import FHIRContext from '../../../src';
import { AddressTypeEnum } from '../../../src/enums';
import { IAddress } from '../../../src/r4/interfaces/datatypes';
import { AddressBuilder } from '../../../src/r4/models/datatypes/AddressBuilder';

import { AddressValidator } from '../../../src/r4/models/datatypes/AddressValidator';

describe('Address FHIR R4', () => {
  let builder: AddressBuilder;
  const { Address } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = Address.builder();
  });

  it('should be able create a new address [new Address()]', async () => {
    const item = new Address({
      id: '123',
      type: AddressTypeEnum.BOTH,
      use: 'old',
      city: 'Anytown',
      line: ['123 Main St'],
      country: 'USA',
    });

    expect(item).toBeDefined();
  });

  it('should be able to validate a new address [IAddress]', async () => {
    const item: IAddress = {
      id: '123',
      type: AddressTypeEnum.BOTH,
      use: 'old',
      city: 'Anytown',
      line: ['123 Main St'],
      country: 'USA',
      _city: {
        extension: [
          {
            id: 'city',
            url: 'city',
            valueDateTime: '2021-01-01',
          },
        ],
      },
    };

    expect(() => AddressValidator(item)).not.toThrow();
  });

  it('should be able to validate multiple address', async () => {
    const item = {
      id: '123',
      type: AddressTypeEnum.BOTH,
      use: 'old',
      city: 'Anytown',
      line: ['123 Main St'],
      country: 'USA',
    };

    const item2: IAddress = {
      id: '123',
      type: AddressTypeEnum.BOTH,
      use: 'old',
      city: 'Anytown',
      line: ['123 Main St'],
      country: 'USA',
    };

    const item3: IAddress = {
      id: '123',
      type: AddressTypeEnum.BOTH,
      use: 'old',
      city: 'Anytown',
      line: ['123 Main St'],
      country: 'USA',
    };

    expect(() => AddressValidator([item as IAddress, item2, item3])).not.toThrow();
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

  it('should be get errors validators if new address has wrong data', async () => {
    const item = {
      id: '123',
      period: {
        start: '2021-01-01',
      },
      _use: {
        extension: [
          {
            url: 'use',
            valueDateTime: '2021-01-02',
          },
          {
            url: 'use',
            valueDateTime: '2021-01-02',
          },
          {
            url: 'use',
            valueDateTime: '2021-01-0',
          },
        ],
      },
    };

    expect(() => AddressValidator(item as IAddress)).toThrowError(
      'Invalid dateTime: 2021-01-0 at path: Address._use.extension[2].valueDateTime',
    );
  });
});
