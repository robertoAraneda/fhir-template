import { ILocationPosition } from '../../interfaces/backbones';
import { IElement } from '../../interfaces/base';
import BackboneElement from '../base/BackboneElement';
import LocationPositionBuilder from './LocationPositionBuilder';
import { LocationPositionValidator } from './LocationPositionValidator';

export default class LocationPosition extends BackboneElement implements ILocationPosition {
  longitude: number;
  latitude: number;
  altitude?: number;

  _longitude?: IElement;
  _latitude?: IElement;
  _altitude?: IElement;

  static builder(): LocationPositionBuilder {
    return new LocationPositionBuilder();
  }

  toJson(): LocationPosition {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `LocationPosition${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `LocationPosition${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args: ILocationPosition) {
    super();
    LocationPositionValidator(args);
    Object.assign(this, args);
  }
}
