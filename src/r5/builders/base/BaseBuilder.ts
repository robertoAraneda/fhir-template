import { Base } from '../../interfaces/base';

export class BaseBuilder<ClassBuilder> {
  private readonly base: Base;

  constructor() {
    this.base = {} as Base;
  }

  entity(): Base {
    return this.base;
  }
}
