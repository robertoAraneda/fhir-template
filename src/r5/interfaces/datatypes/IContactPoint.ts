import { IElement } from '../base';
import { ContactPointSystemEnum, ContactPointUseEnum } from '../../enums';
import { ContactPointSystemType, ContactPointUseType } from '../../types';
import { IPeriod } from './IPeriod';

export interface IContactPoint extends IElement {
  system?: ContactPointSystemEnum | ContactPointSystemType;
  value?: string;
  use?: ContactPointUseEnum | ContactPointUseType;
  rank?: number;
  period?: IPeriod;
  _system?: IElement;
  _value?: IElement;
  _use?: IElement;
  _rank?: IElement;
}
