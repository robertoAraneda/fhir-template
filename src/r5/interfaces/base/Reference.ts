import { DomainResource } from './DomainResource';
import { Identifier } from '../datatypes/Identifier';
import { Element } from './Element';

export interface Reference extends Element {
  reference?: string;
  display?: string;
  identifier?: Identifier;
  type?: string;
  _display?: Element;
  _type?: Element;
  _reference?: Element;
}
