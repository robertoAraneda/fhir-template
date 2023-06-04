import { DomainResource } from './DomainResource';
import { BackboneElement } from './BackboneElement';

export interface Buildable<Class extends DomainResource | BackboneElement> {
  build(): Class;
  raw(): Class;
}
