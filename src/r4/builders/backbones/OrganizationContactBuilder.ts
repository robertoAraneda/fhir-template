import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IOrganizationContact } from '../../interfaces/backbones';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { IAddress, ICodeableConcept, IContactPoint, IHumanName } from '../../interfaces/datatypes';
import { OrganizationContact } from '../../models/backbones';

interface IOrganizationContactBuilder extends IBuildable<IOrganizationContact>, ISerializable {
  setPurpose(purpose: ICodeableConcept): this;
  setName(name: IHumanName): this;
  addTelecom(telecom: IContactPoint): this;
  setMultipleTelecom(telecom: IContactPoint[]): this;
  setAddress(address: IAddress): this;
}

class OrganizationContactBuilder
  extends BackboneElementBuilder<OrganizationContactBuilder>
  implements IOrganizationContactBuilder
{
  private readonly organizationContact: IOrganizationContact;
  constructor() {
    super();
    this.organizationContact = new OrganizationContact();
  }
  addTelecom(telecom: IContactPoint): this {
    this.organizationContact.telecom = this.organizationContact.telecom || [];
    this.organizationContact.telecom.push(telecom);
    return this;
  }

  build(): IOrganizationContact {
    return JSON.parse(this.serialize());
  }
  raw(): IOrganizationContact {
    return {
      ...this.organizationContact,
      ...super.entity(),
    };
  }

  serialize(): string {
    return JSON.stringify(this.raw());
  }

  setAddress(address: IAddress): this {
    this.organizationContact.address = address;
    return this;
  }

  setMultipleTelecom(telecom: IContactPoint[]): this {
    this.organizationContact.telecom = telecom;
    return this;
  }

  setName(name: IHumanName): this {
    this.organizationContact.name = name;
    return this;
  }

  setPurpose(purpose: ICodeableConcept): this {
    this.organizationContact.purpose = purpose;
    return this;
  }
}

export default OrganizationContactBuilder;
