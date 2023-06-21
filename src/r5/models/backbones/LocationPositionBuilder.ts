import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IBuildable } from '../../../globals/interfaces';
import { LocationPosition } from './index';
import { IElement } from '../../interfaces/base';
import { IBackboneElementBuilder } from '../../../r4/models/base/BackboneElementBuilder';
import { IElementBuilder } from '../../../r4/models/base/ElementBuilder';

type ParamExtensionType = 'longitude' | 'latitude' | 'altitude';
interface ILocationPositionBuilder
  extends IBuildable<LocationPosition>,
    IBackboneElementBuilder<LocationPositionBuilder>,
    IElementBuilder<LocationPositionBuilder> {
  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): LocationPositionBuilder;

  setLongitude(longitude: number): LocationPositionBuilder;

  setLatitude(latitude: number): LocationPositionBuilder;

  setAltitude(altitude: number): LocationPositionBuilder;
}
export default class LocationPositionBuilder
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
