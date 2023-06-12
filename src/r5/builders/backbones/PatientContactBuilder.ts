import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IBuildable, ISerializable, IElement } from '../../interfaces/base';
import { IOrganizationQualification } from '../../interfaces/backbones';
import { IPatientContact } from '../../interfaces/backbones';
import { ICodeableConcept, IHumanName, IContactPoint, IPeriod, IReference } from '../../interfaces/datatypes';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';

export class PatientContactBuilder
  extends BackboneElementBuilder<PatientContactBuilder>
  implements IBuildable<IPatientContact>, ISerializable
{
  private readonly patientContact: IPatientContact;

  constructor() {
    super();
    this.patientContact = {} as IPatientContact;
  }

  addPatientContactParamExtension(param: 'gender', extension: IElement): PatientContactBuilder {
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

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  build(): IOrganizationQualification {
    return JSON.parse(JSON.stringify(this.raw()));
  }

  raw(): IPatientContact {
    return {
      ...this.patientContact,
      ...super.entity(),
    };
  }
}
