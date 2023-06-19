import { ILocationPosition } from '../../interfaces/backbones';
import { IElement } from '../../interfaces/base';
import BackboneElement from '../base/BackboneElement';
import { LocationPositionBuilder } from './LocationPositionBuilder';

export default class LocationPosition extends BackboneElement implements ILocationPosition {
  longitude: number;
  latitude: number;
  altitude?: number;

  _longitude?: IElement;
  _latitude?: IElement;
  _altitude?: IElement;

  toJson(): LocationPosition {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `LocationPosition${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `LocationPosition${JSON.stringify(this.toJson())}`;
  }

  static builder(): LocationPositionBuilder {
    return new LocationPositionBuilder();
  }

  constructor(args?: ILocationPosition) {
    super();
    Object.assign(this, args);
  }
}
