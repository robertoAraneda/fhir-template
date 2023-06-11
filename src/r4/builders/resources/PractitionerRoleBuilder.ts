import { DomainResourceBuilder } from '../base/DomainResourceBuilder';
import { IElement } from '../../interfaces/base';
import { IPractitionerRole } from '../../interfaces/resources';
import { IIdentifier, IPeriod, ICodeableConcept, IReference, IContactPoint } from '../../interfaces/datatypes';
import { PractitionerRole } from '../../models/resources';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { validateReference } from '../../../globals/helpers/validateReference';
import { IPractitionerRoleAvailableTime, IPractitionerRoleNotAvailable } from '../../interfaces/backbones';

type ParamType = 'active' | 'availabilityExceptions';

interface IPractitionerRoleBuilder extends IBuildable<IPractitionerRole>, ISerializable {
  addParamExtension(param: ParamType, extension: IElement): this;
  addIdentifier(identifier: IIdentifier): this;
  setActive(active: boolean): this;
  setPeriod(period: IPeriod): this;
  setPractitioner(practitioner: IReference): this;
  setOrganization(organization: IReference): this;
  addCode(code: ICodeableConcept): this;
  addSpecialty(specialty: ICodeableConcept): this;
  addLocation(location: IReference): this;
  addHealthcareService(healthcareService: IReference): this;
  addTelecom(telecom: IContactPoint): this;
  addAvailableTime(availableTime: IPractitionerRoleAvailableTime): this;
  addNotAvailable(notAvailable: IPractitionerRoleNotAvailable): this;
  setAvailabilityExceptions(availabilityExceptions: string): this;
  addEndpoint(endpoint: IReference): this;
  setMultipleIdentifier(identifiers: IIdentifier[]): this;
  setMultipleCode(codes: ICodeableConcept[]): this;
  setMultipleSpecialty(specialties: ICodeableConcept[]): this;
  setMultipleLocation(locations: IReference[]): this;
  setMultipleHealthcareService(healthcareServices: IReference[]): this;
  setMultipleEndpoint(endpoints: IReference[]): this;
  setMultipleTelecom(telecoms: IContactPoint[]): this;
  setMultipleAvailableTime(availableTimes: IPractitionerRoleAvailableTime[]): this;
  setMultipleNotAvailable(notAvailables: IPractitionerRoleNotAvailable[]): this;
}

export class PractitionerRoleBuilder
  extends DomainResourceBuilder<PractitionerRoleBuilder>
  implements IPractitionerRoleBuilder
{
  private readonly practitionerRole: IPractitionerRole;

  constructor() {
    super();
    this.practitionerRole = new PractitionerRole();
  }

  addParamExtension(param: ParamType, extension: IElement): this {
    this.practitionerRole[`_${param}`] = extension;
    return this;
  }

  addIdentifier(identifier: IIdentifier): this {
    if (identifier.assigner?.reference) {
      validateReference(identifier.assigner.reference, ['Organization']);
    }
    this.practitionerRole.identifier = this.practitionerRole.identifier || [];
    this.practitionerRole.identifier.push(identifier);
    return this;
  }

  setMultipleIdentifier(identifiers: IIdentifier[]): this {
    identifiers.forEach((identifier) => {
      if (identifier.assigner?.reference) {
        validateReference(identifier.assigner.reference, ['Organization']);
      }
    });
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
    if (practitioner.reference) {
      validateReference(practitioner.reference, ['Practitioner']);
    }

    this.practitionerRole.practitioner = practitioner;
    return this;
  }

  setOrganization(organization: IReference): this {
    if (organization.reference) {
      validateReference(organization.reference, ['Organization']);
    }

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
    if (location.reference) {
      validateReference(location.reference, ['Location']);
    }

    this.practitionerRole.location = this.practitionerRole.location || [];
    this.practitionerRole.location.push(location);
    return this;
  }

  setMultipleLocation(locations: IReference[]): this {
    locations.forEach((location) => {
      if (location.reference) {
        validateReference(location.reference, ['Location']);
      }
    });
    this.practitionerRole.location = locations;
    return this;
  }

  addHealthcareService(healthcareService: IReference): this {
    if (healthcareService.reference) {
      validateReference(healthcareService.reference, ['HealthcareService']);
    }

    this.practitionerRole.healthcareService = this.practitionerRole.healthcareService || [];
    this.practitionerRole.healthcareService.push(healthcareService);
    return this;
  }

  setMultipleHealthcareService(healthcareServices: IReference[]): this {
    healthcareServices.forEach((healthcareService) => {
      if (healthcareService.reference) {
        validateReference(healthcareService.reference, ['HealthcareService']);
      }
    });
    this.practitionerRole.healthcareService = healthcareServices;
    return this;
  }

  addEndpoint(endpoint: IReference): this {
    if (endpoint.reference) {
      validateReference(endpoint.reference, ['Endpoint']);
    }

    this.practitionerRole.endpoint = this.practitionerRole.endpoint || [];
    this.practitionerRole.endpoint.push(endpoint);
    return this;
  }

  setMultipleEndpoint(endpoints: IReference[]): this {
    endpoints.forEach((endpoint) => {
      if (endpoint.reference) {
        validateReference(endpoint.reference, ['Endpoint']);
      }
    });

    this.practitionerRole.endpoint = endpoints;
    return this;
  }

  addAvailableTime(availableTime: IPractitionerRoleAvailableTime): this {
    this.practitionerRole.availableTime = this.practitionerRole.availableTime || [];
    this.practitionerRole.availableTime.push(availableTime);
    return this;
  }

  addNotAvailable(notAvailable: IPractitionerRoleNotAvailable): this {
    this.practitionerRole.notAvailable = this.practitionerRole.notAvailable || [];
    this.practitionerRole.notAvailable.push(notAvailable);
    return this;
  }

  addTelecom(telecom: IContactPoint): this {
    this.practitionerRole.telecom = this.practitionerRole.telecom || [];
    this.practitionerRole.telecom.push(telecom);
    return this;
  }

  setAvailabilityExceptions(availabilityExceptions: string): this {
    this.practitionerRole.availabilityExceptions = availabilityExceptions;
    return this;
  }

  setMultipleAvailableTime(availableTimes: IPractitionerRoleAvailableTime[]): this {
    this.practitionerRole.availableTime = availableTimes;
    return this;
  }

  setMultipleNotAvailable(notAvailables: IPractitionerRoleNotAvailable[]): this {
    this.practitionerRole.notAvailable = notAvailables;
    return this;
  }

  setMultipleTelecom(telecoms: IContactPoint[]): this {
    this.practitionerRole.telecom = telecoms;
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
