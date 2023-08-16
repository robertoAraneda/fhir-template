import FHIRContext from '../../../src';
import { IGroupCharacteristic } from '../../../src/r5/interfaces/backbones';
import GroupCharacteristicBuilder from '../../../src/r5/models/backbones/GroupCharacteristicBuilder';
import { GroupCharacteristicValidator } from '../../../src/r5/models/backbones/GroupCharacteristicValidator';

describe('GroupCharacteristic FHIR R5', () => {
  let builder: GroupCharacteristicBuilder;
  const { GroupCharacteristic } = new FHIRContext().forR5();

  // create global
  beforeEach(() => {
    builder = GroupCharacteristic.builder();
  });

  it('should be able to validate a new group_characteristic [new GroupCharacteristic()]', async () => {
    const item = new GroupCharacteristic({
      id: '123',
      valueBoolean: true,
      code: {
        coding: [
          {
            code: '123',
            system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
          },
        ],
      },
      exclude: false,
    });

    expect(item).toBeDefined();
  });

  it('should be able to validate a new group_characteristic [IGroupCharacteristic]', async () => {
    const item: IGroupCharacteristic = {
      id: '123',
      valueBoolean: true,
      code: {
        coding: [
          {
            code: '123',
            system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
          },
        ],
      },
      exclude: false,
    };

    expect(() => GroupCharacteristicValidator(item)).not.toThrow();
  });

  it('should be able to create a new group_characteristic using builder methods [new GroupCharacteristicBuilder()]', async () => {
    const item = builder
      .setId('123')
      .setCode({
        coding: [
          {
            code: '123',
            system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
          },
        ],
      })
      .setExclude(false)
      .setValueBoolean(true)
      .setParamExtension('exclude', {
        extension: [
          {
            url: 'preferred',
            valueDate: '2020-01-01',
          },
        ],
      })
      .build();

    expect(item).toBeDefined();

    expect(item).toEqual({
      _exclude: {
        extension: [
          {
            url: 'preferred',
            valueDate: '2020-01-01',
          },
        ],
      },
      code: {
        coding: [
          {
            code: '123',
            system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
          },
        ],
      },
      exclude: false,
      id: '123',
      valueBoolean: true,
    });
  });

  it('should be get errors validators if new group_characteristic has wrong data', async () => {
    const item = {
      id: '123',
      code: {
        text: 'text',
      },
      exclude: false,
      wrongProperty: 'wrongProperty',
    };

    expect(() => GroupCharacteristicValidator(item)).toThrowError(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for GroupCharacteristic",
    );
  });
});
