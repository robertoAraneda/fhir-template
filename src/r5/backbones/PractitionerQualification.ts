import { CodeableConcept } from '../datatypes/CodeableConcept';
import { Identifier } from '../datatypes/Identifier';
import { Reference } from '../datatypes/Reference';
import { Organization } from '../resources/Organization';
import { Period } from '../datatypes/Period';
import { BackboneElement } from '../datatypes/BackboneElement';

export class PractitionerQualification extends BackboneElement {
  /**
   * Coded representation of the qualification
   * @type {CodeableConcept}
   * @memberof OrganizationQualification
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.qualification.code
   */
  code: CodeableConcept;

  /**
   * An identifier for this qualification for the organization
   * @type {Identifier[]}
   * @memberof OrganizationQualification
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.qualification.identifier
   */
  identifier?: Identifier[];

  /**
   * Organization that regulates and issues the qualification
   * @type {Reference<Organization | string>}
   * @memberof OrganizationQualification
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.qualification.issuer
   */
  issuer?: Reference<Organization | string>;

  /**
   * Period during which the qualification is valid
   * @type {Period}
   * @memberof OrganizationQualification
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.qualification.period
   */
  period?: Period;
  constructor(args: Partial<PractitionerQualification>) {
    super();
    Object.assign(this, args);

    const validArgs = ['code', 'identifier', 'issuer', 'period'];

    Object.keys(args).forEach((key) => {
      if (!validArgs.includes(key)) throw new Error(`Key ${key} is not valid for type PractitionerQualification`);
    });
  }
}
