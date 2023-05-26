import { Identifier, IdentifierParams } from '../datatypes/Identifier';

export interface ReferenceInterface<T> {
  reference?: string | T;
  display?: string;
  identifier?: Identifier | IdentifierParams;
  type?: string;
}
