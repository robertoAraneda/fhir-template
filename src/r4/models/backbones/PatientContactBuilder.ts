import { IBuildable } from '../../../globals/interfaces';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElementBuilder } from '../base/ElementBuilder';
import { IElement } from '../../interfaces/base';
import { ICodeableConcept, IContactPoint, IHumanName, IPeriod, IReference } from '../../interfaces/datatypes';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';
import PatientContact from './PatientContact';

export interface IPatientContactBuilder
  extends IBuildable<PatientContact>,
    IBackboneElementBuilder<PatientContactBuilder>,
    IElementBuilder<PatientContactBuilder> {
  addParamExtension(param: 'gender', extension: IElement): PatientContactBuilder;

  addRelationship(relationship: ICodeableConcept): PatientContactBuilder;

  setMultipleRelationship(relationship: ICodeableConcept[]): PatientContactBuilder;

  setName(name: IHumanName): PatientContactBuilder;

  addTelecom(telecom: IContactPoint): PatientContactBuilder;

  setMultipleTelecom(telecom: IContactPoint[]): PatientContactBuilder;

  setGender(gender: AdministrativeGenderEnum | AdministrativeGenderType): PatientContactBuilder;

  setOrganization(organization: IReference): PatientContactBuilder;

  setPeriod(period: IPeriod): PatientContactBuilder;
}

export class PatientContactBuilder
  extends BackboneElementBuilder<PatientContactBuilder>
  implements IPatientContactBuilder
{
  private readonly patientContact: PatientContact;

  constructor() {
    super();
    this.patientContact = new PatientContact();
  }

  addParamExtension(param: 'gender', extension: IElement): PatientContactBuilder {
    this.patientContact[`_${param}`] = extension;
    return this;
  }

  addRelationship(relationship: ICodeableConcept): PatientContactBuilder {
    this.patientContact.relationship = this.patientContact.relationship || [];
    this.patientContact.relationship.push(relationship);
    return this;
  }

  setMultipleRelationship(relationship: ICodeableConcept[]): PatientContactBuilder {
    this.patientContact.relationship = relationship;
    return this;
  }

  setName(name: IHumanName): PatientContactBuilder {
    this.patientContact.name = name;
    return this;
  }

  addTelecom(telecom: IContactPoint): PatientContactBuilder {
    this.patientContact.telecom = this.patientContact.telecom || [];
    this.patientContact.telecom.push(telecom);
    return this;
  }

  setMultipleTelecom(telecom: IContactPoint[]): PatientContactBuilder {
    this.patientContact.telecom = telecom;
    return this;
  }

  setGender(gender: AdministrativeGenderEnum | AdministrativeGenderType): PatientContactBuilder {
    this.patientContact.gender = gender;
    return this;
  }

  setOrganization(organization: IReference): PatientContactBuilder {
    this.patientContact.organization = organization;
    return this;
  }

  setPeriod(period: IPeriod): PatientContactBuilder {
    this.patientContact.period = period;
    return this;
  }

  build(): PatientContact {
    Object.assign(this.patientContact, { ...super.entity() });
    return this.patientContact.toJson();
  }
}
