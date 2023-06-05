import { DomainResourceBuilder } from '../base/DomainResourceBuilder';
import { IBuildable, ISerializable, IElement, IReference } from '../../interfaces/base';
import { IPractitionerRole } from '../../interfaces/resources';
import {
  IIdentifier,
  IPeriod,
  ICodeableConcept,
  IExtendedContactDetail,
  IAvailability,
} from '../../interfaces/datatypes';
import { validateReference } from '../../helpers/validateReference';
import { PractitionerRole } from '../../resources/PractitionerRole';

export class PractitionerRoleBuilder
  extends DomainResourceBuilder<PractitionerRoleBuilder>
  implements IBuildable<IPractitionerRole>, ISerializable
{
  private readonly practitionerRole: IPractitionerRole;

  constructor() {
    super();
    this.practitionerRole = new PractitionerRole();
  }

  addPractitionerRoleParamExtension(param: 'active', extension: IElement): PractitionerRoleBuilder {
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

  raw(): IPractitionerRole {
    return {
      ...this.practitionerRole,
      ...super.entity(),
    };
  }

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  build(): IPractitionerRole {
    return JSON.parse(this.serialize());
  }
}
