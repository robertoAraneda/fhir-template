import FHIRContext from '../../../src';
import { ILocationPosition } from '../../../src/r4/interfaces/backbones';
import { _validateBackbone } from '../../../src/r4/validators/BaseValidator';

import { ILocationPositionBuilder } from '../../../src/r4/models/backbones/LocationPositionBuilder';

describe('LocationPosition FHIR R4', () => {
  let builder: ILocationPositionBuilder;
  const { LocationPosition } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = LocationPosition.builder();
  });

  it('should be able to validate a new location_position [new LocationPosition()]', async () => {
    const item = new LocationPosition({
      id: '123',
      altitude: 123,
      latitude: 123,
      longitude: 123,
    });

    const validate = await _validateBackbone(item, 'Location_Position');
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new location_position [ILocationPosition]', async () => {
    const item: ILocationPosition = {
      id: '123',
      altitude: 123,
      latitude: 123,
      longitude: 123,
    };

    const validate = await _validateBackbone(item, 'Location_Position');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new location_position using builder methods [LocationPosition.builder()]', async () => {
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

    const validate = await _validateBackbone(item, 'Location_Position');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();

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

    const validate = await _validateBackbone(item, 'Location_Position');
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
