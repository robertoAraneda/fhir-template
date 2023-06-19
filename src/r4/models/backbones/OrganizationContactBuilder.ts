import { IBuildable } from '../../../globals/interfaces';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElementBuilder } from '../base/ElementBuilder';
import { IAddress, ICodeableConcept, IContactPoint, IHumanName } from '../../interfaces/datatypes';
import OrganizationContact from './OrganizationContact';

export interface IOrganizationContactBuilder
  extends IBuildable<OrganizationContact>,
    IBackboneElementBuilder<OrganizationContactBuilder>,
    IElementBuilder<OrganizationContactBuilder> {
  setPurpose(purpose: ICodeableConcept): OrganizationContactBuilder;

  setName(name: IHumanName): OrganizationContactBuilder;

  addTelecom(telecom: IContactPoint): OrganizationContactBuilder;

  setMultipleTelecom(telecom: IContactPoint[]): OrganizationContactBuilder;

  setAddress(address: IAddress): OrganizationContactBuilder;
}

export class OrganizationContactBuilder
  extends BackboneElementBuilder<OrganizationContactBuilder>
  implements IOrganizationContactBuilder
{
  private readonly organizationContact: OrganizationContact;

  constructor() {
    super();
    this.organizationContact = new OrganizationContact();
  }

  addTelecom(telecom: IContactPoint): OrganizationContactBuilder {
    this.organizationContact.telecom = this.organizationContact.telecom || [];
    this.organizationContact.telecom.push(telecom);
    return this;
  }

  build(): OrganizationContact {
    Object.assign(this.organizationContact, { ...super.entity() });
    return this.organizationContact.toJson();
  }

  setAddress(address: IAddress): OrganizationContactBuilder {
    this.organizationContact.address = address;
    return this;
  }

  setMultipleTelecom(telecom: IContactPoint[]): OrganizationContactBuilder {
    this.organizationContact.telecom = telecom;
    return this;
  }

  setName(name: IHumanName): OrganizationContactBuilder {
    this.organizationContact.name = name;
    return this;
  }

  setPurpose(purpose: ICodeableConcept): OrganizationContactBuilder {
    this.organizationContact.purpose = purpose;
    return this;
  }
}
