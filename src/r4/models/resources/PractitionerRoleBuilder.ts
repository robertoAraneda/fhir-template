import { IBuildable } from '../../../globals/interfaces';
import { DomainResourceBuilder, IDomainResourceBuilder } from '../base/DomainResourceBuilder';
import { IResourceBuilder } from '../base/ResourceBuilder';
import { IElement } from '../../interfaces/base';
import { ICodeableConcept, IContactPoint, IIdentifier, IPeriod, IReference } from '../../interfaces/datatypes';
import { IPractitionerRoleAvailableTime, IPractitionerRoleNotAvailable } from '../../interfaces/backbones';
import PractitionerRole from './PractitionerRole';
import { IPractitionerRole } from '../../interfaces/resources';

type ParamExtensionType = 'implicitRules' | 'language' | 'active' | 'availabilityExceptions';

export interface IPractitionerRoleBuilder
  extends IBuildable<PractitionerRole>,
    IDomainResourceBuilder<PractitionerRoleBuilder>,
    IResourceBuilder<PractitionerRoleBuilder> {
  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): this;

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
    this.practitionerRole = {} as IPractitionerRole;
  }

  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): this {
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

  addEndpoint(endpoint: IReference): this {
    this.practitionerRole.endpoint = this.practitionerRole.endpoint || [];
    this.practitionerRole.endpoint.push(endpoint);
    return this;
  }

  setMultipleEndpoint(endpoints: IReference[]): this {
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

  build(): PractitionerRole {
    Object.assign(this.practitionerRole, { ...super.entity() });
    return new PractitionerRole(this.practitionerRole).toJson();
  }
}
