import { CodeableConcept } from '../datatypes/CodeableConcept';
import { HumanName } from '../datatypes/HumanName';
import { ContactPoint } from '../datatypes/ContactPoint';
import { AdministrativeGender } from '../enums/AdministrativeGender';
import { Reference } from '../datatypes/Reference';
import { Organization } from '../resources/Organization';
import { Period } from '../datatypes/Period';
import { AdministrativeGenderType } from '../types/AdministrativeGenderType';
import { PatientContact } from '../backbones/PatientContact';

export class PatientContactBuilder {
  private _relationship: CodeableConcept[];
  private _name: HumanName;
  private _telecom: ContactPoint[];
  private _gender: AdministrativeGender | AdministrativeGenderType;
  private _organization: Reference<Organization | string>;
  private _period: Period;

  setMultipleRelationship(relationship: CodeableConcept[]): PatientContactBuilder {
    this._relationship = relationship;

    return this;
  }

  setRelationship(index: number, relationship: CodeableConcept): PatientContactBuilder {
    if (!this._relationship) this._relationship = [];
    this._relationship[index] = relationship;

    return this;
  }

  addRelationship(relationship: CodeableConcept): PatientContactBuilder {
    if (!this._relationship) this._relationship = [];
    this._relationship.push(relationship);

    return this;
  }

  getRelationship(index: number): CodeableConcept {
    return this._relationship[index];
  }

  getRelationships(): CodeableConcept[] {
    if (!this._relationship) return [];
    return this._relationship;
  }

  setName(name: HumanName): PatientContactBuilder {
    this._name = name;

    return this;
  }

  getName(): HumanName {
    return this._name;
  }

  setMultipleTelecom(telecom: ContactPoint[]): PatientContactBuilder {
    this._telecom = telecom;

    return this;
  }

  setTelecom(index: number, telecom: ContactPoint): PatientContactBuilder {
    if (!this._telecom) this._telecom = [];
    this._telecom[index] = telecom;

    return this;
  }

  addTelecom(telecom: ContactPoint): PatientContactBuilder {
    if (!this._telecom) this._telecom = [];
    this._telecom.push(telecom);

    return this;
  }

  getTelecom(index: number): ContactPoint {
    return this._telecom[index];
  }

  getTelecoms(): ContactPoint[] {
    if (!this._telecom) return [];
    return this._telecom;
  }

  setGender(gender: AdministrativeGender | AdministrativeGenderType): PatientContactBuilder {
    this._gender = gender;

    return this;
  }

  getGender(): AdministrativeGender | AdministrativeGenderType {
    return this._gender;
  }

  setOrganization(organization: Reference<Organization>): PatientContactBuilder {
    this._organization = new Reference<Organization | string>(organization);

    return this;
  }

  getOrganization(): Reference<Organization | string> {
    return this._organization;
  }

  setPeriod(period: Period): PatientContactBuilder {
    this._period = period;

    return this;
  }

  getPeriod(): Period {
    return this._period;
  }

  build(): PatientContact {
    return new PatientContact({
      relationship: this._relationship,
      name: this._name,
      telecom: this._telecom,
      organization: this._organization,
      gender: this._gender,
      period: this._period,
    });
  }
}
