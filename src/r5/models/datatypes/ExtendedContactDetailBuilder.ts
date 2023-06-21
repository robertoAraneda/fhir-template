import { ElementBuilder } from '../base/ElementBuilder';
import { IAddress, ICodeableConcept, IContactPoint, IHumanName, IPeriod, IReference } from '../../interfaces/datatypes';
import { ExtendedContactDetail } from './index';
import { validateReference } from '../../helpers/validateReference';
import { IBuildable } from '../../../globals/interfaces';
import { IElementBuilder } from '../../../r4/models/base/ElementBuilder';

/**
 * @description Represents a builder for an extended contact detail
 * @author Roberto Araneda
 */

interface IExtendedContactDetailBuilder
  extends IBuildable<ExtendedContactDetail>,
    IElementBuilder<ExtendedContactDetailBuilder> {
  setPurpose(purpose: ICodeableConcept): ExtendedContactDetailBuilder;
  addName(name: IHumanName): ExtendedContactDetailBuilder;
  setMultipleName(names: IHumanName[]): ExtendedContactDetailBuilder;
  addTelecom(telecom: IContactPoint): ExtendedContactDetailBuilder;
  setMultipleTelecom(telecoms: IContactPoint[]): ExtendedContactDetailBuilder;
  setAddress(address: IAddress): ExtendedContactDetailBuilder;
  setPeriod(period: IPeriod): ExtendedContactDetailBuilder;
  setOrganization(organization: IReference): ExtendedContactDetailBuilder;
}
export default class ExtendedContactDetailBuilder
  extends ElementBuilder<ExtendedContactDetailBuilder>
  implements IExtendedContactDetailBuilder
{
  private readonly extendedContactDetail: ExtendedContactDetail;

  constructor() {
    super();
    this.extendedContactDetail = new ExtendedContactDetail();
  }

  /**
   * @description Set purpose of the extended contact detail
   * @param purpose
   * @returns ExtendedContactDetailBuilder The builder
   */
  setPurpose(purpose: ICodeableConcept): ExtendedContactDetailBuilder {
    this.extendedContactDetail.purpose = purpose;
    return this;
  }

  /**
   * @description Add a name to the extended contact detail
   * @param name
   * @returns ExtendedContactDetailBuilder The builder
   */
  addName(name: IHumanName): ExtendedContactDetailBuilder {
    this.extendedContactDetail.name = this.extendedContactDetail.name || [];
    this.extendedContactDetail.name.push(name);
    return this;
  }

  /**
   * @description Set multiple names to the extended contact detail
   * @param names
   * @returns ExtendedContactDetailBuilder The builder
   */
  setMultipleName(names: IHumanName[]): ExtendedContactDetailBuilder {
    this.extendedContactDetail.name = names;
    return this;
  }

  /**
   * @description Add a telecom to the extended contact detail
   * @param telecom
   * @returns ExtendedContactDetailBuilder The builder
   */
  addTelecom(telecom: IContactPoint): ExtendedContactDetailBuilder {
    this.extendedContactDetail.telecom = this.extendedContactDetail.telecom || [];
    this.extendedContactDetail.telecom.push(telecom);
    return this;
  }

  /**
   * @description Set multiple telecoms to the extended contact detail
   * @param telecoms
   * @returns ExtendedContactDetailBuilder The builder
   */
  setMultipleTelecom(telecoms: IContactPoint[]): ExtendedContactDetailBuilder {
    this.extendedContactDetail.telecom = telecoms;
    return this;
  }

  /**
   * @description Set the address of the extended contact detail
   * @param address
   * @returns ExtendedContactDetailBuilder The builder
   */
  setAddress(address: IAddress): ExtendedContactDetailBuilder {
    this.extendedContactDetail.address = address;
    return this;
  }

  /**
   * @description Set the address of the extended contact detail
   * @param organization
   * @returns ExtendedContactDetailBuilder The builder
   * @throws {Error} if the reference is not of type Organization
   * @throws {Error} if the reference is not a valid FHIR reference
   */
  setOrganization(organization: IReference): ExtendedContactDetailBuilder {
    if (organization.reference) {
      validateReference(organization.reference, ['Organization']);
    }
    this.extendedContactDetail.organization = organization;
    return this;
  }

  /**
   * @description Set the period of the extended contact detail
   * @param period
   * @returns ExtendedContactDetailBuilder The builder
   */
  setPeriod(period: IPeriod): ExtendedContactDetailBuilder {
    this.extendedContactDetail.period = period;
    return this;
  }

  /**
   * @description Build the extended contact detail
   * @returns IExtendedContactDetail The extended contact detail
   */
  build(): ExtendedContactDetail {
    Object.assign(this.extendedContactDetail, { ...super.entity() });
    return this.extendedContactDetail.toJson();
  }
}
