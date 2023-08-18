import { IBuildable } from '../../../globals/interfaces';
import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import UsageContext from './UsageContext';
import { ICodeableConcept, ICoding, IQuantity, IRange, IReference } from '../../interfaces/datatypes';
import IUsageContext from '../../interfaces/datatypes/IUsageContext';

export interface IUsageContextBuilder extends IBuildable<UsageContext>, IElementBuilder<UsageContextBuilder> {
  setCode(code: ICoding): this;
  setValueCodeableConcept(codeableConcept: ICodeableConcept): this;
  setValueQuantity(quantity: IQuantity): this;
  setValueRange(range: IRange): this;
  setValueReference(reference: IReference): this;
}

export default class UsageContextBuilder extends ElementBuilder<UsageContextBuilder> implements IUsageContextBuilder {
  private readonly usageContext: IUsageContext;
  constructor() {
    super();
    this.usageContext = {} as IUsageContext;
  }

  setValueRange(range: IRange): this {
    this.usageContext.valueRange = range;
    return this;
  }

  setValueReference(reference: IReference): this {
    this.usageContext.valueReference = reference;
    return this;
  }

  setValueCodeableConcept(codeableConcept: ICodeableConcept): this {
    this.usageContext.valueCodeableConcept = codeableConcept;
    return this;
  }

  setValueQuantity(quantity: IQuantity): this {
    this.usageContext.valueQuantity = quantity;
    return this;
  }

  setCode(code: ICoding): this {
    this.usageContext.code = code;
    return this;
  }

  build(): UsageContext {
    Object.assign(this.usageContext, { ...super.entity() });
    return new UsageContext(this.usageContext).toJson();
  }
}
