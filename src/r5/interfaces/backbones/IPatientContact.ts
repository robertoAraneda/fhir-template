import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IContactPoint, IHumanName, IPeriod, IReference } from '../datatypes';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';

export interface IPatientContact extends IBackboneElement {
  relationship?: ICodeableConcept[];
  name?: IHumanName;
  telecom?: IContactPoint[];
  gender?: AdministrativeGenderEnum | AdministrativeGenderType;
  organization?: IReference;
  period?: IPeriod;
  _gender?: IElement;
}
