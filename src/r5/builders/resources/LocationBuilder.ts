import { DomainResourceBuilder } from '../base/DomainResourceBuilder';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { Location } from '../../models/resources';
import {
  IAddress,
  IAvailability,
  ICodeableConcept,
  ICoding,
  IContactPoint,
  IExtendedContactDetail,
  IIdentifier,
  IReference,
  IVirtualServiceDetail,
} from '../../interfaces/datatypes';
import { LocationModeEnum, LocationStatusEnum } from '../../enums';
import { LocationModeType, LocationStatusType } from '../../types';
import { ILocationPosition } from '../../interfaces/backbones';
import { IElement } from '../../interfaces/base';
import { ILocation } from '../../interfaces/resources';
import { validateReference } from '../../../globals/helpers/validateReference';

type ParamType = 'status' | 'alias' | 'name' | 'description' | 'mode';
type MultipleParamType = 'alias';

interface ILocationBuilder extends IBuildable<Location>, ISerializable {
  addParamExtension<T extends ParamType>(param: T, extension: T extends 'alias' ? IElement[] : IElement): this;
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
  addContact(contact: IExtendedContactDetail): this;
  setMultipleContact(contacts: IExtendedContactDetail[]): this;
  setAddress(address: IAddress): this;
  setPosition(position: ILocationPosition): this;
  setManagingOrganization(managingOrganization: IReference): this;
  setPartOf(partOf: IReference): this;
  setForm(form: ICodeableConcept): this;
  addCharacteristic(characteristic: ICodeableConcept): this;
  setMultipleCharacteristic(characteristics: ICodeableConcept[]): this;
  addVirtualService(virtualService: IVirtualServiceDetail): this;
  setMultipleVirtualService(virtualServices: IVirtualServiceDetail[]): this;
  addHoursOfOperation(hoursOfOperation: IAvailability): this;
  setMultipleHoursOfOperation(hoursOfOperations: IAvailability[]): this;
  addEndpoint(endpoint: IReference): this;
  setMultipleEndpoint(endpoints: IReference[]): this;
}

export default class LocationBuilder extends DomainResourceBuilder<LocationBuilder> implements ILocationBuilder {
  private readonly location: ILocation;

  constructor() {
    super();
    this.location = new Location();
  }

  addAlias(alias: string): this {
    this.location.alias = this.location.alias || [];
    this.location.alias.push(alias);
    return this;
  }

  addEndpoint(endpoint: IReference): this {
    if (endpoint.reference) validateReference(endpoint.reference, ['Endpoint']);
    this.location.endpoint = this.location.endpoint || [];
    this.location.endpoint.push(endpoint);
    return this;
  }

  addHoursOfOperation(hoursOfOperation: IAvailability): this {
    this.location.hoursOfOperation = this.location.hoursOfOperation || [];
    this.location.hoursOfOperation.push(hoursOfOperation);
    return this;
  }

  addIdentifier(identifier: IIdentifier): this {
    this.location.identifier = this.location.identifier || [];
    this.location.identifier.push(identifier);
    return this;
  }

  addParamExtension<T extends ParamType>(param: T, extension: T extends 'alias' ? IElement[] : IElement): this {
    const includes = ['alias'];
    if (includes.includes(param)) {
      const localMultipleParam = param as MultipleParamType;
      this.location[`_${localMultipleParam}`] = extension as IElement[];
    } else {
      const localParam = param as Exclude<ParamType, 'alias'>;
      this.location[`_${localParam}`] = extension as IElement;
    }
    return this;
  }

  build(): Location {
    return JSON.parse(this.buildAsString());
  }

  compileAsDefault(): Location {
    return {
      ...this.location,
      ...super.entity(),
    };
  }

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault());
  }

  setAddress(address: IAddress): this {
    this.location.address = address;
    return this;
  }

  setDescription(description: string): this {
    this.location.description = description;
    return this;
  }

  setManagingOrganization(managingOrganization: IReference): this {
    if (managingOrganization.reference) {
      validateReference(managingOrganization.reference, ['Organization']);
    }
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
    endpoints.forEach((endpoint) => {
      if (endpoint.reference) validateReference(endpoint.reference, ['Endpoint']);
    });
    this.location.endpoint = endpoints;
    return this;
  }

  setMultipleHoursOfOperation(hoursOfOperations: IAvailability[]): this {
    this.location.hoursOfOperation = hoursOfOperations;
    return this;
  }

  setMultipleIdentifier(identifiers: IIdentifier[]): this {
    this.location.identifier = identifiers;
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
    if (partOf.reference) validateReference(partOf.reference, ['Location']);
    this.location.partOf = partOf;
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

  setMultipleContact(contacts: IExtendedContactDetail[]): this {
    this.location.contact = contacts;
    return this;
  }

  addCharacteristic(characteristic: ICodeableConcept): this {
    this.location.characteristic = this.location.characteristic || [];
    this.location.characteristic.push(characteristic);
    return this;
  }

  setMultipleCharacteristic(characteristics: ICodeableConcept[]): this {
    this.location.characteristic = characteristics;
    return this;
  }

  setMultipleVirtualService(virtualServices: IVirtualServiceDetail[]): this {
    this.location.virtualService = virtualServices;
    return this;
  }

  addVirtualService(virtualService: IVirtualServiceDetail): this {
    this.location.virtualService = this.location.virtualService || [];
    this.location.virtualService.push(virtualService);
    return this;
  }

  addContact(contact: IExtendedContactDetail): this {
    this.location.contact = this.location.contact || [];
    this.location.contact.push(contact);
    return this;
  }

  setForm(form: ICodeableConcept): this {
    this.location.form = form;
    return this;
  }
}
