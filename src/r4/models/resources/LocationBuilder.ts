import { DomainResourceBuilder, IDomainResourceBuilder } from '../base/DomainResourceBuilder';
import {
  IAddress,
  ICodeableConcept,
  ICoding,
  IContactPoint,
  IIdentifier,
  IReference,
} from '../../interfaces/datatypes';
import { validateReferenceHelper } from '../../../globals/helpers/validateReferenceHelper';
import { ILocationHoursOfOperation, ILocationPosition } from '../../interfaces/backbones';
import { IElement } from '../../interfaces/base';
import { LocationModeEnum, LocationStatusEnum } from '../../enums';
import { LocationModeType, LocationStatusType } from '../../types';
import { IBuildable } from '../../../globals/interfaces';
import { IResourceBuilder } from '../base/ResourceBuilder';
import Location from './Location';

type ParamExtensionType = 'status' | 'alias' | 'name' | 'description' | 'mode' | 'availabilityExceptions';
type MultipleParamType = 'alias';

export interface ILocationBuilder
  extends IBuildable<Location>,
    IDomainResourceBuilder<LocationBuilder>,
    IResourceBuilder<LocationBuilder> {
  addParamExtension<T extends ParamExtensionType>(
    param: T,
    extension: T extends 'alias' ? IElement[] : IElement,
  ): LocationBuilder;

  addIdentifier(identifier: IIdentifier): LocationBuilder;

  setMultipleIdentifier(identifiers: IIdentifier[]): LocationBuilder;

  setStatus(status: LocationStatusEnum | LocationStatusType): LocationBuilder;

  setOperationalStatus(operationalStatus: ICoding): LocationBuilder;

  setName(name: string): LocationBuilder;

  addAlias(alias: string): LocationBuilder;

  setMultipleAlias(aliases: string[]): LocationBuilder;

  setDescription(description: string): LocationBuilder;

  setMode(mode: LocationModeEnum | LocationModeType): LocationBuilder;

  addType(type: ICodeableConcept): LocationBuilder;

  setMultipleType(types: ICodeableConcept[]): LocationBuilder;

  addTelecom(telecom: IContactPoint): LocationBuilder;

  setMultipleTelecom(telecoms: IContactPoint[]): LocationBuilder;

  setAddress(address: IAddress): LocationBuilder;

  setPhysicalType(physicalType: ICodeableConcept): LocationBuilder;

  setPosition(position: ILocationPosition): LocationBuilder;

  setManagingOrganization(managingOrganization: IReference): LocationBuilder;

  setPartOf(partOf: IReference): LocationBuilder;

  addHoursOfOperation(hoursOfOperation: ILocationHoursOfOperation): LocationBuilder;

  setMultipleHoursOfOperation(hoursOfOperations: ILocationHoursOfOperation[]): LocationBuilder;

  setAvailabilityExceptions(availabilityExceptions: string): LocationBuilder;

  addEndpoint(endpoint: IReference): LocationBuilder;

  setMultipleEndpoint(endpoints: IReference[]): LocationBuilder;
}

export class LocationBuilder extends DomainResourceBuilder<LocationBuilder> implements ILocationBuilder {
  private readonly location: Location;

  constructor() {
    super();
    this.location = new Location();
  }

  addAlias(alias: string): LocationBuilder {
    this.location.alias = this.location.alias || [];
    this.location.alias.push(alias);
    return this;
  }

  addEndpoint(endpoint: IReference): LocationBuilder {
    if (endpoint.reference) validateReferenceHelper(endpoint.reference, ['Endpoint']);
    this.location.endpoint = this.location.endpoint || [];
    this.location.endpoint.push(endpoint);
    return this;
  }

  addHoursOfOperation(hoursOfOperation: ILocationHoursOfOperation): LocationBuilder {
    this.location.hoursOfOperation = this.location.hoursOfOperation || [];
    this.location.hoursOfOperation.push(hoursOfOperation);
    return this;
  }

  addIdentifier(identifier: IIdentifier): LocationBuilder {
    this.location.identifier = this.location.identifier || [];
    this.location.identifier.push(identifier);
    return this;
  }

  addParamExtension<T extends ParamExtensionType>(
    param: T,
    extension: T extends 'alias' ? IElement[] : IElement,
  ): LocationBuilder {
    const includes = ['alias'];
    if (includes.includes(param)) {
      const localMultipleParam = param as MultipleParamType;
      this.location[`_${localMultipleParam}`] = extension as IElement[];
    } else {
      const localParam = param as Exclude<ParamExtensionType, 'alias'>;
      this.location[`_${localParam}`] = extension as IElement;
    }
    return this;
  }

  addTelecom(telecom: IContactPoint): LocationBuilder {
    this.location.telecom = this.location.telecom || [];
    this.location.telecom.push(telecom);
    return this;
  }

  build(): Location {
    Object.assign(this.location, { ...super.entity() });
    return this.location.toJson();
  }

  setAddress(address: IAddress): LocationBuilder {
    this.location.address = address;
    return this;
  }

  setAvailabilityExceptions(availabilityExceptions: string): LocationBuilder {
    this.location.availabilityExceptions = availabilityExceptions;
    return this;
  }

  setDescription(description: string): LocationBuilder {
    this.location.description = description;
    return this;
  }

  setManagingOrganization(managingOrganization: IReference): LocationBuilder {
    if (managingOrganization.reference) {
      validateReferenceHelper(managingOrganization.reference, ['Organization']);
    }
    this.location.managingOrganization = managingOrganization;
    return this;
  }

  setMode(mode: LocationModeEnum | LocationModeType): LocationBuilder {
    this.location.mode = mode;
    return this;
  }

  setMultipleAlias(aliases: string[]): LocationBuilder {
    this.location.alias = aliases;
    return this;
  }

  setMultipleEndpoint(endpoints: IReference[]): LocationBuilder {
    endpoints.forEach((endpoint) => {
      if (endpoint.reference) validateReferenceHelper(endpoint.reference, ['Endpoint']);
    });
    this.location.endpoint = endpoints;
    return this;
  }

  setMultipleHoursOfOperation(hoursOfOperations: ILocationHoursOfOperation[]): LocationBuilder {
    this.location.hoursOfOperation = hoursOfOperations;
    return this;
  }

  setMultipleIdentifier(identifiers: IIdentifier[]): LocationBuilder {
    this.location.identifier = identifiers;
    return this;
  }

  setMultipleTelecom(telecoms: IContactPoint[]): LocationBuilder {
    this.location.telecom = telecoms;
    return this;
  }

  setName(name: string): LocationBuilder {
    this.location.name = name;
    return this;
  }

  setOperationalStatus(operationalStatus: ICoding): LocationBuilder {
    this.location.operationalStatus = operationalStatus;
    return this;
  }

  setPartOf(partOf: IReference): LocationBuilder {
    if (partOf.reference) validateReferenceHelper(partOf.reference, ['Location']);
    this.location.partOf = partOf;
    return this;
  }

  setPhysicalType(physicalType: ICodeableConcept): LocationBuilder {
    this.location.physicalType = physicalType;
    return this;
  }

  setPosition(position: ILocationPosition): LocationBuilder {
    this.location.position = position;
    return this;
  }

  setStatus(status: LocationStatusEnum | LocationStatusType): LocationBuilder {
    this.location.status = status;
    return this;
  }

  addType(type: ICodeableConcept): LocationBuilder {
    this.location.type = this.location.type || [];
    this.location.type.push(type);
    return this;
  }

  setMultipleType(types: ICodeableConcept[]): LocationBuilder {
    this.location.type = types;
    return this;
  }
}
