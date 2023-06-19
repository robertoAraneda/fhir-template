import { ILocationPosition } from '../../interfaces/backbones';
import { IElement } from '../../interfaces/base';
import BackboneElement from '../base/BackboneElement';
import { ILocationPositionBuilder, LocationPositionBuilder } from './LocationPositionBuilder';

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
