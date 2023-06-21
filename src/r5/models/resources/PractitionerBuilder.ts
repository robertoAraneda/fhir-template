import { IPractitioner } from '../../interfaces/resources';
import { IContactPoint, IAttachment, IHumanName, IIdentifier, IAddress } from '../../interfaces/datatypes';
import { IPractitionerQualification, IPractitionerCommunication } from '../../interfaces/backbones';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';
import { validateReference } from '../../helpers/validateReference';
import { DomainResourceBuilder, IDomainResourceBuilder } from '../base/DomainResourceBuilder';
import { Practitioner } from './index';
import { IBuildable } from '../../../globals/interfaces';
import { IResourceBuilder } from '../base/ResourceBuilder';
import { IElement } from '../../interfaces/base';

type ParamExtensionType = 'active' | 'birthDate' | 'deceasedBoolean' | 'deceasedDateTime';

interface IPractitionerBuilder
  extends IBuildable<Practitioner>,
    IDomainResourceBuilder<PractitionerBuilder>,
    IResourceBuilder<PractitionerBuilder> {
  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): PractitionerBuilder;
  addIdentifier(identifier: IIdentifier): PractitionerBuilder;
  addName(name: IHumanName): PractitionerBuilder;
  addTelecom(telecom: IContactPoint): PractitionerBuilder;
  addAddress(address: IAddress): PractitionerBuilder;
  addPhoto(photo: IAttachment): PractitionerBuilder;
  addQualification(qualification: IPractitionerQualification): PractitionerBuilder;
  addCommunication(communication: IPractitionerCommunication): PractitionerBuilder;
  setMultipleIdentifier(identifiers: IIdentifier[]): PractitionerBuilder;
  setMultipleName(names: IHumanName[]): PractitionerBuilder;
  setMultipleTelecom(telecoms: IContactPoint[]): PractitionerBuilder;
  setMultipleAddress(addresses: IAddress[]): PractitionerBuilder;
  setMultiplePhoto(photos: IAttachment[]): PractitionerBuilder;
  setMultipleQualification(qualifications: IPractitionerQualification[]): PractitionerBuilder;
  setMultipleCommunication(communications: IPractitionerCommunication[]): PractitionerBuilder;
  setDeceasedBoolean(deceasedBoolean: boolean): PractitionerBuilder;
  setDeceasedDateTime(deceasedDateTime: string): PractitionerBuilder;
  setActive(active: boolean): PractitionerBuilder;
  setBirthDate(birthDate: string): PractitionerBuilder;
  setGender(gender: AdministrativeGenderEnum | AdministrativeGenderType): PractitionerBuilder;
}

export default class PractitionerBuilder
  extends DomainResourceBuilder<PractitionerBuilder>
  implements IPractitionerBuilder
{
  private readonly practitioner: Practitioner;

  constructor() {
    super();

    this.practitioner = new Practitioner();
  }

  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): PractitionerBuilder {
    this.practitioner[`_${param}`] = extension;
    return this;
  }

  addIdentifier(identifier: IIdentifier): PractitionerBuilder {
    this.practitioner.identifier = this.practitioner.identifier || [];
    this.practitioner.identifier.push(identifier);
    return this;
  }

  addName(name: IHumanName): PractitionerBuilder {
    this.practitioner.name = this.practitioner.name || [];
    this.practitioner.name.push(name);
    return this;
  }

  addTelecom(telecom: IContactPoint): PractitionerBuilder {
    this.practitioner.telecom = this.practitioner.telecom || [];
    this.practitioner.telecom.push(telecom);
    return this;
  }

  addAddress(address: IAddress): PractitionerBuilder {
    this.practitioner.address = this.practitioner.address || [];
    this.practitioner.address.push(address);
    return this;
  }

  addPhoto(photo: IAttachment): PractitionerBuilder {
    this.practitioner.photo = this.practitioner.photo || [];
    this.practitioner.photo.push(photo);
    return this;
  }

  addQualification(qualification: IPractitionerQualification): PractitionerBuilder {
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

  addCommunication(communication: IPractitionerCommunication): PractitionerBuilder {
    this.practitioner.communication = this.practitioner.communication || [];
    this.practitioner.communication.push(communication);
    return this;
  }

  setMultipleIdentifier(identifier: IIdentifier[]): PractitionerBuilder {
    this.practitioner.identifier = identifier;
    return this;
  }

  setMultipleName(name: IHumanName[]): PractitionerBuilder {
    this.practitioner.name = name;
    return this;
  }

  setMultipleTelecom(telecom: IContactPoint[]): PractitionerBuilder {
    this.practitioner.telecom = telecom;
    return this;
  }

  setMultipleAddress(address: IAddress[]): PractitionerBuilder {
    this.practitioner.address = address;
    return this;
  }

  setMultiplePhoto(photo: IAttachment[]): PractitionerBuilder {
    this.practitioner.photo = photo;
    return this;
  }

  setMultipleQualification(qualification: IPractitionerQualification[]): PractitionerBuilder {
    this.practitioner.qualification = qualification;
    return this;
  }

  setMultipleCommunication(communication: IPractitionerCommunication[]): PractitionerBuilder {
    this.practitioner.communication = communication;
    return this;
  }

  setDeceasedBoolean(deceasedBoolean: boolean): PractitionerBuilder {
    this.practitioner.deceasedBoolean = deceasedBoolean;
    return this;
  }

  setDeceasedDateTime(deceasedDateTime: string): PractitionerBuilder {
    this.practitioner.deceasedDateTime = deceasedDateTime;
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

  setGender(gender: AdministrativeGenderEnum | AdministrativeGenderType): PractitionerBuilder {
    this.practitioner.gender = gender;

    return this;
  }

  build(): Practitioner {
    Object.assign(this.practitioner, { ...super.entity() });
    return this.practitioner.toJson();
  }
}
