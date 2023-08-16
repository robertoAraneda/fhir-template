import FHIRContext from '../../../src';
import { ILocationPosition } from '../../../src/r4/interfaces/backbones';
import { LocationPositionBuilder } from '../../../src/r4/models/backbones/LocationPositionBuilder';

import { LocationPositionValidator } from '../../../src/r4/models/backbones/LocationPositionValidator';

describe('LocationPosition FHIR R4', () => {
  let builder: LocationPositionBuilder;
  const { LocationPosition, Extension } = new FHIRContext().forR4();

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

    expect(item).toBeDefined();
  });

  it('should be able to validate a new location_position [ILocationPosition]', async () => {
    const item: ILocationPosition = {
      id: '123',
      altitude: 123,
      latitude: 123,
      longitude: 123,
    };

    expect(() => LocationPositionValidator(item)).not.toThrow();
  });

  it('should be able to create a new location_position using builder methods [LocationPosition.builder()]', async () => {
    const extension = Extension.builder().setUrl('preferred').setValueTime('12:00:00').build();
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
      .addParamExtension('longitude', {
        extension: [extension],
      })
      .build();

    expect(item).toBeDefined();

    expect(item).toEqual({
      _latitude: {
        extension: [
          {
            url: 'preferred',
            valueDate: '2020-01-01',
          },
        ],
      },
      _longitude: {
        extension: [
          {
            url: 'preferred',
            valueTime: '12:00:00',
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

    expect(() => LocationPositionValidator(item as any)).toThrowError(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for LocationPosition",
    );
  });

  it('should get errors validators if new location_position dont have longitude required field', async () => {
    const item = {
      id: '123',
      latitude: 123,
    };

    expect(() => LocationPositionValidator(item as any)).toThrowError(
      'Missing required field longitude in LocationPosition',
    );
  });

  it('should get errors validators if new location_position dont have latitude required field', async () => {
    const item = {
      id: '123',
      longitude: 123,
    };

    expect(() => LocationPositionValidator(item as any)).toThrowError(
      'Missing required field latitude in LocationPosition',
    );
  });
});
