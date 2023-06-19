import { IBuildable } from '../../../globals/interfaces';
import { DomainResourceBuilder, IDomainResourceBuilder } from '../base/DomainResourceBuilder';
import { IResourceBuilder } from '../base/ResourceBuilder';
import { IElement } from '../../interfaces/base';
import { ICodeableConcept, IContactPoint, IIdentifier, IPeriod, IReference } from '../../interfaces/datatypes';
import { IPractitionerRoleAvailableTime, IPractitionerRoleNotAvailable } from '../../interfaces/backbones';
import { validateReference } from '../../../globals/helpers/validateReference';
import PractitionerRole from './PractitionerRole';

type ParamExtensionType = 'implicitRules' | 'language' | 'active' | 'availabilityExceptions';

export interface IPractitionerRoleBuilder
  extends IBuildable<PractitionerRole>,
    IDomainResourceBuilder<PractitionerRoleBuilder>,
    IResourceBuilder<PractitionerRoleBuilder> {
  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): PractitionerRoleBuilder;

  addIdentifier(identifier: IIdentifier): PractitionerRoleBuilder;

  setActive(active: boolean): PractitionerRoleBuilder;

  setPeriod(period: IPeriod): PractitionerRoleBuilder;

  setPractitioner(practitioner: IReference): PractitionerRoleBuilder;

  setOrganization(organization: IReference): PractitionerRoleBuilder;

  addCode(code: ICodeableConcept): PractitionerRoleBuilder;

  addSpecialty(specialty: ICodeableConcept): PractitionerRoleBuilder;

  addLocation(location: IReference): PractitionerRoleBuilder;

  addHealthcareService(healthcareService: IReference): PractitionerRoleBuilder;

  addTelecom(telecom: IContactPoint): PractitionerRoleBuilder;

  addAvailableTime(availableTime: IPractitionerRoleAvailableTime): PractitionerRoleBuilder;

  addNotAvailable(notAvailable: IPractitionerRoleNotAvailable): PractitionerRoleBuilder;

  setAvailabilityExceptions(availabilityExceptions: string): PractitionerRoleBuilder;

  addEndpoint(endpoint: IReference): PractitionerRoleBuilder;

  setMultipleIdentifier(identifiers: IIdentifier[]): PractitionerRoleBuilder;

  setMultipleCode(codes: ICodeableConcept[]): PractitionerRoleBuilder;

  setMultipleSpecialty(specialties: ICodeableConcept[]): PractitionerRoleBuilder;

  setMultipleLocation(locations: IReference[]): PractitionerRoleBuilder;

  setMultipleHealthcareService(healthcareServices: IReference[]): PractitionerRoleBuilder;

  setMultipleEndpoint(endpoints: IReference[]): PractitionerRoleBuilder;

  setMultipleTelecom(telecoms: IContactPoint[]): PractitionerRoleBuilder;

  setMultipleAvailableTime(availableTimes: IPractitionerRoleAvailableTime[]): PractitionerRoleBuilder;

  setMultipleNotAvailable(notAvailables: IPractitionerRoleNotAvailable[]): PractitionerRoleBuilder;
}

export class PractitionerRoleBuilder
  extends DomainResourceBuilder<PractitionerRoleBuilder>
  implements IPractitionerRoleBuilder
{
  private readonly practitionerRole: PractitionerRole;

  constructor() {
    super();
    this.practitionerRole = new PractitionerRole();
  }

  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): PractitionerRoleBuilder {
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

  addAvailableTime(availableTime: IPractitionerRoleAvailableTime): PractitionerRoleBuilder {
    this.practitionerRole.availableTime = this.practitionerRole.availableTime || [];
    this.practitionerRole.availableTime.push(availableTime);
    return this;
  }

  addNotAvailable(notAvailable: IPractitionerRoleNotAvailable): PractitionerRoleBuilder {
    this.practitionerRole.notAvailable = this.practitionerRole.notAvailable || [];
    this.practitionerRole.notAvailable.push(notAvailable);
    return this;
  }

  addTelecom(telecom: IContactPoint): PractitionerRoleBuilder {
    this.practitionerRole.telecom = this.practitionerRole.telecom || [];
    this.practitionerRole.telecom.push(telecom);
    return this;
  }

  setAvailabilityExceptions(availabilityExceptions: string): PractitionerRoleBuilder {
    this.practitionerRole.availabilityExceptions = availabilityExceptions;
    return this;
  }

  setMultipleAvailableTime(availableTimes: IPractitionerRoleAvailableTime[]): PractitionerRoleBuilder {
    this.practitionerRole.availableTime = availableTimes;
    return this;
  }

  setMultipleNotAvailable(notAvailables: IPractitionerRoleNotAvailable[]): PractitionerRoleBuilder {
    this.practitionerRole.notAvailable = notAvailables;
    return this;
  }

  setMultipleTelecom(telecoms: IContactPoint[]): PractitionerRoleBuilder {
    this.practitionerRole.telecom = telecoms;
    return this;
  }

  build(): PractitionerRole {
    Object.assign(this.practitionerRole, { ...super.entity() });
    return this.practitionerRole.toJson();
  }
}
