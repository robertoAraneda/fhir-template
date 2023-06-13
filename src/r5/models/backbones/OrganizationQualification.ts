import { IOrganizationQualification } from '../../interfaces/backbones';
import { ICodeableConcept, IIdentifier, IPeriod, IReference } from '../../interfaces/datatypes';
import { Extension } from '../datatypes';

export default class OrganizationQualification implements IOrganizationQualification {
  // Element Properties
  id?: string;
  extension?: Extension[];

  // BackboneElement Properties
  modifierExtension?: Extension[];

  // OrganizationQualification Properties
  identifier?: IIdentifier[];
  code: ICodeableConcept;
  issuer?: IReference;
  period?: IPeriod;

  constructor(args?: IOrganizationQualification) {
    Object.assign(this, args);
  }
}
