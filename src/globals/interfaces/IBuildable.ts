import { IDomainResource as IDomainResourceR4 } from '../../r4/interfaces/base/IDomainResource';
import { IBackboneElement as IBackboneElementR4 } from '../../r4/interfaces/base/IBackboneElement';
import { IDomainResource as IDomainResourceR5 } from '../../r5/interfaces/base/IDomainResource';
import { IBackboneElement as IBackboneElementR5 } from '../../r5/interfaces/base/IBackboneElement';

type IBuildableClass = IDomainResourceR4 | IBackboneElementR4 | IDomainResourceR5 | IBackboneElementR5;

export interface IBuildable<Class extends IBuildableClass> {
  build(): Class;
  compileAsDefault(): Class;
}
