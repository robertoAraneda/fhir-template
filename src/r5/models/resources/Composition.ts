import DomainResource from '../base/DomainResource';
import { ICodeableConcept, IIdentifier, IReference } from '../../interfaces/datatypes';
import { CompositionStatusEnum } from '../../../r4/enums';
import { CompositionStatusType } from '../../../r4/types';
import { IElement } from '../../interfaces/base';
import CompositionBuilder from './CompositionBuilder';
import { CompositionValidator } from './CompositionValidator';
import IComposition from '../../interfaces/resources/IComposition';
import IAnnotation from '../../interfaces/datatypes/IAnnotation';
import IRelatedArtifact from '../../interfaces/datatypes/IRelatedArtifact';
import IUsageContext from '../../interfaces/datatypes/IUsageContext';
import ICompositionAttester from '../../interfaces/backbones/ICompositionAttester';
import ICompositionEvent from '../../interfaces/backbones/ICompositionEvent';
import ICompositionSection from '../../interfaces/backbones/ICompositionSection';

export default class Composition extends DomainResource implements IComposition {
  _date?: IElement;
  _name?: IElement;
  _status?: IElement;
  _title?: IElement;
  _url?: IElement;
  _version?: IElement;
  attester?: ICompositionAttester[];
  author: IReference[];
  category?: ICodeableConcept[];
  custodian?: IReference;
  date: string;
  encounter?: IReference;
  event?: ICompositionEvent[];
  identifier?: IIdentifier[];
  name?: string;
  note?: IAnnotation[];
  relatesTo?: IRelatedArtifact[];
  section?: ICompositionSection[];
  status: CompositionStatusEnum | CompositionStatusType;
  subject?: IReference[];
  title: string;
  type: ICodeableConcept;
  url?: string;
  useContext?: IUsageContext[];
  version?: string;

  resourceType: 'Composition' = 'Composition';

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
