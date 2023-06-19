import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { IOrganizationContact } from '../../interfaces/backbones';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElementBuilder } from '../base/ElementBuilder';
import { IAddress, ICodeableConcept, IContactPoint, IHumanName } from '../../interfaces/datatypes';

export interface IOrganizationContactBuilder
  extends IBuildable<IOrganizationContact>,
    ISerializable,
    IBackboneElementBuilder<IOrganizationContactBuilder>,
    IElementBuilder<IOrganizationContactBuilder> {
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

  build(): IOrganizationContact {
    return JSON.parse(this.buildAsString());
  }

  compileAsDefault(): IOrganizationContact {
    return {
      ...this.organizationContact,
      ...super.entity(),
    };
  }

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault());
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
