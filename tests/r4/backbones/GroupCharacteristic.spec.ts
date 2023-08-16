import FHIRContext from '../../../src';
import { IGroupCharacteristic } from '../../../src/r4/interfaces/backbones';
import { GroupCharacteristicBuilder } from '../../../src/r4/models/backbones/GroupCharacteristicBuilder';

import { GroupCharacteristicValidator } from '../../../src/r4/models/backbones/GroupCharacteristicValidator';

describe('GroupCharacteristic FHIR R4', () => {
  let builder: GroupCharacteristicBuilder;
  const { GroupCharacteristic } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = GroupCharacteristic.builder();
  });

  it('should be able to validate a new group_characteristic [new GroupCharacteristic()]', () => {
    const item = new GroupCharacteristic({
      id: '123',
      code: {
        coding: [
          {
            code: '123',
            system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
          },
        ],
      },
      valueReference: {
        reference: 'Observation/123',
      },
      exclude: false,
    });

    expect(item).toBeDefined();
  });

  it('should be able to validate a new group_characteristic [IGroupCharacteristic]', () => {
    const item: IGroupCharacteristic = {
      id: '123',
      code: {
        coding: [
          {
            code: '123',
            system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
          },
        ],
      },
      valueBoolean: true,
      exclude: false,
    };

    expect(() => GroupCharacteristicValidator(item)).not.toThrow();
  });

  it('should be able to create a new group_characteristic using builder methods [new GroupCharacteristicBuilder()]', () => {
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
      .setExclude(true)
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
      exclude: true,
      code: {
        coding: [
          {
            code: '123',
            system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
          },
        ],
      },
      id: '123',
      valueBoolean: true,
    });
  });

  it('should be get errors validators if new group_characteristic has wrong data', () => {
    const item = {
      id: '123',
      code: {
        coding: [
          {
            code: '123',
            system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
          },
        ],
      },
      valueBoolean: true,
      exclude: false,
      wrongProperty: 'wrongProperty',
    };

    expect(() => GroupCharacteristicValidator(item as IGroupCharacteristic)).toThrowError(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for GroupCharacteristic",
    );
  });
});
