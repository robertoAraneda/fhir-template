import { IPatientContact } from '../../interfaces/backbones';
import { IElement } from '../../interfaces/base';
import { IAddress, ICodeableConcept, IContactPoint, IHumanName, IPeriod, IReference } from '../../interfaces/datatypes';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';
import BackboneElement from '../base/BackboneElement';
import PatientContactBuilder from './PatientContactBuilder';

export default class PatientContact extends BackboneElement implements IPatientContact {
  // PatientContact attributes
  relationship: ICodeableConcept[];
  name: IHumanName;
  telecom: IContactPoint[];
  address: IAddress;
  gender: AdministrativeGenderEnum | AdministrativeGenderType;
  _gender: IElement;
  organization: IReference;
  period: IPeriod;

  static builder(): PatientContactBuilder {
    return new PatientContactBuilder();
  }

  toJson(): PatientContact {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return ` PatientContact${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return ` PatientContact${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args?: IPatientContact) {
    super();
    Object.assign(this, args);
  }
}
