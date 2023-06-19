import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { ILocationPosition } from '../../interfaces/backbones';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElementBuilder } from '../base/ElementBuilder';
import { IElement } from '../../interfaces/base';
import LocationPosition from './LocationPosition';

type ParamExtensionType = 'longitude' | 'latitude' | 'altitude';

export interface ILocationPositionBuilder
  extends IBuildable<LocationPosition>,
    IBackboneElementBuilder<LocationPositionBuilder>,
    IElementBuilder<LocationPositionBuilder> {
  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): LocationPositionBuilder;

  setLongitude(longitude: number): LocationPositionBuilder;

  setLatitude(latitude: number): LocationPositionBuilder;

  setAltitude(altitude: number): LocationPositionBuilder;
}

export class LocationPositionBuilder
  extends BackboneElementBuilder<LocationPositionBuilder>
  implements ILocationPositionBuilder
{
  private readonly locationPosition: LocationPosition;

  constructor() {
    super();
    this.locationPosition = new LocationPosition();
  }

  build(): LocationPosition {
    Object.assign(this.locationPosition, { ...super.entity() });
    return this.locationPosition.toJson();
  }

  setAltitude(altitude: number): LocationPositionBuilder {
    this.locationPosition.altitude = altitude;
    return this;
  }

  setLatitude(latitude: number): LocationPositionBuilder {
    this.locationPosition.latitude = latitude;
    return this;
  }

  setLongitude(longitude: number): LocationPositionBuilder {
    this.locationPosition.longitude = longitude;
    return this;
  }

  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): LocationPositionBuilder {
    this.locationPosition[`_${param}`] = extension;
    return this;
  }
}
