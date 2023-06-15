import { IRange, ISimpleQuantity } from '../../interfaces/datatypes';

export default class Range implements IRange {
  // Range attributes
  low?: ISimpleQuantity;
  high?: ISimpleQuantity;

  constructor(args?: IRange) {
    Object.assign(this, args);
  }
}
