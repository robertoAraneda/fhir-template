import { _validateBackbone } from './validators/BaseValidator';
import { ValidateProperties } from './interfaces/ValidateProperties';

type Wait = Promise<ValidateProperties>;

class BackboneElement {
  private constructor() {}

  static EndpointPayload(data: unknown): Wait {
    return _validateBackbone(data, 'Endpoint_Payload');
  }

  static OrganizationQualification(data: unknown): Wait {
    return _validateBackbone(data, 'Organization_Qualification');
  }
  static PatientContact(data: unknown): Wait {
    return _validateBackbone(data, 'Patient_Contact');
  }

  static PatientCommunication(data: unknown): Wait {
    return _validateBackbone(data, 'Patient_Communication');
  }

  static PatientLink(data: unknown): Wait {
    return _validateBackbone(data, 'Patient_Link');
  }

  static PersonCommunication(data: unknown): Wait {
    return _validateBackbone(data, 'Person_Communication');
  }

  static PersonLink(data: unknown): Wait {
    return _validateBackbone(data, 'Person_Link');
  }

  static PractitionerCommunication(data: unknown): Wait {
    return _validateBackbone(data, 'Practitioner_Communication');
  }

  static PractitionerQualification(data: unknown): Wait {
    return _validateBackbone(data, 'Practitioner_Qualification');
  }

  static RelatedPersonCommunication(data: unknown): Wait {
    return _validateBackbone(data, 'RelatedPerson_Communication');
  }
}

export default BackboneElement;
