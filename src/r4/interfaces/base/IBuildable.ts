import { IDomainResource } from './IDomainResource';
import { IBackboneElement } from './IBackboneElement';

export interface IBuildable<Class extends IDomainResource | IBackboneElement> {
  build(): Class;
  raw(): Class;
}
