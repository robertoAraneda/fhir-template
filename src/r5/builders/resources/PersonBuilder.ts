import { Person } from '../../interfaces/resources/Person';
import { PersonCommunication } from '../../interfaces/backbones/PersonCommunication';
import { AdministrativeGender } from '../../enums/AdministrativeGender';
import { AdministrativeGenderType } from '../../types/AdministrativeGenderType';
import { Identifier } from '../../interfaces/datatypes/Identifier';
import { PersonLink } from '../../interfaces/backbones/PersonLink';
import { Reference } from '../../interfaces/base/Reference';
import { CodeableConcept } from '../../interfaces/datatypes/CodeableConcept';
import { HumanName } from '../../interfaces/datatypes/HumanName';
import { Attachment } from '../../interfaces/datatypes/Attachment';
import { ContactPoint } from '../../interfaces/datatypes/ContactPoint';
import { Element } from '../../interfaces/base/Element';
import { PatientCommunication } from '../../interfaces/backbones/PatientCommunication';
import { Build } from '../../interfaces/base/Build';
import { Serialize } from '../../interfaces/base/Serialize';
import { DomainResourceBuilder } from '../base/DomainResourceBuilder';

type ParamType =
  | 'active'
  | 'birthDate'
  | 'gender'
  | 'multipleBirthBoolean'
  | 'multipleBirthInteger'
  | 'deceasedBoolean'
  | 'deceasedDateTime';

export class PersonBuilder extends DomainResourceBuilder<PersonBuilder> implements Build<Person>, Serialize {
  private readonly person: Person;
  constructor() {
    super();
    this.person = {} as Person;
    this.person.resourceType = 'Person';
  }

  addPersonParamExtension(param: ParamType, extension: Element): PersonBuilder {
    this.person[`_${param}`] = extension;
    return this;
  }

  addName(name: HumanName): PersonBuilder {
    this.person.name = this.person.name || [];
    this.person.name.push(name);
    return this;
  }

  addMultipleName(names: HumanName[]): PersonBuilder {
    this.person.name = names;
    return this;
  }

  setActive(active: boolean): PersonBuilder {
    this.person.active = active;
    return this;
  }

  addIdentifier(identifier: Identifier): PersonBuilder {
    this.person.identifier = this.person.identifier || [];
    this.person.identifier.push(identifier);
    return this;
  }

  setMultipleIdentifier(identifiers: Identifier[]): PersonBuilder {
    this.person.identifier = identifiers;
    return this;
  }

  addTelecom(telecom: ContactPoint): PersonBuilder {
    this.person.telecom = this.person.telecom || [];
    this.person.telecom.push(telecom);
    return this;
  }

  setMultipleTelecom(telecoms: ContactPoint[]): PersonBuilder {
    this.person.telecom = telecoms;
    return this;
  }

  setGender(gender: AdministrativeGender | AdministrativeGenderType): PersonBuilder {
    this.person.gender = gender;
    return this;
  }

  setBirthDate(birthDate: string): PersonBuilder {
    this.person.birthDate = birthDate;
    return this;
  }

  setMaritalStatus(maritalStatus: CodeableConcept): PersonBuilder {
    this.person.maritalStatus = maritalStatus;
    return this;
  }

  addLink(link: PersonLink): PersonBuilder {
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

  setMultipleLinks(links: PersonLink[]): PersonBuilder {
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

  setManagingOrganization(args: Reference): PersonBuilder {
    if (typeof args.reference === 'string' && !args.reference.startsWith('Organization/')) {
      throw new Error('Managing organization reference must start with Organization/');
    }

    this.person.managingOrganization = args;
    return this;
  }

  addCommunication(communication: PatientCommunication): PersonBuilder {
    this.person.communication = this.person.communication || [];
    this.person.communication.push(communication);
    return this;
  }

  setMultipleCommunications(communications: PersonCommunication[]): PersonBuilder {
    this.person.communication = communications;
    return this;
  }

  addPhoto(attachment: Attachment): PersonBuilder {
    this.person.photo = this.person.photo || [];
    this.person.photo.push(attachment);
    return this;
  }

  setMultiplePhoto(attachments: Attachment[]): PersonBuilder {
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
