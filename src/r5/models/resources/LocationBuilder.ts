import { DomainResourceBuilder, IDomainResourceBuilder } from '../base/DomainResourceBuilder';
import { IBuildable } from '../../../globals/interfaces';
import { Location } from './index';
import {
  IAddress,
  IAvailability,
  ICodeableConcept,
  ICoding,
  IExtendedContactDetail,
  IIdentifier,
  IReference,
  IVirtualServiceDetail,
} from '../../interfaces/datatypes';
import { LocationModeEnum, LocationStatusEnum } from '../../enums';
import { LocationModeType, LocationStatusType } from '../../types';
import { ILocationPosition } from '../../interfaces/backbones';
import { IElement } from '../../interfaces/base';
import { validateReferenceHelper } from '../../../globals/helpers/validateReferenceHelper';
import { IResourceBuilder } from '../base/ResourceBuilder';

type ParamExtensionType = 'status' | 'alias' | 'name' | 'description' | 'mode';
type MultipleParamExtensionType = 'alias';

interface ILocationBuilder
  extends IBuildable<Location>,
    IDomainResourceBuilder<LocationBuilder>,
    IResourceBuilder<LocationBuilder> {
  addParamExtension<T extends ParamExtensionType>(
    param: T,
    extension: T extends MultipleParamExtensionType ? IElement[] : IElement,
  ): this;
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
  private readonly location: Location;

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
    if (endpoint.reference) validateReferenceHelper(endpoint.reference, ['Endpoint']);
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

  addParamExtension<T extends ParamExtensionType>(
    param: T,
    extension: T extends 'alias' ? IElement[] : IElement,
  ): this {
    const includes = ['alias'];
    if (includes.includes(param)) {
      const localMultipleParam = param as MultipleParamExtensionType;
      this.location[`_${localMultipleParam}`] = extension as IElement[];
    } else {
      const localParam = param as Exclude<ParamExtensionType, 'alias'>;
      this.location[`_${localParam}`] = extension as IElement;
    }
    return this;
  }

  build(): Location {
    Object.assign(this.location, { ...super.entity() });
    return this.location.toJson();
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
      validateReferenceHelper(managingOrganization.reference, ['Organization']);
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
      if (endpoint.reference) validateReferenceHelper(endpoint.reference, ['Endpoint']);
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
    if (partOf.reference) validateReferenceHelper(partOf.reference, ['Location']);
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
