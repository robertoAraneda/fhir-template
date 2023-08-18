import Element from '../base/Element';
import IUsageContext from '../../interfaces/datatypes/IUsageContext';
import { IElement } from '../../interfaces/base';
import { ICodeableConcept, ICoding, IQuantity, IRange, IReference } from '../../interfaces/datatypes';
import AnnotationBuilder from './AnnotationBuilder';
import { DataTypeAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';
import UsageContextBuilder from './UsageContextBuilder';

export default class UsageContext extends Element implements IUsageContext {
  code: ICoding;
  valueCodeableConcept: ICodeableConcept;
  valueQuantity: IQuantity;
  valueRange: IRange;
  valueReference: IReference;

  static builder(): UsageContextBuilder {
    return new UsageContextBuilder();
  }

  toJson(): UsageContext {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `UsageContext${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `UsageContext${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args: IUsageContext) {
    super();
    UsageContextValidator(args);
    Object.assign(this, args);
  }
}

export const usageContextKeysDefinitions = DataTypeAttributesHelperR5<IUsageContext>([
  {
    name: 'code',
    type: 'Coding',
    isArray: false,
    isRequired: true,
  },
  {
    name: 'valueCodeableConcept',
    isArray: false,
    type: 'CodeableConcept',
    isRequired: false,
  },
  {
    name: 'valueQuantity',
    isArray: false,
    type: 'Quantity',
    isRequired: false,
  },
  {
    name: 'valueRange',
    isArray: false,
    type: 'Range',
    isRequired: false,
  },
  {
    name: 'valueReference',
    isArray: false,
    type: 'Reference',
    isRequired: false,
    referenceValues: [
      'PlanDefinition',
      'ResearchStudy',
      'InsurancePlan',
      'HealthcareService',
      'Group',
      'Location',
      'Organization',
    ],
  },
]);

export function UsageContextValidator(args: IUsageContext | IUsageContext[], path: string = 'UsageContext') {
  if (Array.isArray(args)) {
    args.forEach((a, index) => UsageContextValidator(a, `${path}[${index}]`));
    return;
  }

  ValidatorHelperR5(args, usageContextKeysDefinitions, path);
}
