import { IBase } from '../../interfaces/base';

export class BaseBuilder<ClassBuilder> {
  private readonly base: IBase;

  constructor() {
    this.base = {} as IBase;
  }

  entity(): IBase {
    return this.base;
  }
}
