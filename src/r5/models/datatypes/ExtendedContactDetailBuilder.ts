import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import {
  IAddress,
  ICodeableConcept,
  IContactPoint,
  IExtendedContactDetail,
  IHumanName,
  IPeriod,
  IReference,
} from '../../interfaces/datatypes';
import { ExtendedContactDetail } from './index';
import { IBuildable } from '../../../globals/interfaces';

/**
 * @description Represents a builder for an extended contact detail
 * @author Roberto Araneda
 */

interface IExtendedContactDetailBuilder
  extends IBuildable<ExtendedContactDetail>,
    IElementBuilder<ExtendedContactDetailBuilder> {
  setPurpose(purpose: ICodeableConcept): this;
  addName(name: IHumanName): ExtendedContactDetailBuilder;
  setMultipleName(names: IHumanName[]): this;
  addTelecom(telecom: IContactPoint): this;
  setMultipleTelecom(telecoms: IContactPoint[]): this;
  setAddress(address: IAddress): this;
  setPeriod(period: IPeriod): this;
  setOrganization(organization: IReference): this;
}
export default class ExtendedContactDetailBuilder
  extends ElementBuilder<ExtendedContactDetailBuilder>
  implements IExtendedContactDetailBuilder
{
  private readonly extendedContactDetail: IExtendedContactDetail;

  constructor() {
    super();
    this.extendedContactDetail = {} as IExtendedContactDetail;
  }

  /**
   * @description Set purpose of the extended contact detail
   * @param purpose
   * @returns ExtendedContactDetailBuilder The builder
   */
  setPurpose(purpose: ICodeableConcept): this {
    this.extendedContactDetail.purpose = purpose;
    return this;
  }

  /**
   * @description Add a name to the extended contact detail
   * @param name
   * @returns ExtendedContactDetailBuilder The builder
   */
  addName(name: IHumanName): this {
    this.extendedContactDetail.name = this.extendedContactDetail.name || [];
    this.extendedContactDetail.name.push(name);
    return this;
  }

  /**
   * @description Set multiple names to the extended contact detail
   * @param names
   * @returns ExtendedContactDetailBuilder The builder
   */
  setMultipleName(names: IHumanName[]): this {
    this.extendedContactDetail.name = names;
    return this;
  }

  /**
   * @description Add a telecom to the extended contact detail
   * @param telecom
   * @returns ExtendedContactDetailBuilder The builder
   */
  addTelecom(telecom: IContactPoint): this {
    this.extendedContactDetail.telecom = this.extendedContactDetail.telecom || [];
    this.extendedContactDetail.telecom.push(telecom);
    return this;
  }

  /**
   * @description Set multiple telecoms to the extended contact detail
   * @param telecoms
   * @returns ExtendedContactDetailBuilder The builder
   */
  setMultipleTelecom(telecoms: IContactPoint[]): this {
    this.extendedContactDetail.telecom = telecoms;
    return this;
  }

  /**
   * @description Set the address of the extended contact detail
   * @param address
   * @returns ExtendedContactDetailBuilder The builder
   */
  setAddress(address: IAddress): this {
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
  setOrganization(organization: IReference): this {
    this.extendedContactDetail.organization = organization;
    return this;
  }

  /**
   * @description Set the period of the extended contact detail
   * @param period
   * @returns ExtendedContactDetailBuilder The builder
   */
  setPeriod(period: IPeriod): this {
    this.extendedContactDetail.period = period;
    return this;
  }

  /**
   * @description Build the extended contact detail
   * @returns IExtendedContactDetail The extended contact detail
   */
  build(): ExtendedContactDetail {
    Object.assign(this.extendedContactDetail, { ...super.entity() });
    return new ExtendedContactDetail(this.extendedContactDetail).toJson();
  }
}
