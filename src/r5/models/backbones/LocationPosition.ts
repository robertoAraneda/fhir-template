import { ILocationPosition } from '../../interfaces/backbones';
import { IElement } from '../../interfaces/base';

export default class LocationPosition implements ILocationPosition {
  longitude: number;
  latitude: number;
  altitude?: number;

  _longitude?: IElement;
  _latitude?: IElement;
  _altitude?: IElement;

  constructor(args?: ILocationPosition) {
    Object.assign(this, args);
  }
}
