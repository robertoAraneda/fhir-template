import { Practitioner } from '../../interfaces/resources';
import { Buildable, Serializable, Element } from '../../interfaces/base';
import { ContactPoint, Attachment, HumanName, Identifier, Address } from '../../interfaces/datatypes';
import { PractitionerQualification, PractitionerCommunication } from '../../interfaces/backbones';
import { AdministrativeGender } from '../../enums/AdministrativeGender';
import { AdministrativeGenderType } from '../../types/AdministrativeGenderType';
import { validateReference } from '../../helpers/validateReference';
import { DomainResourceBuilder } from '../base/DomainResourceBuilder';

type ParamType = 'active' | 'birthDate' | 'deceasedBoolean' | 'deceasedDateTime';

export class PractitionerBuilder
  extends DomainResourceBuilder<PractitionerBuilder>
  implements Buildable<Practitioner>, Serializable
{
  private readonly practitioner: Practitioner;

  constructor() {
    super();

    this.practitioner = {} as Practitioner;
    this.practitioner.resourceType = 'Practitioner';
  }

  addPractitionerParamExtension(param: ParamType, extension: Element): PractitionerBuilder {
    this.practitioner[`_${param}`] = extension;
    return this;
  }

  addIdentifier(identifier: Identifier): PractitionerBuilder {
    this.practitioner.identifier = this.practitioner.identifier || [];
    this.practitioner.identifier.push(identifier);
    return this;
  }

  addName(name: HumanName): PractitionerBuilder {
    this.practitioner.name = this.practitioner.name || [];
    this.practitioner.name.push(name);
    return this;
  }

  addTelecom(telecom: ContactPoint): PractitionerBuilder {
    this.practitioner.telecom = this.practitioner.telecom || [];
    this.practitioner.telecom.push(telecom);
    return this;
  }

  addAddress(address: Address): PractitionerBuilder {
    this.practitioner.address = this.practitioner.address || [];
    this.practitioner.address.push(address);
    return this;
  }

  addPhoto(photo: Attachment): PractitionerBuilder {
    this.practitioner.photo = this.practitioner.photo || [];
    this.practitioner.photo.push(photo);
    return this;
  }

  addQualification(qualification: PractitionerQualification): PractitionerBuilder {
    if (qualification.issuer?.reference) {
      validateReference(qualification.issuer.reference, ['Organization']);
    }

    if (qualification.identifier) {
      qualification.identifier.forEach((identifier) => {
        if (identifier.assigner?.reference) {
          validateReference(identifier.assigner.reference, ['Organization']);
        }
      });
    }

    this.practitioner.qualification = this.practitioner.qualification || [];
    this.practitioner.qualification.push(qualification);
    return this;
  }

  addCommunication(communication: PractitionerCommunication): PractitionerBuilder {
    this.practitioner.communication = this.practitioner.communication || [];
    this.practitioner.communication.push(communication);
    return this;
  }

  setMultipleIdentifier(identifier: Identifier[]): PractitionerBuilder {
    this.practitioner.identifier = identifier;
    return this;
  }

  setMultipleName(name: HumanName[]): PractitionerBuilder {
    this.practitioner.name = name;
    return this;
  }

  setMultipleTelecom(telecom: ContactPoint[]): PractitionerBuilder {
    this.practitioner.telecom = telecom;
    return this;
  }

  setMultipleAddress(address: Address[]): PractitionerBuilder {
    this.practitioner.address = address;
    return this;
  }

  setMultiplePhoto(photo: Attachment[]): PractitionerBuilder {
    this.practitioner.photo = photo;
    return this;
  }

  setMultipleQualification(qualification: PractitionerQualification[]): PractitionerBuilder {
    this.practitioner.qualification = qualification;
    return this;
  }

  setMultipleCommunication(communication: PractitionerCommunication[]): PractitionerBuilder {
    this.practitioner.communication = communication;
    return this;
  }

  setDeceased<R extends boolean | string>(deceased: R): PractitionerBuilder {
    if (typeof deceased === 'string') {
      this.practitioner.deceasedDateTime = deceased;
      this.practitioner.deceasedBoolean = undefined;
    } else if (typeof deceased === 'boolean') {
      this.practitioner.deceasedBoolean = deceased;
      this.practitioner.deceasedDateTime = undefined;
    }

    return this;
  }

  setActive(active: boolean): PractitionerBuilder {
    this.practitioner.active = active;
    return this;
  }

  setBirthDate(birthDate: string): PractitionerBuilder {
    this.practitioner.birthDate = birthDate;
    return this;
  }

  setGender(gender: AdministrativeGender | AdministrativeGenderType): PractitionerBuilder {
    this.practitioner.gender = gender;

    return this;
  }

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  build(): Practitioner {
    return JSON.parse(this.serialize());
  }

  raw(): Practitioner {
    return {
      ...this.practitioner,
      ...super.entity(),
    };
  }
}
