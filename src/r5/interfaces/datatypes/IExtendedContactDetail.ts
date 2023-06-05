import { IPeriod } from './IPeriod';
import { IReference } from '../base/IReference';
import { IAddress } from './IAddress';
import { IContactPoint } from './IContactPoint';
import { IHumanName } from './IHumanName';
import { IElement } from '../base/IElement';
import { ICodeableConcept } from './ICodeableConcept';

export interface IExtendedContactDetail extends IElement {
  purpose?: ICodeableConcept;
  name?: IHumanName[];
  telecom?: IContactPoint[];
  address?: IAddress;
  organization?: IReference;
  period?: IPeriod;
}
