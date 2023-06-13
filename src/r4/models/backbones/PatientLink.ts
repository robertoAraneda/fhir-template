import { IPatientLink } from '../../interfaces/backbones';
import { IExtension, IReference } from '../../interfaces/datatypes';
import { LinkTypeEnum } from '../../enums';
import { LinkTypeType } from '../../types';
import { IElement } from '../../interfaces/base';

export default class PatientLink implements IPatientLink {
  // Element attributes
  id: string;
  extension: IExtension[];

  // BackBoneElement attributes
  modifierExtension: IExtension[];

  // PatientLink attributes
  other: IReference;
  type: LinkTypeEnum | LinkTypeType;
  _type?: IElement;

  constructor(args?: IPatientLink) {
    Object.assign(this, args);
  }
}
