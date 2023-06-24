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
import { DomainResourceBuilder, IDomainResourceBuilder } from '../base/DomainResourceBuilder';
import { Person } from './index';
import { validateReferenceHelper } from '../../../globals/helpers/validateReferenceHelper';
import { IBuildable } from '../../../globals/interfaces';
import { IResourceBuilder } from '../base/ResourceBuilder';
import { IElement } from '../../interfaces/base';

type ParamExtensionType = 'active' | 'birthDate' | 'gender' | 'deceasedBoolean' | 'deceasedDateTime';

interface IPersonBuilder
  extends IBuildable<Person>,
    IDomainResourceBuilder<PersonBuilder>,
    IResourceBuilder<PersonBuilder> {
  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): PersonBuilder;
  addName(name: IHumanName): PersonBuilder;
  addMultipleName(names: IHumanName[]): PersonBuilder;
  setActive(active: boolean): PersonBuilder;
  addIdentifier(identifier: IIdentifier): PersonBuilder;
  setMultipleIdentifier(identifiers: IIdentifier[]): PersonBuilder;
  addTelecom(telecom: IContactPoint): PersonBuilder;
  setMultipleTelecom(telecoms: IContactPoint[]): PersonBuilder;
  setGender(gender: AdministrativeGenderEnum | AdministrativeGenderType): PersonBuilder;
  setBirthDate(birthDate: string): PersonBuilder;
  setMaritalStatus(maritalStatus: ICodeableConcept): PersonBuilder;
  addLink(link: IPersonLink): PersonBuilder;
  setMultipleLink(links: IPersonLink[]): PersonBuilder;
  setManagingOrganization(managingOrganization: IReference): PersonBuilder;
  addCommunication(communication: IPersonCommunication): PersonBuilder;
  setMultipleCommunication(communications: IPersonCommunication[]): PersonBuilder;
  addPhoto(photo: IAttachment): PersonBuilder;
  setMultiplePhoto(photos: IAttachment[]): PersonBuilder;
}

export default class PersonBuilder extends DomainResourceBuilder<PersonBuilder> implements IPersonBuilder {
  private readonly person: Person;
  constructor() {
    super();
    this.person = new Person();
  }

  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): PersonBuilder {
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
    if (identifier.assigner?.reference) {
      validateReferenceHelper(identifier.assigner.reference, ['Organization']);
    }

    this.person.identifier = this.person.identifier || [];
    this.person.identifier.push(identifier);
    return this;
  }

  setMultipleIdentifier(identifiers: IIdentifier[]): PersonBuilder {
    for (const identifier of identifiers) {
      if (identifier.assigner?.reference) {
        validateReferenceHelper(identifier.assigner.reference, ['Organization']);
      }
    }
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
    if (link.target?.reference) {
      validateReferenceHelper(link.target.reference, ['Patient', 'Practitioner', 'RelatedPerson', 'Person']);
    }

    this.person.link = this.person.link || [];
    this.person.link.push(link);
    return this;
  }

  setMultipleLink(links: IPersonLink[]): PersonBuilder {
    this.person.link = links;

    return this;
  }

  setManagingOrganization(args: IReference): PersonBuilder {
    if (args.reference) {
      validateReferenceHelper(args.reference, ['Organization']);
    }

    this.person.managingOrganization = args;
    return this;
  }

  addCommunication(communication: IPatientCommunication): PersonBuilder {
    this.person.communication = this.person.communication || [];
    this.person.communication.push(communication);
    return this;
  }

  setMultipleCommunication(communications: IPersonCommunication[]): PersonBuilder {
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

  build(): Person {
    Object.assign(this.person, { ...super.entity() });
    return this.person.toJson();
  }
}
