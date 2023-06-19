import { IDomainResource as IDomainResourceR4 } from '../../r4/interfaces/base/IDomainResource';
import { IBackboneElement as IBackboneElementR4 } from '../../r4/interfaces/base/IBackboneElement';
import { IDomainResource as IDomainResourceR5 } from '../../r5/interfaces/base/IDomainResource';
import { IBackboneElement as IBackboneElementR5 } from '../../r5/interfaces/base/IBackboneElement';
import DomainResourceR4 from '../../r4/models/base/DomainResource';
import BackboneElementR4 from '../../r4/models/base/BackboneElement';

// TODO: add R5 models
type IBuildableClass = IDomainResourceR4 | IBackboneElementR4 | IDomainResourceR5 | IBackboneElementR5;
type InstanceClass = DomainResourceR4 | BackboneElementR4 | any;

export interface IBuildable<Class extends InstanceClass> {
  build(): Class;
}
