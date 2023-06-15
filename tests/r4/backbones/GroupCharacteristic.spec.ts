import FHIRContext from '../../../src';
import { GroupCharacteristic } from '../../../src/r4/models/backbones';
import { GroupCharacteristicBuilder } from '../../../src/r4/builders/backbones';
import { IGroupCharacteristic } from '../../../src/r4/interfaces/backbones';

describe('GroupCharacteristic FHIR R4', () => {
  let builder: GroupCharacteristicBuilder;
  let builderFromFunction: GroupCharacteristicBuilder;
  const { Validator, createBackboneElement, Builder } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = new GroupCharacteristicBuilder();
    builderFromFunction = Builder.backboneElements.GroupCharacteristic();
  });

  it('should be able to validate a new group_characteristic [createBackboneElement]', async () => {
    const item = createBackboneElement('GroupCharacteristic', {
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

    const validate = await Validator.backboneElements.GroupCharacteristic(item);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
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

    const validateAddress = await Validator.backboneElements.GroupCharacteristic(item);
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

    const validate = await Validator.backboneElements.GroupCharacteristic(item);

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

  it('should be able to create a new group_characteristic using builder methods [Builder.backboneElements.GroupCharacteristic()]', async () => {
    const item = builderFromFunction
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

    const validate = await Validator.backboneElements.GroupCharacteristic(item);
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
