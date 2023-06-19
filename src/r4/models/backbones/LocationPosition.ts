import { ILocationPosition } from '../../interfaces/backbones';
import { IElement } from '../../interfaces/base';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../../builders/base/BackboneElementBuilder';
import BackboneElement from './BackboneElement';
import { IElementBuilder } from '../../builders/base/ElementBuilder';

export default class LocationPosition extends BackboneElement implements ILocationPosition {
  longitude: number;
  latitude: number;
  altitude?: number;

  _longitude?: IElement;
  _latitude?: IElement;
  _altitude?: IElement;

  static builder(): ILocationPositionBuilder {
    return new LocationPositionBuilder();
  }

  constructor(args?: ILocationPosition) {
    super();
    Object.assign(this, args);
  }
}

type ParamExtensionType = 'longitude' | 'latitude' | 'altitude';
export interface ILocationPositionBuilder
  extends IBuildable<ILocationPosition>,
    ISerializable,
    IBackboneElementBuilder<ILocationPositionBuilder>,
    IElementBuilder<ILocationPositionBuilder> {
  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): this;
  setLongitude(longitude: number): this;
  setLatitude(latitude: number): this;
  setAltitude(altitude: number): this;
}
class LocationPositionBuilder
  extends BackboneElementBuilder<LocationPositionBuilder>
  implements ILocationPositionBuilder
{
  private readonly locationPosition: ILocationPosition;
  constructor() {
    super();
    this.locationPosition = {} as ILocationPosition;
  }

  build(): ILocationPosition {
    return JSON.parse(this.buildAsString());
  }

  compileAsDefault(): ILocationPosition {
    return {
      ...this.locationPosition,
      ...super.entity(),
    };
  }

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault());
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

  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): this {
    this.locationPosition[`_${param}`] = extension;
    return this;
  }
}
