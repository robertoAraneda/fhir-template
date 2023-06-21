import { DomainResourceBuilder, IDomainResourceBuilder } from '../base/DomainResourceBuilder';
import {
  IIdentifier,
  IPeriod,
  ICodeableConcept,
  IExtendedContactDetail,
  IAvailability,
  IReference,
} from '../../interfaces/datatypes';
import { validateReference } from '../../helpers/validateReference';
import { PractitionerRole } from './index';
import { IBuildable } from '../../../globals/interfaces';
import { IResourceBuilder } from '../base/ResourceBuilder';
import { IElement } from '../../interfaces/base';

interface IPractitionerRoleBuilder
  extends IBuildable<PractitionerRole>,
    IDomainResourceBuilder<PractitionerRoleBuilder>,
    IResourceBuilder<PractitionerRoleBuilder> {
  addParamExtension(param: 'active', extension: IElement): PractitionerRoleBuilder;
  addIdentifier(identifier: IIdentifier): PractitionerRoleBuilder;
  setMultipleIdentifier(identifiers: IIdentifier[]): PractitionerRoleBuilder;
  setActive(active: boolean): PractitionerRoleBuilder;
  setPeriod(period: IPeriod): PractitionerRoleBuilder;
  setPractitioner(practitioner: IReference): PractitionerRoleBuilder;
  setOrganization(organization: IReference): PractitionerRoleBuilder;
  addCode(code: ICodeableConcept): PractitionerRoleBuilder;
  setMultipleCode(codes: ICodeableConcept[]): PractitionerRoleBuilder;
  addSpecialty(specialty: ICodeableConcept): PractitionerRoleBuilder;
  setMultipleSpecialty(specialties: ICodeableConcept[]): PractitionerRoleBuilder;
  addLocation(location: IReference): PractitionerRoleBuilder;
  setMultipleLocation(locations: IReference[]): PractitionerRoleBuilder;
  addHealthcareService(healthcareService: IReference): PractitionerRoleBuilder;
  setMultipleHealthcareService(healthcareServices: IReference[]): PractitionerRoleBuilder;
  addContact(contact: IExtendedContactDetail): PractitionerRoleBuilder;
  setMultipleContact(contacts: IExtendedContactDetail[]): PractitionerRoleBuilder;
  addCharacteristic(characteristic: ICodeableConcept): PractitionerRoleBuilder;
  setMultipleCharacteristic(characteristics: ICodeableConcept[]): PractitionerRoleBuilder;
  addCommunication(communication: ICodeableConcept): PractitionerRoleBuilder;
  setMultipleCommunication(communications: ICodeableConcept[]): PractitionerRoleBuilder;
  addAvailability(avilability: IAvailability): PractitionerRoleBuilder;
  setMultipleAvailability(avilability: IAvailability[]): PractitionerRoleBuilder;
  addEndpoint(endpoint: IReference): PractitionerRoleBuilder;
  setMultipleEndpoint(endpoints: IReference[]): PractitionerRoleBuilder;
}

export default class PractitionerRoleBuilder
  extends DomainResourceBuilder<PractitionerRoleBuilder>
  implements IPractitionerRoleBuilder
{
  private readonly practitionerRole: PractitionerRole;

  constructor() {
    super();
    this.practitionerRole = new PractitionerRole();
  }

  addParamExtension(param: 'active', extension: IElement): PractitionerRoleBuilder {
    this.practitionerRole[`_${param}`] = extension;
    return this;
  }

  addIdentifier(identifier: IIdentifier): PractitionerRoleBuilder {
    if (identifier.assigner?.reference) {
      validateReference(identifier.assigner.reference, ['Organization']);
    }
    this.practitionerRole.identifier = this.practitionerRole.identifier || [];
    this.practitionerRole.identifier.push(identifier);
    return this;
  }

  setMultipleIdentifier(identifiers: IIdentifier[]): PractitionerRoleBuilder {
    identifiers.forEach((identifier) => {
      if (identifier.assigner?.reference) {
        validateReference(identifier.assigner.reference, ['Organization']);
      }
    });
    this.practitionerRole.identifier = identifiers;
    return this;
  }

  setActive(active: boolean): PractitionerRoleBuilder {
    this.practitionerRole.active = active;
    return this;
  }

  setPeriod(period: IPeriod): PractitionerRoleBuilder {
    this.practitionerRole.period = period;
    return this;
  }

  setPractitioner(practitioner: IReference): PractitionerRoleBuilder {
    if (practitioner.reference) {
      validateReference(practitioner.reference, ['Practitioner']);
    }

    this.practitionerRole.practitioner = practitioner;
    return this;
  }

  setOrganization(organization: IReference): PractitionerRoleBuilder {
    if (organization.reference) {
      validateReference(organization.reference, ['Organization']);
    }

    this.practitionerRole.organization = organization;
    return this;
  }

  addCode(code: ICodeableConcept): PractitionerRoleBuilder {
    this.practitionerRole.code = this.practitionerRole.code || [];
    this.practitionerRole.code.push(code);
    return this;
  }

  setMultipleCode(codes: ICodeableConcept[]): PractitionerRoleBuilder {
    this.practitionerRole.code = codes;
    return this;
  }

  addSpecialty(specialty: ICodeableConcept): PractitionerRoleBuilder {
    this.practitionerRole.specialty = this.practitionerRole.specialty || [];
    this.practitionerRole.specialty.push(specialty);
    return this;
  }

  setMultipleSpecialty(specialties: ICodeableConcept[]): PractitionerRoleBuilder {
    this.practitionerRole.specialty = specialties;
    return this;
  }

  addLocation(location: IReference): PractitionerRoleBuilder {
    if (location.reference) {
      validateReference(location.reference, ['Location']);
    }

    this.practitionerRole.location = this.practitionerRole.location || [];
    this.practitionerRole.location.push(location);
    return this;
  }

  setMultipleLocation(locations: IReference[]): PractitionerRoleBuilder {
    locations.forEach((location) => {
      if (location.reference) {
        validateReference(location.reference, ['Location']);
      }
    });
    this.practitionerRole.location = locations;
    return this;
  }

  addHealthcareService(healthcareService: IReference): PractitionerRoleBuilder {
    if (healthcareService.reference) {
      validateReference(healthcareService.reference, ['HealthcareService']);
    }

    this.practitionerRole.healthcareService = this.practitionerRole.healthcareService || [];
    this.practitionerRole.healthcareService.push(healthcareService);
    return this;
  }

  setMultipleHealthcareService(healthcareServices: IReference[]): PractitionerRoleBuilder {
    healthcareServices.forEach((healthcareService) => {
      if (healthcareService.reference) {
        validateReference(healthcareService.reference, ['HealthcareService']);
      }
    });
    this.practitionerRole.healthcareService = healthcareServices;
    return this;
  }

  addContact(contact: IExtendedContactDetail): PractitionerRoleBuilder {
    this.practitionerRole.contact = this.practitionerRole.contact || [];
    this.practitionerRole.contact.push(contact);
    return this;
  }

  setMultipleContact(contacts: IExtendedContactDetail[]): PractitionerRoleBuilder {
    this.practitionerRole.contact = contacts;
    return this;
  }

  addCharacteristic(characteristic: ICodeableConcept): PractitionerRoleBuilder {
    this.practitionerRole.characteristic = this.practitionerRole.characteristic || [];
    this.practitionerRole.characteristic.push(characteristic);
    return this;
  }

  setMultipleCharacteristic(characteristics: ICodeableConcept[]): PractitionerRoleBuilder {
    this.practitionerRole.characteristic = characteristics;
    return this;
  }

  addCommunication(communication: ICodeableConcept): PractitionerRoleBuilder {
    this.practitionerRole.communication = this.practitionerRole.communication || [];
    this.practitionerRole.communication.push(communication);
    return this;
  }

  setMultipleCommunication(communications: ICodeableConcept[]): PractitionerRoleBuilder {
    this.practitionerRole.communication = communications;
    return this;
  }

  addAvailability(availability: IAvailability): PractitionerRoleBuilder {
    this.practitionerRole.availability = this.practitionerRole.availability || [];
    this.practitionerRole.availability.push(availability);
    return this;
  }

  setMultipleAvailability(availabilities: IAvailability[]): PractitionerRoleBuilder {
    this.practitionerRole.availability = availabilities;
    return this;
  }

  addEndpoint(endpoint: IReference): PractitionerRoleBuilder {
    if (endpoint.reference) {
      validateReference(endpoint.reference, ['Endpoint']);
    }

    this.practitionerRole.endpoint = this.practitionerRole.endpoint || [];
    this.practitionerRole.endpoint.push(endpoint);
    return this;
  }

  setMultipleEndpoint(endpoints: IReference[]): PractitionerRoleBuilder {
    endpoints.forEach((endpoint) => {
      if (endpoint.reference) {
        validateReference(endpoint.reference, ['Endpoint']);
      }
    });

    this.practitionerRole.endpoint = endpoints;
    return this;
  }

  build(): PractitionerRole {
    Object.assign(this.practitionerRole, { ...super.entity() });
    return this.practitionerRole.toJson();
  }
}
