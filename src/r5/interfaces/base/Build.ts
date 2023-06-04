import { DomainResource } from './DomainResource';
import { BackboneElement } from './BackboneElement';

export interface Build<Class extends DomainResource | BackboneElement> {
  build(): Class;
  raw(): Class;
}
