import DomainResource from '../base/DomainResource';
import IComposition from '../../interfaces/resources/IComposition';
import {
  ICompositionAttester,
  ICompositionEvent,
  ICompositionRelatesTo,
  ICompositionSection,
} from '../../interfaces/backbones';
import { ICodeableConcept, IIdentifier, IReference } from '../../interfaces/datatypes';
import { CompositionStatusEnum } from '../../../enums';
import { CompositionStatusType } from '../../../types';
import { IElement } from '../../interfaces/base';
import CompositionConfidentialityEnum from '../../../enums/CompositionConfidentialityEnum';
import CompositionConfidentialityType from '../../../types/CompositionConfidentialityType';
import CompositionBuilder from './CompositionBuilder';
import { compositionAttributes, CompositionValidator } from './CompositionValidator';

export default class Composition extends DomainResource implements IComposition {
  attester: ICompositionAttester[];
  author: IReference[];
  category: ICodeableConcept[];
  confidentiality: CompositionConfidentialityEnum | CompositionConfidentialityType;
  custodian: IReference;
  date?: string;
  encounter: IReference;
  event: ICompositionEvent[];
  identifier: IIdentifier;
  relatesTo: ICompositionRelatesTo[];
  section: ICompositionSection[];
  status?: CompositionStatusEnum | CompositionStatusType;
  subject: IReference;
  title?: string;
  type: ICodeableConcept;
  _status: IElement;
  _title: IElement;
  _date: IElement;
  resourceType: 'Composition' = 'Composition';

  static getResourceType(): 'Composition' {
    return 'Composition';
  }

  static getAttributes(): readonly string[] {
    return compositionAttributes;
  }

  static fromJson(json: IComposition): Composition {
    return new Composition(json);
  }

  static builder(): CompositionBuilder {
    return new CompositionBuilder();
  }

  toJson(): Composition {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Composition${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Composition${JSON.stringify(this.toJson())}`;
  }

  constructor(args: IComposition) {
    super();

    args.resourceType = 'Composition';
    CompositionValidator(args);
    Object.assign(this, args);
  }
}
