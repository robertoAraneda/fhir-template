import { ElementBuilder } from '../base/ElementBuilder';
import { IBuildable, ISerializable } from '../../interfaces/base';
import {
  IAddress,
  ICodeableConcept,
  IContactPoint,
  IDuration,
  IExtendedContactDetail,
  IHumanName,
  IPeriod,
  IReference,
} from '../../interfaces/datatypes';
import { ExtendedContactDetail } from '../../models/datatypes/ExtendedContactDetail';
import { validateReference } from '../../helpers/validateReference';

/**
 * @description Represents a builder for an extended contact detail
 * @example ```typescript
 * const extendedContactDetail = new ExtendedContactDetailBuilder()
 * .setPurpose({
 *     coding: [
 *      {
 *          system: "http://terminology.hl7.org/CodeSystem/contactentity-type",
 *          code: "ADMIN"
 *      }
 *   ]
 * })
 * .addName({
 *    family: "example",
 *    given: ["example"]
 * })
 * .addTelecom({
 *    system: "phone",
 *    value: "555-555-5555"
 * })
 * .setAddress({
 *    city: "example",
 *    country: "example",
 *    line: ["example"],
 *    postalCode: "example",
 *    state: "example"
 * })
 * .setPeriod({
 *    start: "2020-01-01",
 *    end: "2020-01-01"
 * })
 * .build();
 * ```
 * @author Roberto Araneda
 */
export class ExtendedContactDetailBuilder
  extends ElementBuilder<ExtendedContactDetailBuilder>
  implements IBuildable<IExtendedContactDetail>, ISerializable
{
  private extendedContactDetail: IExtendedContactDetail;

  constructor() {
    super();
    this.extendedContactDetail = new ExtendedContactDetail();
  }

  /**
   * @description Create a new Duration from a JSON representation
   * @param json
   * @returns DurationBuilder The builder
   */
  fromJSON(json: IExtendedContactDetail) {
    this.extendedContactDetail = json;

    return {
      build: () => this.build(),
      serialize: () => this.serialize(),
    };
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
  build(): IExtendedContactDetail {
    return JSON.parse(this.serialize());
  }

  /**
   * @description Return native object representation of extended contact detail
   */
  raw(): IExtendedContactDetail {
    return {
      ...this.extendedContactDetail,
      ...super.entity(),
    };
  }

  /**
   * @description Return a string representation of extended contact detail
   */
  serialize(): string {
    return JSON.stringify(this.raw());
  }
}
