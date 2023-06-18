import FHIRContext from '../../../src';
import { LocationPosition } from '../../../src/r5/models/backbones';
import { LocationPositionBuilder } from '../../../src/r5/builders/backbones';
import { ILocationPosition } from '../../../src/r5/interfaces/backbones';

describe('LocationPosition FHIR R5', () => {
  let builder: LocationPositionBuilder;
  let builderFromFunction: LocationPositionBuilder;
  const { Validator, createBackboneElement, Builder } = new FHIRContext().forR5();

  // create global
  beforeEach(() => {
    builder = new LocationPositionBuilder();
    builderFromFunction = Builder.backboneElements.LocationPosition();
  });

  it('should be able to validate a new location_position [createBackboneElement]', async () => {
    const item = createBackboneElement('LocationPosition', {
      id: '123',
      altitude: 123,
      latitude: 123,
      longitude: 123,
    });

    const validate = await Validator.backboneElements.LocationPosition(item);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new location_position [new LocationPosition()]', async () => {
    const item = new LocationPosition({
      id: '123',
      altitude: 123,
      latitude: 123,
      longitude: 123,
    });

    const validateAddress = await Validator.backboneElements.LocationPosition(item);
    expect(validateAddress.isValid).toBeTruthy();
    expect(validateAddress.errors).toBeUndefined();
  });

  it('should be able to validate a new location_position [ILocationPosition]', async () => {
    const item: ILocationPosition = {
      id: '123',
      altitude: 123,
      latitude: 123,
      longitude: 123,
    };

    const validate = await Validator.backboneElements.LocationPosition(item);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new location_position using builder methods [new LocationPositionBuilder()]', async () => {
    const item = builder
      .setId('123')
      .setLatitude(123)
      .setLongitude(123)
      .setAltitude(123)
      .addParamExtension('latitude', {
        extension: [
          {
            url: 'preferred',
            valueDate: '2020-01-01',
          },
        ],
      })
      .build();

    expect(item).toEqual({
      _latitude: {
        extension: [
          {
            url: 'preferred',
            valueDate: '2020-01-01',
          },
        ],
      },
      altitude: 123,
      id: '123',
      latitude: 123,
      longitude: 123,
    });
  });

  it('should be able to create a new location_position using builder methods [Builder.backboneElements.LocationPosition()]', async () => {
    const item = builderFromFunction
      .setId('123')
      .setLatitude(123)
      .setLongitude(123)
      .setAltitude(123)
      .addParamExtension('latitude', {
        extension: [
          {
            url: 'preferred',
            valueDate: '2020-01-01',
          },
        ],
      })
      .build();

    expect(item).toEqual({
      _latitude: {
        extension: [
          {
            url: 'preferred',
            valueDate: '2020-01-01',
          },
        ],
      },
      altitude: 123,
      id: '123',
      latitude: 123,
      longitude: 123,
    });
  });

  it('should be get errors validators if new location_position has wrong data', async () => {
    const item = {
      id: '123',
      wrongProperty: 'wrongProperty',
    };

    const validate = await Validator.backboneElements.LocationPosition(item);
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
