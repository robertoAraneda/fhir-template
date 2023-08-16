import { IBuildable } from '../../../globals/interfaces';
import { ILocationPosition } from '../../interfaces/backbones';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElementBuilder } from '../base/ElementBuilder';
import { IElement } from '../../interfaces/base';
import LocationPosition from './LocationPosition';

type ParamExtensionType = 'longitude' | 'latitude' | 'altitude';

interface IBuilders<T> extends IBackboneElementBuilder<T>, IElementBuilder<T> {}

export interface ILocationPositionBuilder extends IBuildable<LocationPosition>, IBuilders<LocationPositionBuilder> {
  addParamExtension<T extends ParamExtensionType>(param: T, element: IElement): this;

  setLongitude(longitude: number): this;

  setLatitude(latitude: number): this;

  setAltitude(altitude: number): this;
}

export class LocationPositionBuilder
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

  addParamExtension<T extends ParamExtensionType>(param: T, element: IElement): this {
    this.locationPosition[`_${param}`] = element;
    return this;
  }
}
