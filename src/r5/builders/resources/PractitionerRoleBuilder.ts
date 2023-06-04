import { DomainResourceBuilder } from '../base/DomainResourceBuilder';
import { Build } from '../../interfaces/base/Build';
import { PractitionerRole } from '../../interfaces/resources/PractitionerRole';
import { Serialize } from '../../interfaces/base/Serialize';
import { Element } from '../../interfaces/base/Element';
import { Identifier } from '../../interfaces/datatypes/Identifier';
import { validateReference } from '../../helpers/validateReference';
import { Period } from '../../interfaces/datatypes/Period';
import { Reference } from '../../interfaces/base/Reference';
import { CodeableConcept } from '../../interfaces/datatypes/CodeableConcept';
import { ExtendedContactDetail } from '../../interfaces/datatypes/ExtendedContactDetail';
import { Availability } from '../../interfaces/datatypes/Availability';

export class PractitionerRoleBuilder
  extends DomainResourceBuilder<PractitionerRoleBuilder>
  implements Build<PractitionerRole>, Serialize
{
  private readonly practitionerRole: PractitionerRole;

  constructor() {
    super();
    this.practitionerRole = {} as PractitionerRole;
    this.practitionerRole.resourceType = 'PractitionerRole';
  }

  addPractitionerRoleParamExtension(param: 'active', extension: Element): PractitionerRoleBuilder {
    this.practitionerRole[`_${param}`] = extension;
    return this;
  }

  addIdentifier(identifier: Identifier): PractitionerRoleBuilder {
    if (identifier.assigner?.reference) {
      validateReference(identifier.assigner.reference, ['Organization']);
    }
    this.practitionerRole.identifier = this.practitionerRole.identifier || [];
    this.practitionerRole.identifier.push(identifier);
    return this;
  }

  setMultipleIdentifier(identifiers: Identifier[]): PractitionerRoleBuilder {
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

  setPeriod(period: Period): PractitionerRoleBuilder {
    this.practitionerRole.period = period;
    return this;
  }

  setPractitioner(practitioner: Reference): PractitionerRoleBuilder {
    if (practitioner.reference) {
      validateReference(practitioner.reference, ['Practitioner']);
    }

    this.practitionerRole.practitioner = practitioner;
    return this;
  }

  setOrganization(organization: Reference): PractitionerRoleBuilder {
    if (organization.reference) {
      validateReference(organization.reference, ['Organization']);
    }

    this.practitionerRole.organization = organization;
    return this;
  }

  addCode(code: CodeableConcept): PractitionerRoleBuilder {
    this.practitionerRole.code = this.practitionerRole.code || [];
    this.practitionerRole.code.push(code);
    return this;
  }

  setMultipleCode(codes: CodeableConcept[]): PractitionerRoleBuilder {
    this.practitionerRole.code = codes;
    return this;
  }

  addSpecialty(specialty: CodeableConcept): PractitionerRoleBuilder {
    this.practitionerRole.specialty = this.practitionerRole.specialty || [];
    this.practitionerRole.specialty.push(specialty);
    return this;
  }

  setMultipleSpecialty(specialties: CodeableConcept[]): PractitionerRoleBuilder {
    this.practitionerRole.specialty = specialties;
    return this;
  }

  addLocation(location: Reference): PractitionerRoleBuilder {
    if (location.reference) {
      validateReference(location.reference, ['Location']);
    }

    this.practitionerRole.location = this.practitionerRole.location || [];
    this.practitionerRole.location.push(location);
    return this;
  }

  setMultipleLocation(locations: Reference[]): PractitionerRoleBuilder {
    locations.forEach((location) => {
      if (location.reference) {
        validateReference(location.reference, ['Location']);
      }
    });
    this.practitionerRole.location = locations;
    return this;
  }

  addHealthcareService(healthcareService: Reference): PractitionerRoleBuilder {
    if (healthcareService.reference) {
      validateReference(healthcareService.reference, ['HealthcareService']);
    }

    this.practitionerRole.healthcareService = this.practitionerRole.healthcareService || [];
    this.practitionerRole.healthcareService.push(healthcareService);
    return this;
  }

  setMultipleHealthcareService(healthcareServices: Reference[]): PractitionerRoleBuilder {
    healthcareServices.forEach((healthcareService) => {
      if (healthcareService.reference) {
        validateReference(healthcareService.reference, ['HealthcareService']);
      }
    });
    this.practitionerRole.healthcareService = healthcareServices;
    return this;
  }

  addContact(contact: ExtendedContactDetail): PractitionerRoleBuilder {
    this.practitionerRole.contact = this.practitionerRole.contact || [];
    this.practitionerRole.contact.push(contact);
    return this;
  }

  setMultipleContact(contacts: ExtendedContactDetail[]): PractitionerRoleBuilder {
    this.practitionerRole.contact = contacts;
    return this;
  }

  addCharacteristic(characteristic: CodeableConcept): PractitionerRoleBuilder {
    this.practitionerRole.characteristic = this.practitionerRole.characteristic || [];
    this.practitionerRole.characteristic.push(characteristic);
    return this;
  }

  setMultipleCharacteristic(characteristics: CodeableConcept[]): PractitionerRoleBuilder {
    this.practitionerRole.characteristic = characteristics;
    return this;
  }

  addCommunication(communication: CodeableConcept): PractitionerRoleBuilder {
    this.practitionerRole.communication = this.practitionerRole.communication || [];
    this.practitionerRole.communication.push(communication);
    return this;
  }

  setMultipleCommunication(communications: CodeableConcept[]): PractitionerRoleBuilder {
    this.practitionerRole.communication = communications;
    return this;
  }

  addAvailability(availability: Availability): PractitionerRoleBuilder {
    this.practitionerRole.availability = this.practitionerRole.availability || [];
    this.practitionerRole.availability.push(availability);
    return this;
  }

  setMultipleAvailability(availabilities: Availability[]): PractitionerRoleBuilder {
    this.practitionerRole.availability = availabilities;
    return this;
  }

  addEndpoint(endpoint: Reference): PractitionerRoleBuilder {
    if (endpoint.reference) {
      validateReference(endpoint.reference, ['Endpoint']);
    }

    this.practitionerRole.endpoint = this.practitionerRole.endpoint || [];
    this.practitionerRole.endpoint.push(endpoint);
    return this;
  }

  setMultipleEndpoint(endpoints: Reference[]): PractitionerRoleBuilder {
    endpoints.forEach((endpoint) => {
      if (endpoint.reference) {
        validateReference(endpoint.reference, ['Endpoint']);
      }
    });

    this.practitionerRole.endpoint = endpoints;
    return this;
  }

  raw(): PractitionerRole {
    return {
      ...this.practitionerRole,
      ...super.entity(),
    };
  }

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  build(): PractitionerRole {
    return JSON.parse(this.serialize());
  }
}
