import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IBuildable, ISerializable, IElement } from '../../interfaces/base';
import { IPatientContact } from '../../interfaces/backbones';
import { ICodeableConcept, IHumanName, IContactPoint, IPeriod, IReference } from '../../interfaces/datatypes';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';
import { PatientContact } from '../../models/backbones';

interface IPatientContactBuilder extends IBuildable<IPatientContact>, ISerializable {
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

export default class PatientContactBuilder
  extends BackboneElementBuilder<PatientContactBuilder>
  implements IPatientContactBuilder
{
  private readonly patientContact: IPatientContact;

  constructor() {
    super();
    this.patientContact = new PatientContact();
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

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  build(): IPatientContact {
    return JSON.parse(JSON.stringify(this.raw()));
  }

  raw(): IPatientContact {
    return {
      ...this.patientContact,
      ...super.entity(),
    };
  }
}
