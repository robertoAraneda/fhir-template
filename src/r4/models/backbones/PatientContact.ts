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
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../../builders/base/BackboneElementBuilder';
import { IElementBuilder } from '../../builders/base/ElementBuilder';
import BackboneElement from './BackboneElement';

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

  // Factory method
  static builder(): PatientContactBuilder {
    return new PatientContactBuilder();
  }

  constructor(args?: IPatientContact) {
    super();
    Object.assign(this, args);
  }
}

export interface IPatientContactBuilder
  extends IBuildable<IPatientContact>,
    ISerializable,
    IBackboneElementBuilder<IPatientContactBuilder>,
    IElementBuilder<IPatientContactBuilder> {
  addParamExtension(param: 'gender', extension: IElement): this;
  addRelationship(relationship: ICodeableConcept): this;
  setMultipleRelationship(relationship: ICodeableConcept[]): this;
  setName(name: IHumanName): this;
  addTelecom(telecom: IContactPoint): this;
  setMultipleTelecom(telecom: IContactPoint[]): this;
  setGender(gender: AdministrativeGenderEnum | AdministrativeGenderType): this;
  setOrganization(organization: IReference): this;
  setPeriod(period: IPeriod): this;
}

class PatientContactBuilder extends BackboneElementBuilder<PatientContactBuilder> implements IPatientContactBuilder {
  private readonly patientContact: IPatientContact;

  constructor() {
    super();
    this.patientContact = {} as IPatientContact;
  }

  addParamExtension(param: 'gender', extension: IElement): this {
    this.patientContact[`_${param}`] = extension;
    return this;
  }

  addRelationship(relationship: ICodeableConcept): this {
    this.patientContact.relationship = this.patientContact.relationship || [];
    this.patientContact.relationship.push(relationship);
    return this;
  }

  setMultipleRelationship(relationship: ICodeableConcept[]): this {
    this.patientContact.relationship = relationship;
    return this;
  }

  setName(name: IHumanName): this {
    this.patientContact.name = name;
    return this;
  }

  addTelecom(telecom: IContactPoint): this {
    this.patientContact.telecom = this.patientContact.telecom || [];
    this.patientContact.telecom.push(telecom);
    return this;
  }

  setMultipleTelecom(telecom: IContactPoint[]): this {
    this.patientContact.telecom = telecom;
    return this;
  }

  setGender(gender: AdministrativeGenderEnum | AdministrativeGenderType): this {
    this.patientContact.gender = gender;
    return this;
  }

  setOrganization(organization: IReference): this {
    this.patientContact.organization = organization;
    return this;
  }

  setPeriod(period: IPeriod): this {
    this.patientContact.period = period;
    return this;
  }

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault(), null, 2);
  }

  build(): PatientContact {
    return JSON.parse(JSON.stringify(this.compileAsDefault()));
  }

  compileAsDefault(): IPatientContact {
    return {
      ...this.patientContact,
      ...super.entity(),
    };
  }
}
