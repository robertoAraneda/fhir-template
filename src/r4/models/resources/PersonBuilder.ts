import { IBuildable } from '../../../globals/interfaces';
import { DomainResourceBuilder, IDomainResourceBuilder } from '../base/DomainResourceBuilder';
import { IResourceBuilder } from '../base/ResourceBuilder';
import { IElement } from '../../interfaces/base';
import { IAddress, IAttachment, IContactPoint, IHumanName, IIdentifier, IReference } from '../../interfaces/datatypes';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';
import { IPersonLink } from '../../interfaces/backbones';
import { validateReference } from '../../../globals/helpers/validateReference';
import Person from './Person';

type ParamExtensionType = 'implicitRules' | 'language' | 'active' | 'birthDate' | 'gender';

export interface IPersonBuilder
  extends IBuildable<Person>,
    IDomainResourceBuilder<PersonBuilder>,
    IResourceBuilder<PersonBuilder> {
  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): PersonBuilder;

  addIdentifier(identifier: IIdentifier): PersonBuilder;

  setMultipleIdentifier(identifiers: IIdentifier[]): PersonBuilder;

  addName(name: IHumanName): PersonBuilder;

  setMultipleName(names: IHumanName[]): PersonBuilder;

  addTelecom(telecom: IContactPoint): PersonBuilder;

  setMultipleTelecom(telecoms: IContactPoint[]): PersonBuilder;

  setGender(gender: AdministrativeGenderEnum | AdministrativeGenderType): PersonBuilder;

  setBirthDate(birthDate: string): PersonBuilder;

  addAddress(address: IAddress): PersonBuilder;

  setMultipleAddress(addresses: IAddress[]): PersonBuilder;

  setPhoto(photo: IAttachment): PersonBuilder;

  setManagingOrganization(managingOrganization: IReference): PersonBuilder;

  setActive(active: boolean): PersonBuilder;

  addLink(link: IPersonLink): PersonBuilder;

  setMultipleLink(links: IPersonLink[]): PersonBuilder;
}

export class PersonBuilder extends DomainResourceBuilder<PersonBuilder> implements IPersonBuilder {
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

  addLink(link: IPersonLink): PersonBuilder {
    if (link.target?.reference) {
      validateReference(link.target.reference, ['Patient', 'Practitioner', 'RelatedPerson', 'Person']);
    }

    this.person.link = this.person.link || [];
    this.person.link.push(link);
    return this;
  }

  setManagingOrganization(args: IReference): PersonBuilder {
    if (args.reference) validateReference(args.reference, ['Organization']);

    this.person.managingOrganization = args;
    return this;
  }

  addAddress(address: IAddress): PersonBuilder {
    this.person.address = this.person.address || [];
    this.person.address.push(address);
    return this;
  }

  setMultipleAddress(addresses: IAddress[]): PersonBuilder {
    this.person.address = addresses;
    return this;
  }

  setMultipleLink(links: IPersonLink[]): PersonBuilder {
    for (const link of links) {
      if (link.target?.reference) {
        validateReference(link.target.reference, ['Patient', 'Practitioner', 'RelatedPerson', 'Person']);
      }
    }
    this.person.link = links;
    return this;
  }

  setMultipleName(names: IHumanName[]): PersonBuilder {
    this.person.name = names;
    return this;
  }

  setPhoto(photo: IAttachment): PersonBuilder {
    this.person.photo = photo;
    return this;
  }

  build(): Person {
    Object.assign(this.person, { ...super.entity() });
    return this.person.toJson();
  }
}
