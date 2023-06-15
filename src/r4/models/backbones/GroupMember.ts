import { IGroupMember } from '../../interfaces/backbones';
import { IExtension, IPeriod, IReference } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';

export default class GroupMember implements IGroupMember {
  // Element attributes
  id: string;
  extension: IExtension[];

  // BackBoneElement attributes
  modifierExtension: IExtension[];

  // GroupMember attributes
  entity: IReference;
  period: IPeriod;
  inactive: boolean;

  // Extensions
  _inactive?: IElement;

  constructor(args?: IGroupMember) {
    Object.assign(this, args);
  }
}
