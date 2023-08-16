import { DomainResourceBuilder, IDomainResourceBuilder } from '../base/DomainResourceBuilder';
import { IBuildable } from '../../../globals/interfaces';
import { IElement } from '../../interfaces/base';
import { ICodeableConcept, IIdentifier, IReference } from '../../interfaces/datatypes';
import { GroupMembershipBasisEnum, GroupTypeEnum } from '../../enums';
import { GroupType } from '../../types';
import { IGroupCharacteristic, IGroupMember } from '../../interfaces/backbones';
import Group from './Group';
import { ValidateReferenceFormatHelper } from '../../../globals/helpers/validateReferenceFormatHelper';
import GroupMembershipBasisType from '../../types/GroupMembershipBasisType';
import { IResourceBuilder } from '../base/ResourceBuilder';
import { IGroup } from '../../interfaces/resources';

type ParamExtensionType = 'active' | 'type' | 'name' | 'quantity' | 'membership' | 'description';
export interface IGroupBuilder
  extends IBuildable<Group>,
    IDomainResourceBuilder<GroupBuilder>,
    IResourceBuilder<GroupBuilder> {
  setParamExtension(param: ParamExtensionType, extension: IElement): this;
  addIdentifier(identifier: IIdentifier): this;
  setActive(active: boolean): this;
  setType(type: GroupTypeEnum | GroupType): this;
  setMembership(membership: GroupMembershipBasisEnum | GroupMembershipBasisType): this;
  setCode(code: ICodeableConcept): this;
  setName(name: string): this;
  setDescription(description: string): this;
  setQuantity(quantity: number): this;
  setManagingEntity(managingEntity: IReference): this;
  addCharacteristic(characteristic: IGroupCharacteristic): this;
  addMember(member: IGroupMember): this;
  setMultipleIdentifier(identifiers: IIdentifier[]): this;
  setMultipleCharacteristic(characteristics: IGroupCharacteristic[]): this;
  setMultipleMember(members: IGroupMember[]): this;
}

export default class GroupBuilder extends DomainResourceBuilder<GroupBuilder> implements IGroupBuilder {
  private readonly group: IGroup;

  constructor() {
    super();
    this.group = {} as IGroup;
  }

  addCharacteristic(characteristic: IGroupCharacteristic): this {
    this.group.characteristic = this.group.characteristic || [];
    this.group.characteristic.push(characteristic);
    return this;
  }

  addIdentifier(identifier: IIdentifier): this {
    this.group.identifier = this.group.identifier || [];
    this.group.identifier.push(identifier);
    return this;
  }

  addMember(member: IGroupMember): this {
    this.group.member = this.group.member || [];
    this.group.member.push(member);
    return this;
  }

  build(): Group {
    Object.assign(this.group, { ...super.entity() });
    return new Group(this.group).toJson();
  }

  setActive(active: boolean): this {
    this.group.active = active;
    return this;
  }

  setCode(code: ICodeableConcept): this {
    this.group.code = code;
    return this;
  }

  setManagingEntity(managingEntity: IReference): this {
    this.group.managingEntity = managingEntity;
    return this;
  }

  setMultipleCharacteristic(characteristics: IGroupCharacteristic[]): this {
    characteristics.forEach((characteristic) => this.addCharacteristic(characteristic));
    return this;
  }

  setMultipleIdentifier(identifiers: IIdentifier[]): this {
    identifiers.forEach((identifier) => this.addIdentifier(identifier));

    return this;
  }

  setMultipleMember(members: IGroupMember[]): this {
    members.forEach((member) => this.addMember(member));
    return this;
  }

  setName(name: string): this {
    this.group.name = name;
    return this;
  }

  setDescription(description: string): this {
    this.group.description = description;
    return this;
  }

  setParamExtension(param: ParamExtensionType, extension: IElement): this {
    this.group[`_${param}`] = extension;
    return this;
  }

  setQuantity(quantity: number): this {
    this.group.quantity = quantity;
    return this;
  }

  setType(type: GroupTypeEnum | GroupType): this {
    this.group.type = type;
    return this;
  }

  setMembership(membership: GroupMembershipBasisEnum | GroupMembershipBasisType): this {
    this.group.membership = membership;
    return this;
  }
}
