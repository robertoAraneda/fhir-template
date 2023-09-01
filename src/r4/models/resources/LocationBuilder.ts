import { DomainResourceBuilder, IDomainResourceBuilder } from '../base/DomainResourceBuilder';
import {
  IAddress,
  ICodeableConcept,
  ICoding,
  IContactPoint,
  IIdentifier,
  IReference,
} from '../../interfaces/datatypes';
import { ILocationHoursOfOperation, ILocationPosition } from '../../interfaces/backbones';
import { IElement } from '../../interfaces/base';
import { LocationModeEnum, LocationStatusEnum } from '../../enums';
import { LocationModeType, LocationStatusType } from '../../types';
import { IBuildable } from '../../../globals/interfaces';
import { IResourceBuilder } from '../base/ResourceBuilder';
import Location from './Location';
import { ILocation } from '../../interfaces/resources';

type ParamExtensionType = 'status' | 'alias' | 'name' | 'description' | 'mode' | 'availabilityExceptions';
type MultipleParamType = 'alias';

export interface ILocationBuilder
  extends IBuildable<Location>,
    IDomainResourceBuilder<LocationBuilder>,
    IResourceBuilder<LocationBuilder> {
  addParamExtension<T extends ParamExtensionType>(param: T, extension: T extends 'alias' ? IElement[] : IElement): this;

  addIdentifier(identifier: IIdentifier): this;

  setMultipleIdentifier(identifiers: IIdentifier[]): this;

  setStatus(status: LocationStatusEnum | LocationStatusType): this;

  setOperationalStatus(operationalStatus: ICoding): this;

  setName(name: string): this;

  addAlias(alias: string): this;

  setMultipleAlias(aliases: string[]): this;

  setDescription(description: string): this;

  setMode(mode: LocationModeEnum | LocationModeType): this;

  addType(type: ICodeableConcept): this;

  setMultipleType(types: ICodeableConcept[]): this;

  addTelecom(telecom: IContactPoint): this;

  setMultipleTelecom(telecoms: IContactPoint[]): this;

  setAddress(address: IAddress): this;

  setPhysicalType(physicalType: ICodeableConcept): this;

  setPosition(position: ILocationPosition): this;

  setManagingOrganization(managingOrganization: IReference): this;

  setPartOf(partOf: IReference): this;

  addHoursOfOperation(hoursOfOperation: ILocationHoursOfOperation): this;

  setMultipleHoursOfOperation(hoursOfOperations: ILocationHoursOfOperation[]): this;

  setAvailabilityExceptions(availabilityExceptions: string): this;

  addEndpoint(endpoint: IReference): this;

  setMultipleEndpoint(endpoints: IReference[]): this;
}

export class LocationBuilder extends DomainResourceBuilder<LocationBuilder> implements ILocationBuilder {
  private readonly location: ILocation;

  constructor() {
    super();
    this.location = {} as ILocation;
  }

  addAlias(alias: string): this {
    this.location.alias = this.location.alias || [];
    this.location.alias.push(alias);
    return this;
  }

  addEndpoint(endpoint: IReference): this {
    this.location.endpoint = this.location.endpoint || [];
    this.location.endpoint.push(endpoint);
    return this;
  }

  addHoursOfOperation(hoursOfOperation: ILocationHoursOfOperation): this {
    this.location.hoursOfOperation = this.location.hoursOfOperation || [];
    this.location.hoursOfOperation.push(hoursOfOperation);
    return this;
  }

  addIdentifier(identifier: IIdentifier): this {
    this.location.identifier = this.location.identifier || [];
    this.location.identifier.push(identifier);
    return this;
  }

  addParamExtension<T extends ParamExtensionType>(
    param: T,
    extension: T extends 'alias' ? IElement[] : IElement,
  ): this {
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

  addTelecom(telecom: IContactPoint): this {
    this.location.telecom = this.location.telecom || [];
    this.location.telecom.push(telecom);
    return this;
  }

  build(): Location {
    Object.assign(this.location, { ...super.entity() });
    return new Location(this.location).toJson();
  }

  setAddress(address: IAddress): this {
    this.location.address = address;
    return this;
  }

  setAvailabilityExceptions(availabilityExceptions: string): this {
    this.location.availabilityExceptions = availabilityExceptions;
    return this;
  }

  setDescription(description: string): this {
    this.location.description = description;
    return this;
  }

  setManagingOrganization(managingOrganization: IReference): this {
    this.location.managingOrganization = managingOrganization;
    return this;
  }

  setMode(mode: LocationModeEnum | LocationModeType): this {
    this.location.mode = mode;
    return this;
  }

  setMultipleAlias(aliases: string[]): this {
    this.location.alias = aliases;
    return this;
  }

  setMultipleEndpoint(endpoints: IReference[]): this {
    this.location.endpoint = endpoints;
    return this;
  }

  setMultipleHoursOfOperation(hoursOfOperations: ILocationHoursOfOperation[]): this {
    this.location.hoursOfOperation = hoursOfOperations;
    return this;
  }

  setMultipleIdentifier(identifiers: IIdentifier[]): this {
    this.location.identifier = identifiers;
    return this;
  }

  setMultipleTelecom(telecoms: IContactPoint[]): this {
    this.location.telecom = telecoms;
    return this;
  }

  setName(name: string): this {
    this.location.name = name;
    return this;
  }

  setOperationalStatus(operationalStatus: ICoding): this {
    this.location.operationalStatus = operationalStatus;
    return this;
  }

  setPartOf(partOf: IReference): this {
    this.location.partOf = partOf;
    return this;
  }

  setPhysicalType(physicalType: ICodeableConcept): this {
    this.location.physicalType = physicalType;
    return this;
  }

  setPosition(position: ILocationPosition): this {
    this.location.position = position;
    return this;
  }

  setStatus(status: LocationStatusEnum | LocationStatusType): this {
    this.location.status = status;
    return this;
  }

  addType(type: ICodeableConcept): this {
    this.location.type = this.location.type || [];
    this.location.type.push(type);
    return this;
  }

  setMultipleType(types: ICodeableConcept[]): this {
    this.location.type = types;
    return this;
  }
}
