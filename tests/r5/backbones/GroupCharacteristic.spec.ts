import FHIRContext from '../../../src';
import { IGroupCharacteristic } from '../../../src/r5/interfaces/backbones';
import GroupCharacteristicBuilder from '../../../src/r5/models/backbones/GroupCharacteristicBuilder';
import { _validateBackbone } from '../../../src/r5/validators/BaseValidator';

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

    const validateAddress = await _validateBackbone(item, 'Group_Characteristic');
    expect(validateAddress.isValid).toBeTruthy();
    expect(validateAddress.errors).toBeUndefined();
  });

  it('should be able to validate a new group_characteristic [IGroupCharacteristic]', async () => {
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
      exclude: false,
    };

    const validate = await _validateBackbone(item, 'Group_Characteristic');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
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

    const validate = await _validateBackbone(item, 'Group_Characteristic');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();

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
      id: '123',
      valueBoolean: true,
    });
  });

  it('should be get errors validators if new group_characteristic has wrong data', async () => {
    const item = {
      id: '123',
      wrongProperty: 'wrongProperty',
    };

    const validate = await _validateBackbone(item, 'Group_Characteristic');
    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors?.length).toBe(2);
    expect(validate.errors).toEqual([
      {
        instancePath: '',
        keyword: 'required',
        message: "must have required property 'code'",
        params: {
          missingProperty: 'code',
        },
        schemaPath: '#/required',
      },
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
