import { IPractitioner } from '../../interfaces/resources';
import { IBuildable, ISerializable, IElement } from '../../interfaces/base';
import { IContactPoint, IAttachment, IHumanName, IIdentifier, IAddress } from '../../interfaces/datatypes';
import { IPractitionerQualification, IPractitionerCommunication } from '../../interfaces/backbones';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';
import { validateReference } from '../../helpers/validateReference';
import { DomainResourceBuilder } from '../base/DomainResourceBuilder';
import { Practitioner } from '../../models/resources';

type ParamType = 'active' | 'birthDate' | 'deceasedBoolean' | 'deceasedDateTime';

interface IPractitionerBuilder extends IBuildable<IPractitioner>, ISerializable {
  addParamExtension(param: ParamType, extension: IElement): IPractitionerBuilder;
  addIdentifier(identifier: IIdentifier): IPractitionerBuilder;
  addName(name: IHumanName): IPractitionerBuilder;
  addTelecom(telecom: IContactPoint): IPractitionerBuilder;
  addAddress(address: IAddress): IPractitionerBuilder;
  addPhoto(photo: IAttachment): IPractitionerBuilder;
  addQualification(qualification: IPractitionerQualification): IPractitionerBuilder;
  addCommunication(communication: IPractitionerCommunication): IPractitionerBuilder;
  setMultipleIdentifier(identifiers: IIdentifier[]): IPractitionerBuilder;
  setMultipleName(names: IHumanName[]): IPractitionerBuilder;
  setMultipleTelecom(telecoms: IContactPoint[]): IPractitionerBuilder;
  setMultipleAddress(addresses: IAddress[]): IPractitionerBuilder;
  setMultiplePhoto(photos: IAttachment[]): IPractitionerBuilder;
  setMultipleQualification(qualifications: IPractitionerQualification[]): IPractitionerBuilder;
  setMultipleCommunication(communications: IPractitionerCommunication[]): IPractitionerBuilder;
  setDeceased<R extends boolean | string>(deceased: R): IPractitionerBuilder;
  setActive(active: boolean): IPractitionerBuilder;
  setBirthDate(birthDate: string): IPractitionerBuilder;
  setGender(gender: AdministrativeGenderEnum | AdministrativeGenderType): IPractitionerBuilder;
}

export default class PractitionerBuilder
  extends DomainResourceBuilder<PractitionerBuilder>
  implements IPractitionerBuilder
{
  private readonly practitioner: IPractitioner;

  constructor() {
    super();

    this.practitioner = new Practitioner();
  }

  addParamExtension(param: ParamType, extension: IElement): PractitionerBuilder {
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

  setGender(gender: AdministrativeGenderEnum | AdministrativeGenderType): PractitionerBuilder {
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
