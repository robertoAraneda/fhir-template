import { IPatientContact } from '../../interfaces/backbones';
import { IElement } from '../../interfaces/base';
import {
  IAddress,
  ICodeableConcept,
  IContactPoint,
  IExtension,
  IHumanName,
  IPeriod,
  IReference,
} from '../../interfaces/datatypes';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';

export default class PatientContact implements IPatientContact {
  // Element attributes
  id: string;
  extension: IExtension[];

  // BackBoneElement attributes
  modifierExtension: IExtension[];

  // PatientContact attributes
  relationship: ICodeableConcept[];
  name: IHumanName;
  telecom: IContactPoint[];
  address: IAddress;
  gender: AdministrativeGenderEnum | AdministrativeGenderType;
  _gender: IElement;
  organization: IReference;
  period: IPeriod;

  constructor(args?: IPatientContact) {
    Object.assign(this, args);
  }
}
