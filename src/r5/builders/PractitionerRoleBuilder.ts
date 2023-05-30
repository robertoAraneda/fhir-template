import { DomainResourceBuilder } from './DomainResourceBuilder';
import { PractitionerRole } from '../resources/PractitionerRole';
import { Identifier } from '../datatypes/Identifier';
import { Period } from '../datatypes/Period';
import { Reference } from '../datatypes/Reference';
import { CodeableConcept } from '../datatypes/CodeableConcept';
import { ExtendedContactDetail } from '../datatypes/ExtendedContactDetail';
import { Availability } from '../datatypes/Availability';
import { Practitioner } from '../resources/Practitioner';
import { Organization } from '../resources/Organization';
import { Endpoint } from '../datatypes/Endpoint';
import { transformReference } from '../helpers/transformReference';

type PractitionerReference = Practitioner | string;
type OrganizationReference = Organization | string;
type LocationReference = Organization | string;
type HealthcareServiceReference = Organization | string;
type EndpointReference = Endpoint | string;

export class PractitionerRoleBuilder extends DomainResourceBuilder<PractitionerRoleBuilder, PractitionerRole> {
  private _identifier: Identifier[];
  private _active: boolean;
  private _period: Period;
  private _practitioner: Reference<PractitionerReference>;
  private _organization: Reference<OrganizationReference>;
  private _code: CodeableConcept[];
  private _specialty: CodeableConcept[];
  private _location: Reference<LocationReference>[];
  private _healthcareService: Reference<HealthcareServiceReference>[];
  private _contact: ExtendedContactDetail[];
  private _characteristic: CodeableConcept[];
  private _communication: CodeableConcept[];
  private _availability: Availability[];
  private _endpoint: Reference<EndpointReference>[];

  addIdentifier(identifier: Identifier): PractitionerRoleBuilder {
    this._identifier = this._identifier || [];
    this._identifier.push(identifier);
    return this;
  }

  setMultipleIdentifiers(identifiers: Identifier[]): PractitionerRoleBuilder {
    this._identifier = identifiers;
    return this;
  }

  setActive(active: boolean): PractitionerRoleBuilder {
    this._active = active;
    return this;
  }

  setPeriod(period: Period): PractitionerRoleBuilder {
    this._period = period;
    return this;
  }

  setPractitioner(practitioner: Reference<PractitionerReference>): PractitionerRoleBuilder {
    this._practitioner = transformReference(practitioner, 'practitioner', ['Practitioner']);
    return this;
  }

  setOrganization(organization: Reference<OrganizationReference>): PractitionerRoleBuilder {
    this._organization = transformReference(organization, 'organization', ['Organization']);
    return this;
  }

  addCode(code: CodeableConcept): PractitionerRoleBuilder {
    this._code = this._code || [];
    this._code.push(code);
    return this;
  }

  setMultipleCodes(codes: CodeableConcept[]): PractitionerRoleBuilder {
    this._code = codes;
    return this;
  }

  addSpecialty(specialty: CodeableConcept): PractitionerRoleBuilder {
    this._specialty = this._specialty || [];
    this._specialty.push(specialty);
    return this;
  }

  setMultipleSpecialties(specialties: CodeableConcept[]): PractitionerRoleBuilder {
    this._specialty = specialties;
    return this;
  }

  addLocation(location: Reference<LocationReference>): PractitionerRoleBuilder {
    this._location = this._location || [];
    location = transformReference(location, 'location', ['Location']);
    this._location.push(location);
    return this;
  }

  setMultipleLocations(locations: Reference<LocationReference>[]): PractitionerRoleBuilder {
    locations = locations.map((location) => transformReference(location, 'location', ['Location']));
    this._location = locations;
    return this;
  }

  addHealthcareService(healthcareService: Reference<HealthcareServiceReference>): PractitionerRoleBuilder {
    this._healthcareService = this._healthcareService || [];
    healthcareService = transformReference(healthcareService, 'healthcareService', ['HealthcareService']);
    this._healthcareService.push(healthcareService);
    return this;
  }

  setMultipleHealthcareServices(healthcareServices: Reference<HealthcareServiceReference>[]): PractitionerRoleBuilder {
    healthcareServices = healthcareServices.map((healthcareService) =>
      transformReference(healthcareService, 'healthcareService', ['HealthcareService']),
    );
    this._healthcareService = healthcareServices;
    return this;
  }

  addContact(contact: ExtendedContactDetail): PractitionerRoleBuilder {
    this._contact = this._contact || [];
    this._contact.push(contact);
    return this;
  }

  setMultipleContacts(contacts: ExtendedContactDetail[]): PractitionerRoleBuilder {
    this._contact = contacts;
    return this;
  }

  addCharacteristic(characteristic: CodeableConcept): PractitionerRoleBuilder {
    this._characteristic = this._characteristic || [];
    this._characteristic.push(characteristic);
    return this;
  }

  setMultipleCharacteristics(characteristics: CodeableConcept[]): PractitionerRoleBuilder {
    this._characteristic = characteristics;
    return this;
  }

  addCommunication(communication: CodeableConcept): PractitionerRoleBuilder {
    this._communication = this._communication || [];
    this._communication.push(communication);
    return this;
  }

  setMultipleCommunications(communications: CodeableConcept[]): PractitionerRoleBuilder {
    this._communication = communications;
    return this;
  }

  addAvailability(availability: Availability): PractitionerRoleBuilder {
    this._availability = this._availability || [];
    this._availability.push(availability);
    return this;
  }

  setMultipleAvailabilities(availabilities: Availability[]): PractitionerRoleBuilder {
    this._availability = availabilities;
    return this;
  }

  addEndpoint(endpoint: Reference<EndpointReference>): PractitionerRoleBuilder {
    this._endpoint = this._endpoint || [];
    endpoint = transformReference(endpoint, 'endpoint', ['Endpoint']);
    this._endpoint.push(endpoint);
    return this;
  }

  setMultipleEndpoints(endpoints: Reference<EndpointReference>[]): PractitionerRoleBuilder {
    endpoints = endpoints.map((endpoint) => transformReference(endpoint, 'endpoint', ['Endpoint']));
    this._endpoint = endpoints;
    return this;
  }

  build(): PractitionerRole {
    const domain = super.build();
    return new PractitionerRole({
      resourceType: 'PractitionerRole',
      ...domain,
      identifier: this._identifier,
      active: this._active,
      period: this._period,
      practitioner: this._practitioner,
      organization: this._organization,
      code: this._code,
      specialty: this._specialty,
      location: this._location,
      healthcareService: this._healthcareService,
      contact: this._contact,
      characteristic: this._characteristic,
      communication: this._communication,
      availability: this._availability,
      endpoint: this._endpoint,
    });
  }
}
