import { IPractitioner } from '../../interfaces/resources';
import { IElement, IResource } from '../../interfaces/base';
import {
  IAddress,
  IAttachment,
  ICodeableConcept,
  IContactPoint,
  IExtension,
  IHumanName,
  IIdentifier,
  IMeta,
  INarrative,
} from '../../interfaces/datatypes';
import { IPractitionerQualification } from '../../interfaces/backbones';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { DomainResourceBuilder, IDomainResourceBuilder } from '../../builders/base/DomainResourceBuilder';
import { validateReference } from '../../../globals/helpers/validateReference';
import { IResourceBuilder } from '../../builders/base/ResourceBuilder';
import DomainResource from './DomainResource';

export default class Practitioner extends DomainResource implements IPractitioner {
  resourceType = 'Practitioner';

  // Practitioner attributes
  identifier?: IIdentifier[];
  active?: boolean;
  name?: IHumanName[];
  telecom?: IContactPoint[];
  address?: IAddress[];
  gender?: AdministrativeGenderEnum | AdministrativeGenderType;
  birthDate?: string;
  photo?: IAttachment[];
  qualification?: IPractitionerQualification[];
  communication?: ICodeableConcept[];

  _active?: IElement;
  _birthDate?: IElement;
  _gender?: IElement;

  static get resourceType(): string {
    return 'Practitioner';
  }

  static builder(): IPractitionerBuilder {
    return new PractitionerBuilder();
  }

  constructor(args?: Practitioner) {
    super();
    Object.assign(this, args);
  }
}

type ParamType = 'implicitRules' | 'language' | 'active' | 'birthDate' | 'gender';

export interface IPractitionerBuilder
  extends IBuildable<Practitioner>,
    ISerializable,
    IDomainResourceBuilder<IPractitionerBuilder>,
    IResourceBuilder<IPractitionerBuilder> {
  addParamExtension(param: ParamType, extension: IElement): this;
  addIdentifier(identifier: IIdentifier): this;
  addName(name: IHumanName): this;
  addTelecom(telecom: IContactPoint): this;
  addAddress(address: IAddress): this;
  addPhoto(photo: IAttachment): this;
  addQualification(qualification: IPractitionerQualification): this;
  addCommunication(communication: ICodeableConcept): this;
  setMultipleIdentifier(identifier: IIdentifier[]): this;
  setMultipleName(name: IHumanName[]): this;
  setMultipleTelecom(telecom: IContactPoint[]): this;
  setMultipleAddress(address: IAddress[]): this;
  setMultiplePhoto(photo: IAttachment[]): this;
  setMultipleQualification(qualification: IPractitionerQualification[]): this;
  setMultipleCommunication(communication: ICodeableConcept[]): this;
  setGender(gender: AdministrativeGenderEnum | AdministrativeGenderType): this;
  setActive(active: boolean): this;
  setBirthDate(birthDate: string): this;
}

class PractitionerBuilder extends DomainResourceBuilder<PractitionerBuilder> implements IPractitionerBuilder {
  private readonly practitioner: IPractitioner;

  constructor() {
    super();
    this.practitioner = new Practitioner();
  }

  addParamExtension(param: ParamType, extension: IElement): this {
    this.practitioner[`_${param}`] = extension;
    return this;
  }

  addIdentifier(identifier: IIdentifier): this {
    this.practitioner.identifier = this.practitioner.identifier || [];
    this.practitioner.identifier.push(identifier);
    return this;
  }

  addName(name: IHumanName): this {
    this.practitioner.name = this.practitioner.name || [];
    this.practitioner.name.push(name);
    return this;
  }

  addTelecom(telecom: IContactPoint): this {
    this.practitioner.telecom = this.practitioner.telecom || [];
    this.practitioner.telecom.push(telecom);
    return this;
  }

  addAddress(address: IAddress): this {
    this.practitioner.address = this.practitioner.address || [];
    this.practitioner.address.push(address);
    return this;
  }

  addPhoto(photo: IAttachment): this {
    this.practitioner.photo = this.practitioner.photo || [];
    this.practitioner.photo.push(photo);
    return this;
  }

  addQualification(qualification: IPractitionerQualification): this {
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

  addCommunication(communication: ICodeableConcept): this {
    this.practitioner.communication = this.practitioner.communication || [];
    this.practitioner.communication.push(communication);
    return this;
  }

  setMultipleIdentifier(identifier: IIdentifier[]): this {
    this.practitioner.identifier = identifier;
    return this;
  }

  setMultipleName(name: IHumanName[]): this {
    this.practitioner.name = name;
    return this;
  }

  setMultipleTelecom(telecom: IContactPoint[]): this {
    this.practitioner.telecom = telecom;
    return this;
  }

  setMultipleAddress(address: IAddress[]): this {
    this.practitioner.address = address;
    return this;
  }

  setMultiplePhoto(photo: IAttachment[]): this {
    this.practitioner.photo = photo;
    return this;
  }

  setMultipleQualification(qualification: IPractitionerQualification[]): this {
    this.practitioner.qualification = qualification;
    return this;
  }

  setMultipleCommunication(communication: ICodeableConcept[]): this {
    this.practitioner.communication = communication;
    return this;
  }

  setActive(active: boolean): this {
    this.practitioner.active = active;
    return this;
  }

  setBirthDate(birthDate: string): this {
    this.practitioner.birthDate = birthDate;
    return this;
  }

  setGender(gender: AdministrativeGenderEnum | AdministrativeGenderType): this {
    this.practitioner.gender = gender;

    return this;
  }

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault(), null, 2);
  }

  build(): Practitioner {
    return JSON.parse(this.buildAsString());
  }

  compileAsDefault(): Practitioner {
    return {
      ...this.practitioner,
      ...super.entity(),
    };
  }
}
