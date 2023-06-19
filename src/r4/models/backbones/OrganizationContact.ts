import { IOrganizationContact } from '../../interfaces/backbones';
import { IAddress, ICodeableConcept, IContactPoint, IHumanName } from '../../interfaces/datatypes';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../../builders/base/BackboneElementBuilder';
import { IElementBuilder } from '../../builders/base/ElementBuilder';
import BackboneElement from './BackboneElement';

export default class OrganizationContact extends BackboneElement implements IOrganizationContact {
  // OrganizationContact attributes
  address: IAddress;
  name: IHumanName;
  purpose: ICodeableConcept;
  telecom: IContactPoint[];

  static builder(): IOrganizationContactBuilder {
    return new OrganizationContactBuilder();
  }

  constructor(args?: IOrganizationContact) {
    super();
    Object.assign(this, args);
  }
}

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

class OrganizationContactBuilder
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
