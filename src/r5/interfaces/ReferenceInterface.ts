import { Identifier } from '../datatypes/Identifier';
import { IdentifierInterface } from './IdentifierInterface';

export interface ReferenceInterface<T> {
  reference?: string | T;
  display?: string;
  identifier?: Identifier | IdentifierInterface;
  type?: string;
}
