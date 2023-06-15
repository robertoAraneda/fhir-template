import { DomainResourceBuilder } from '../base/DomainResourceBuilder';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { IGroup } from '../../interfaces/resources/IGroup';
import { IElement } from '../../interfaces/base';
import { ICodeableConcept, IIdentifier, IReference } from '../../interfaces/datatypes';
import { GroupTypeEnum } from '../../enums';
import { GroupType } from '../../types';
import { IGroupCharacteristic, IGroupMember } from '../../interfaces/backbones';
import Group from '../../models/resources/Group';
import { validateReference } from '../../../globals/helpers/validateReference';

type ParamType = 'active' | 'type' | 'actual' | 'name' | 'quantity';
interface IGroupBuilder extends IBuildable<Group>, ISerializable {
  setParamExtension(param: ParamType, extension: IElement): this;
  addIdentifier(identifier: IIdentifier): this;
  setActive(active: boolean): this;
  setType(type: GroupTypeEnum | GroupType): this;
  setActual(actual: boolean): this;
  setCode(code: ICodeableConcept): this;
  setName(name: string): this;
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
    this.group = new Group();
  }

  addCharacteristic(characteristic: IGroupCharacteristic): this {
    //TODO Validate references
    this.group.characteristic = this.group.characteristic || [];
    this.group.characteristic.push(characteristic);
    return this;
  }

  addIdentifier(identifier: IIdentifier): this {
    if (identifier.assigner?.reference) {
      validateReference(identifier.assigner.reference, ['Organization']);
    }
    this.group.identifier = this.group.identifier || [];
    this.group.identifier.push(identifier);
    return this;
  }

  addMember(member: IGroupMember): this {
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
    this.group.member = this.group.member || [];
    this.group.member.push(member);
    return this;
  }

  build(): Group {
    return JSON.parse(this.serialize());
  }

  raw(): Group {
    return {
      ...this.group,
      ...super.entity(),
    };
  }

  serialize(): string {
    return JSON.stringify(this.raw());
  }

  setActive(active: boolean): this {
    this.group.active = active;
    return this;
  }

  setActual(actual: boolean): this {
    this.group.actual = actual;
    return this;
  }

  setCode(code: ICodeableConcept): this {
    this.group.code = code;
    return this;
  }

  setManagingEntity(managingEntity: IReference): this {
    if (managingEntity.reference) {
      validateReference(managingEntity.reference, [
        'Organization',
        'Practitioner',
        'PractitionerRole',
        'RelatedPerson',
      ]);
    }

    this.group.managingEntity = managingEntity;
    return this;
  }

  setMultipleCharacteristic(characteristics: IGroupCharacteristic[]): this {
    //TODO Validate references
    this.group.characteristic = characteristics;
    return this;
  }

  setMultipleIdentifier(identifiers: IIdentifier[]): this {
    identifiers.forEach((identifier) => {
      if (identifier.assigner?.reference) {
        validateReference(identifier.assigner.reference, ['Organization']);
      }
    });
    this.group.identifier = identifiers;
    return this;
  }

  setMultipleMember(members: IGroupMember[]): this {
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

  setName(name: string): this {
    this.group.name = name;
    return this;
  }

  setParamExtension(param: ParamType, extension: IElement): this {
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
}
