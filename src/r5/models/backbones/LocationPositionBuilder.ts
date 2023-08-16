import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IBuildable } from '../../../globals/interfaces';
import { LocationPosition } from './index';
import { IElement } from '../../interfaces/base';
import { IElementBuilder } from '../base/ElementBuilder';
import { ILocationPosition } from '../../interfaces/backbones';

type ParamExtensionType = 'longitude' | 'latitude' | 'altitude';

export interface ILocationPositionBuilder
  extends IBuildable<LocationPosition>,
    IBackboneElementBuilder<LocationPositionBuilder>,
    IElementBuilder<LocationPositionBuilder> {
  addParamExtension(param: ParamExtensionType, extension: IElement): this;

  setLongitude(longitude: number): this;

  setLatitude(latitude: number): this;

  setAltitude(altitude: number): this;
}
export default class LocationPositionBuilder
  extends BackboneElementBuilder<LocationPositionBuilder>
  implements ILocationPositionBuilder
{
  private readonly locationPosition: ILocationPosition;
  constructor() {
    super();
    this.locationPosition = {} as ILocationPosition;
  }

  build(): LocationPosition {
    Object.assign(this.locationPosition, { ...super.entity() });
    return new LocationPosition(this.locationPosition).toJson();
  }

  setAltitude(altitude: number): this {
    this.locationPosition.altitude = altitude;
    return this;
  }

  setLatitude(latitude: number): this {
    this.locationPosition.latitude = latitude;
    return this;
  }

  setLongitude(longitude: number): this {
    this.locationPosition.longitude = longitude;
    return this;
  }

  addParamExtension(param: ParamExtensionType, extension: IElement): this {
    this.locationPosition[`_${param}`] = extension;
    return this;
  }
}
