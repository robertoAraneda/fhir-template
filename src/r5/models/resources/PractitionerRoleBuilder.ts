import { DomainResourceBuilder, IDomainResourceBuilder } from '../base/DomainResourceBuilder';
import {
  IIdentifier,
  IPeriod,
  ICodeableConcept,
  IExtendedContactDetail,
  IAvailability,
  IReference,
} from '../../interfaces/datatypes';
import { PractitionerRole } from './index';
import { IBuildable } from '../../../globals/interfaces';
import { IResourceBuilder } from '../base/ResourceBuilder';
import { IElement } from '../../interfaces/base';
import { IPractitionerRole } from '../../interfaces/resources';

interface IPractitionerRoleBuilder
  extends IBuildable<PractitionerRole>,
    IDomainResourceBuilder<PractitionerRoleBuilder>,
    IResourceBuilder<PractitionerRoleBuilder> {
  addParamExtension(param: 'active', extension: IElement): this;
  addIdentifier(identifier: IIdentifier): this;
  setMultipleIdentifier(identifiers: IIdentifier[]): this;
  setActive(active: boolean): this;
  setPeriod(period: IPeriod): this;
  setPractitioner(practitioner: IReference): this;
  setOrganization(organization: IReference): this;
  addCode(code: ICodeableConcept): this;
  setMultipleCode(codes: ICodeableConcept[]): this;
  addSpecialty(specialty: ICodeableConcept): this;
  setMultipleSpecialty(specialties: ICodeableConcept[]): this;
  addLocation(location: IReference): this;
  setMultipleLocation(locations: IReference[]): this;
  addHealthcareService(healthcareService: IReference): this;
  setMultipleHealthcareService(healthcareServices: IReference[]): this;
  addContact(contact: IExtendedContactDetail): this;
  setMultipleContact(contacts: IExtendedContactDetail[]): this;
  addCharacteristic(characteristic: ICodeableConcept): this;
  setMultipleCharacteristic(characteristics: ICodeableConcept[]): this;
  addCommunication(communication: ICodeableConcept): this;
  setMultipleCommunication(communications: ICodeableConcept[]): this;
  addAvailability(avilability: IAvailability): this;
  setMultipleAvailability(avilability: IAvailability[]): this;
  addEndpoint(endpoint: IReference): this;
  setMultipleEndpoint(endpoints: IReference[]): this;
}

export default class PractitionerRoleBuilder
  extends DomainResourceBuilder<PractitionerRoleBuilder>
  implements IPractitionerRoleBuilder
{
  private readonly practitionerRole: IPractitionerRole;

  constructor() {
    super();
    this.practitionerRole = {} as IPractitionerRole;
  }

  addParamExtension(param: 'active', extension: IElement): this {
    this.practitionerRole[`_${param}`] = extension;
    return this;
  }

  addIdentifier(identifier: IIdentifier): this {
    this.practitionerRole.identifier = this.practitionerRole.identifier || [];
    this.practitionerRole.identifier.push(identifier);
    return this;
  }

  setMultipleIdentifier(identifiers: IIdentifier[]): this {
    this.practitionerRole.identifier = identifiers;
    return this;
  }

  setActive(active: boolean): this {
    this.practitionerRole.active = active;
    return this;
  }

  setPeriod(period: IPeriod): this {
    this.practitionerRole.period = period;
    return this;
  }

  setPractitioner(practitioner: IReference): this {
    this.practitionerRole.practitioner = practitioner;
    return this;
  }

  setOrganization(organization: IReference): this {
    this.practitionerRole.organization = organization;
    return this;
  }

  addCode(code: ICodeableConcept): this {
    this.practitionerRole.code = this.practitionerRole.code || [];
    this.practitionerRole.code.push(code);
    return this;
  }

  setMultipleCode(codes: ICodeableConcept[]): this {
    this.practitionerRole.code = codes;
    return this;
  }

  addSpecialty(specialty: ICodeableConcept): this {
    this.practitionerRole.specialty = this.practitionerRole.specialty || [];
    this.practitionerRole.specialty.push(specialty);
    return this;
  }

  setMultipleSpecialty(specialties: ICodeableConcept[]): this {
    this.practitionerRole.specialty = specialties;
    return this;
  }

  addLocation(location: IReference): this {
    this.practitionerRole.location = this.practitionerRole.location || [];
    this.practitionerRole.location.push(location);
    return this;
  }

  setMultipleLocation(locations: IReference[]): this {
    this.practitionerRole.location = locations;
    return this;
  }

  addHealthcareService(healthcareService: IReference): this {
    this.practitionerRole.healthcareService = this.practitionerRole.healthcareService || [];
    this.practitionerRole.healthcareService.push(healthcareService);
    return this;
  }

  setMultipleHealthcareService(healthcareServices: IReference[]): this {
    this.practitionerRole.healthcareService = healthcareServices;
    return this;
  }

  addContact(contact: IExtendedContactDetail): this {
    this.practitionerRole.contact = this.practitionerRole.contact || [];
    this.practitionerRole.contact.push(contact);
    return this;
  }

  setMultipleContact(contacts: IExtendedContactDetail[]): this {
    this.practitionerRole.contact = contacts;
    return this;
  }

  addCharacteristic(characteristic: ICodeableConcept): this {
    this.practitionerRole.characteristic = this.practitionerRole.characteristic || [];
    this.practitionerRole.characteristic.push(characteristic);
    return this;
  }

  setMultipleCharacteristic(characteristics: ICodeableConcept[]): this {
    this.practitionerRole.characteristic = characteristics;
    return this;
  }

  addCommunication(communication: ICodeableConcept): this {
    this.practitionerRole.communication = this.practitionerRole.communication || [];
    this.practitionerRole.communication.push(communication);
    return this;
  }

  setMultipleCommunication(communications: ICodeableConcept[]): this {
    this.practitionerRole.communication = communications;
    return this;
  }

  addAvailability(availability: IAvailability): this {
    this.practitionerRole.availability = this.practitionerRole.availability || [];
    this.practitionerRole.availability.push(availability);
    return this;
  }

  setMultipleAvailability(availabilities: IAvailability[]): this {
    this.practitionerRole.availability = availabilities;
    return this;
  }

  addEndpoint(endpoint: IReference): this {
    this.practitionerRole.endpoint = this.practitionerRole.endpoint || [];
    this.practitionerRole.endpoint.push(endpoint);
    return this;
  }

  setMultipleEndpoint(endpoints: IReference[]): this {
    this.practitionerRole.endpoint = endpoints;
    return this;
  }

  build(): PractitionerRole {
    Object.assign(this.practitionerRole, { ...super.entity() });
    return new PractitionerRole(this.practitionerRole).toJson();
  }
}
