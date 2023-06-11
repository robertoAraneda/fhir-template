import { IPersonLink } from '../../interfaces/backbones';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';
import { IIdentifier, IHumanName, IAttachment, IContactPoint, IAddress, IReference } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { DomainResourceBuilder } from '../base/DomainResourceBuilder';
import { Person } from '../../models/resources';
import { IPerson } from '../../interfaces/resources';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { validateReference } from '../../../globals/helpers/validateReference';

type ParamType = 'implicitRules' | 'language' | 'active' | 'birthDate' | 'gender';

interface IPersonBuilder extends IBuildable<IPerson>, ISerializable {
  addParamExtension(param: ParamType, extension: IElement): this;
  addIdentifier(identifier: IIdentifier): this;
  setMultipleIdentifier(identifiers: IIdentifier[]): this;
  addName(name: IHumanName): this;
  setMultipleName(names: IHumanName[]): this;
  addTelecom(telecom: IContactPoint): this;
  setMultipleTelecom(telecoms: IContactPoint[]): this;
  setGender(gender: AdministrativeGenderEnum | AdministrativeGenderType): this;
  setBirthDate(birthDate: string): this;
  addAddress(address: IAddress): this;
  setMultipleAddress(addresses: IAddress[]): this;
  setPhoto(photo: IAttachment): this;
  setManagingOrganization(managingOrganization: IReference): this;
  setActive(active: boolean): this;
  addLink(link: IPersonLink): this;
  setMultipleLink(links: IPersonLink[]): this;
}
export class PersonBuilder extends DomainResourceBuilder<PersonBuilder> implements IPersonBuilder {
  private readonly person: IPerson;
  constructor() {
    super();
    this.person = new Person();
  }

  addParamExtension(param: ParamType, extension: IElement): this {
    this.person[`_${param}`] = extension;
    return this;
  }

  addName(name: IHumanName): this {
    this.person.name = this.person.name || [];
    this.person.name.push(name);
    return this;
  }

  setActive(active: boolean): this {
    this.person.active = active;
    return this;
  }

  addIdentifier(identifier: IIdentifier): this {
    this.person.identifier = this.person.identifier || [];
    this.person.identifier.push(identifier);
    return this;
  }

  setMultipleIdentifier(identifiers: IIdentifier[]): this {
    this.person.identifier = identifiers;
    return this;
  }

  addTelecom(telecom: IContactPoint): this {
    this.person.telecom = this.person.telecom || [];
    this.person.telecom.push(telecom);
    return this;
  }

  setMultipleTelecom(telecoms: IContactPoint[]): this {
    this.person.telecom = telecoms;
    return this;
  }

  setGender(gender: AdministrativeGenderEnum | AdministrativeGenderType): this {
    this.person.gender = gender;
    return this;
  }

  setBirthDate(birthDate: string): this {
    this.person.birthDate = birthDate;
    return this;
  }

  addLink(link: IPersonLink): this {
    if (link.target?.reference) {
      validateReference(link.target.reference, ['Patient', 'Practitioner', 'RelatedPerson', 'Person']);
    }

    this.person.link = this.person.link || [];
    this.person.link.push(link);
    return this;
  }

  setManagingOrganization(args: IReference): this {
    if (args.reference) validateReference(args.reference, ['Organization']);

    this.person.managingOrganization = args;
    return this;
  }

  addAddress(address: IAddress): this {
    this.person.address = this.person.address || [];
    this.person.address.push(address);
    return this;
  }

  setMultipleAddress(addresses: IAddress[]): this {
    this.person.address = addresses;
    return this;
  }

  setMultipleLink(links: IPersonLink[]): this {
    for (const link of links) {
      if (link.target?.reference) {
        validateReference(link.target.reference, ['Patient', 'Practitioner', 'RelatedPerson', 'Person']);
      }
    }
    this.person.link = links;
    return this;
  }

  setMultipleName(names: IHumanName[]): this {
    this.person.name = names;
    return this;
  }

  setPhoto(photo: IAttachment): this {
    this.person.photo = photo;
    return this;
  }

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  build(): Person {
    return JSON.parse(this.serialize());
  }

  raw(): Person {
    return {
      ...this.person,
      ...super.entity(),
    };
  }
}
