import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { ILocationPosition } from '../../interfaces/backbones';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElementBuilder } from '../base/ElementBuilder';
import { IElement } from '../../interfaces/base';

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

export class LocationPositionBuilder
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
