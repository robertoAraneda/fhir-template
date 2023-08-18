import { IDomainResource, IElement } from '../base';
import { ICodeableConcept, IIdentifier, IReference } from '../datatypes';
import ICompositionEvent from '../backbones/ICompositionEvent';
import ICompositionSection from '../backbones/ICompositionSection';
import CompositionStatusEnum from '../../enums/CompositionStatusEnum';
import CompositionStatusType from '../../types/CompositionStatusType';
import IUsageContext from '../datatypes/IUsageContext';
import IAnnotation from '../datatypes/IAnnotation';
import ICompositionAttester from '../backbones/ICompositionAttester';
import IRelatedArtifact from '../datatypes/IRelatedArtifact';

export default interface IComposition extends IDomainResource {
  resourceType: 'Composition';
  url?: string;
  identifier?: IIdentifier[];
  version?: string;
  status: CompositionStatusEnum | CompositionStatusType;
  type: ICodeableConcept;
  category?: ICodeableConcept[];
  subject?: IReference[];
  encounter?: IReference;
  date: string;
  useContext?: IUsageContext[];
  author: IReference[];
  name?: string;
  title: string;
  note?: IAnnotation[];
  attester?: ICompositionAttester[];
  event?: ICompositionEvent[];
  section?: ICompositionSection[];
  custodian?: IReference;
  relatesTo?: IRelatedArtifact[];

  _url?: IElement;
  _version?: IElement;
  _status?: IElement;
  _date?: IElement;
  _name?: IElement;
  _title?: IElement;
}
