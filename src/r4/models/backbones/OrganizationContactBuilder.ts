import { IBuildable } from '../../../globals/interfaces';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElementBuilder } from '../base/ElementBuilder';
import { IAddress, ICodeableConcept, IContactPoint, IHumanName } from '../../interfaces/datatypes';
import OrganizationContact from './OrganizationContact';
import { IOrganizationContact } from '../../interfaces/backbones';

interface IBuilders
  extends IBackboneElementBuilder<OrganizationContactBuilder>,
    IElementBuilder<OrganizationContactBuilder> {}

export interface IOrganizationContactBuilder extends IBuildable<OrganizationContact>, IBuilders {
  setPurpose(purpose: ICodeableConcept): this;

  setName(name: IHumanName): this;

  addTelecom(telecom: IContactPoint): this;

  setMultipleTelecom(telecom: IContactPoint[]): this;

  setAddress(address: IAddress): this;
}

export class OrganizationContactBuilder
  extends BackboneElementBuilder<OrganizationContactBuilder>
  implements IOrganizationContactBuilder
{
  private readonly organizationContact: IOrganizationContact;

  constructor() {
    super();
    this.organizationContact = {} as IOrganizationContact;
  }

  addTelecom(telecom: IContactPoint): this {
    this.organizationContact.telecom = this.organizationContact.telecom || [];
    this.organizationContact.telecom.push(telecom);
    return this;
  }

  build(): OrganizationContact {
    Object.assign(this.organizationContact, { ...super.entity() });
    return new OrganizationContact(this.organizationContact).toJson();
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
