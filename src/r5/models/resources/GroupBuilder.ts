import { DomainResourceBuilder, IDomainResourceBuilder } from '../base/DomainResourceBuilder';
import { IBuildable } from '../../../globals/interfaces';
import { IElement } from '../../interfaces/base';
import { ICodeableConcept, IIdentifier, IReference } from '../../interfaces/datatypes';
import { GroupMembershipBasisEnum, GroupTypeEnum } from '../../enums';
import { GroupType } from '../../types';
import { IGroupCharacteristic, IGroupMember } from '../../interfaces/backbones';
import Group from './Group';
import { validateReference } from '../../../globals/helpers/validateReference';
import GroupMembershipBasisType from '../../types/GroupMembershipBasisType';
import { IResourceBuilder } from '../base/ResourceBuilder';

type ParamExtensionType = 'active' | 'type' | 'actual' | 'name' | 'quantity' | 'membership' | 'description';
interface IGroupBuilder
  extends IBuildable<Group>,
    IDomainResourceBuilder<GroupBuilder>,
    IResourceBuilder<GroupBuilder> {
  setParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): GroupBuilder;
  addIdentifier(identifier: IIdentifier): GroupBuilder;
  setActive(active: boolean): GroupBuilder;
  setType(type: GroupTypeEnum | GroupType): GroupBuilder;
  setMembership(membership: GroupMembershipBasisEnum | GroupMembershipBasisType): GroupBuilder;
  setActual(actual: boolean): GroupBuilder;
  setCode(code: ICodeableConcept): GroupBuilder;
  setName(name: string): GroupBuilder;
  setDescription(description: string): GroupBuilder;
  setQuantity(quantity: number): GroupBuilder;
  setManagingEntity(managingEntity: IReference): GroupBuilder;
  addCharacteristic(characteristic: IGroupCharacteristic): GroupBuilder;
  addMember(member: IGroupMember): GroupBuilder;
  setMultipleIdentifier(identifiers: IIdentifier[]): GroupBuilder;
  setMultipleCharacteristic(characteristics: IGroupCharacteristic[]): GroupBuilder;
  setMultipleMember(members: IGroupMember[]): GroupBuilder;
}

export default class GroupBuilder extends DomainResourceBuilder<GroupBuilder> implements IGroupBuilder {
  private readonly group: Group;

  constructor() {
    super();
    this.group = new Group();
  }

  addCharacteristic(characteristic: IGroupCharacteristic): GroupBuilder {
    // TODO Validate references
    this.group.characteristic = this.group.characteristic || [];
    this.group.characteristic.push(characteristic);
    return this;
  }

  addIdentifier(identifier: IIdentifier): GroupBuilder {
    if (identifier.assigner?.reference) {
      validateReference(identifier.assigner.reference, ['Organization']);
    }
    this.group.identifier = this.group.identifier || [];
    this.group.identifier.push(identifier);
    return this;
  }

  addMember(member: IGroupMember): GroupBuilder {
    if (member.entity?.reference) {
      validateReference(member.entity.reference, [
        'CareTeam',
        'Device',
        'Group',
        'HealthcareService',
        'Location',
        'Organization',
        'Patient',
        'Practitioner',
        'PractitionerRole',
        'RelatedPerson',
        'Specimen',
      ]);
    }
    this.group.member = this.group.member || [];
    this.group.member.push(member);
    return this;
  }

  build(): Group {
    Object.assign(this.group, { ...super.entity() });
    return this.group.toJson();
  }

  setActive(active: boolean): GroupBuilder {
    this.group.active = active;
    return this;
  }

  setActual(actual: boolean): GroupBuilder {
    this.group.actual = actual;
    return this;
  }

  setCode(code: ICodeableConcept): GroupBuilder {
    this.group.code = code;
    return this;
  }

  setManagingEntity(managingEntity: IReference): GroupBuilder {
    if (managingEntity.reference) {
      validateReference(managingEntity.reference, [
        'Organization',
        'RelatedPerson',
        'Practitioner',
        'PractitionerRole',
      ]);
    }

    this.group.managingEntity = managingEntity;
    return this;
  }

  setMultipleCharacteristic(characteristics: IGroupCharacteristic[]): GroupBuilder {
    // TODO Validate references
    this.group.characteristic = characteristics;
    return this;
  }

  setMultipleIdentifier(identifiers: IIdentifier[]): GroupBuilder {
    identifiers.forEach((identifier) => {
      if (identifier.assigner?.reference) {
        validateReference(identifier.assigner.reference, ['Organization']);
      }
    });
    this.group.identifier = identifiers;
    return this;
  }

  setMultipleMember(members: IGroupMember[]): GroupBuilder {
    members.forEach((member) => {
      if (member.entity?.reference) {
        validateReference(member.entity.reference, [
          'Patient',
          'Practitioner',
          'PractitionerRole',
          'Device',
          'Medication',
          'Substance',
          'Group',
        ]);
      }
    });
    this.group.member = members;
    return this;
  }

  setName(name: string): GroupBuilder {
    this.group.name = name;
    return this;
  }

  setDescription(description: string): GroupBuilder {
    this.group.description = description;
    return this;
  }

  setParamExtension(param: ParamExtensionType, extension: IElement): GroupBuilder {
    this.group[`_${param}`] = extension;
    return this;
  }

  setQuantity(quantity: number): GroupBuilder {
    this.group.quantity = quantity;
    return this;
  }

  setType(type: GroupTypeEnum | GroupType): GroupBuilder {
    this.group.type = type;
    return this;
  }

  setMembership(membership: GroupMembershipBasisEnum | GroupMembershipBasisType): GroupBuilder {
    this.group.membership = membership;
    return this;
  }
}
