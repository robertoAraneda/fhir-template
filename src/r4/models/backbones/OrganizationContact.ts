import { IOrganizationContact } from '../../interfaces/backbones';
import { IAddress, ICodeableConcept, IContactPoint, IExtension, IHumanName } from '../../interfaces/datatypes';

export class OrganizationContact implements IOrganizationContact {
  // Element attributes
  id: string;
  extension: IExtension[];

  // BackBoneElement attributes
  modifierExtension: IExtension[];

  // OrganizationContact attributes
  address: IAddress;
  name: IHumanName;
  purpose: ICodeableConcept;
  telecom: IContactPoint[];

  constructor(args?: IOrganizationContact) {
    Object.assign(this, args);
  }
}
