import { IPersonCommunication, IPersonLink, IPatientCommunication } from '../../interfaces/backbones';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';
import {
  IIdentifier,
  ICodeableConcept,
  IHumanName,
  IAttachment,
  IContactPoint,
  IReference,
} from '../../interfaces/datatypes';
import { IElement, IBuildable, ISerializable } from '../../interfaces/base';
import { DomainResourceBuilder } from '../base/DomainResourceBuilder';
import { Person } from '../../models/resources';
import { IPerson } from '../../interfaces/resources';

type ParamType =
  | 'active'
  | 'birthDate'
  | 'gender'
  | 'multipleBirthBoolean'
  | 'multipleBirthInteger'
  | 'deceasedBoolean'
  | 'deceasedDateTime';

export class PersonBuilder extends DomainResourceBuilder<PersonBuilder> implements IBuildable<Person>, ISerializable {
  private readonly person: IPerson;
  constructor() {
    super();
    this.person = new Person();
  }

  addPersonParamExtension(param: ParamType, extension: IElement): PersonBuilder {
    this.person[`_${param}`] = extension;
    return this;
  }

  addName(name: IHumanName): PersonBuilder {
    this.person.name = this.person.name || [];
    this.person.name.push(name);
    return this;
  }

  addMultipleName(names: IHumanName[]): PersonBuilder {
    this.person.name = names;
    return this;
  }

  setActive(active: boolean): PersonBuilder {
    this.person.active = active;
    return this;
  }

  addIdentifier(identifier: IIdentifier): PersonBuilder {
    this.person.identifier = this.person.identifier || [];
    this.person.identifier.push(identifier);
    return this;
  }

  setMultipleIdentifier(identifiers: IIdentifier[]): PersonBuilder {
    this.person.identifier = identifiers;
    return this;
  }

  addTelecom(telecom: IContactPoint): PersonBuilder {
    this.person.telecom = this.person.telecom || [];
    this.person.telecom.push(telecom);
    return this;
  }

  setMultipleTelecom(telecoms: IContactPoint[]): PersonBuilder {
    this.person.telecom = telecoms;
    return this;
  }

  setGender(gender: AdministrativeGenderEnum | AdministrativeGenderType): PersonBuilder {
    this.person.gender = gender;
    return this;
  }

  setBirthDate(birthDate: string): PersonBuilder {
    this.person.birthDate = birthDate;
    return this;
  }

  setMaritalStatus(maritalStatus: ICodeableConcept): PersonBuilder {
    this.person.maritalStatus = maritalStatus;
    return this;
  }

  addLink(link: IPersonLink): PersonBuilder {
    if (typeof link.target.reference === 'string') {
      const target = link.target.reference as string;
      if (
        !target.startsWith('Patient/') &&
        !target.startsWith('Practitioner/') &&
        !target.startsWith('RelatedPerson/') &&
        !target.startsWith('Person/')
      ) {
        throw new Error('Link.other.reference must start with Patient/ or Practitioner/ or RelatedPerson/ or Person/');
      }
    }

    this.person.link = this.person.link || [];
    this.person.link.push(link);
    return this;
  }

  setMultipleLinks(links: IPersonLink[]): PersonBuilder {
    this.person.link = links;

    return this;
  }

  setMultipleBirth<T extends boolean | number>(multipleBirth: T): PersonBuilder {
    if (typeof multipleBirth === 'boolean') {
      this.person.multipleBirthBoolean = multipleBirth;
      this.person.multipleBirthInteger = undefined;
    } else {
      this.person.multipleBirthInteger = multipleBirth;
      this.person.multipleBirthBoolean = undefined;
    }

    return this;
  }

  setManagingOrganization(args: IReference): PersonBuilder {
    if (typeof args.reference === 'string' && !args.reference.startsWith('Organization/')) {
      throw new Error('Managing organization reference must start with Organization/');
    }

    this.person.managingOrganization = args;
    return this;
  }

  addCommunication(communication: IPatientCommunication): PersonBuilder {
    this.person.communication = this.person.communication || [];
    this.person.communication.push(communication);
    return this;
  }

  setMultipleCommunications(communications: IPersonCommunication[]): PersonBuilder {
    this.person.communication = communications;
    return this;
  }

  addPhoto(attachment: IAttachment): PersonBuilder {
    this.person.photo = this.person.photo || [];
    this.person.photo.push(attachment);
    return this;
  }

  setMultiplePhoto(attachments: IAttachment[]): PersonBuilder {
    this.person.photo = attachments;
    return this;
  }

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  build() {
    return JSON.parse(this.serialize());
  }

  raw(): Person {
    return {
      ...this.person,
      ...super.entity(),
    };
  }
}
