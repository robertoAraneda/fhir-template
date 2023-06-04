import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { Buildable, Serializable, Element, Reference } from '../../interfaces/base';
import { OrganizationQualification } from '../../interfaces/backbones';
import { PatientContact } from '../../interfaces/backbones';
import { CodeableConcept, HumanName, ContactPoint, Period } from '../../interfaces/datatypes';
import { AdministrativeGender } from '../../enums/AdministrativeGender';
import { AdministrativeGenderType } from '../../types/AdministrativeGenderType';

export class PatientContactBuilder
  extends BackboneElementBuilder<PatientContactBuilder>
  implements Buildable<PatientContact>, Serializable
{
  private readonly patientContact: PatientContact;

  constructor() {
    super();
    this.patientContact = {} as PatientContact;
  }

  addPatientContactParamExtension(param: 'gender', extension: Element): PatientContactBuilder {
    this.patientContact[`_${param}`] = extension;
    return this;
  }

  addRelationship(relationship: CodeableConcept): PatientContactBuilder {
    this.patientContact.relationship = this.patientContact.relationship || [];
    this.patientContact.relationship.push(relationship);
    return this;
  }

  setMultipleRelationship(relationship: CodeableConcept[]): PatientContactBuilder {
    this.patientContact.relationship = relationship;
    return this;
  }

  setName(name: HumanName): PatientContactBuilder {
    this.patientContact.name = name;
    return this;
  }

  addTelecom(telecom: ContactPoint): PatientContactBuilder {
    this.patientContact.telecom = this.patientContact.telecom || [];
    this.patientContact.telecom.push(telecom);
    return this;
  }

  setMultipleTelecom(telecom: ContactPoint[]): PatientContactBuilder {
    this.patientContact.telecom = telecom;
    return this;
  }

  setGender(gender: AdministrativeGender | AdministrativeGenderType): PatientContactBuilder {
    this.patientContact.gender = gender;
    return this;
  }

  setOrganization(organization: Reference): PatientContactBuilder {
    this.patientContact.organization = organization;
    return this;
  }

  setPeriod(period: Period): PatientContactBuilder {
    this.patientContact.period = period;
    return this;
  }

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  build(): OrganizationQualification {
    return JSON.parse(JSON.stringify(this.raw()));
  }

  raw(): PatientContact {
    return {
      ...this.patientContact,
      ...super.entity(),
    };
  }
}
