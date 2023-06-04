import { _validateBackbone } from './validators/BaseValidator';
import { ValidateProperties } from './interfaces/ValidateProperties';

type Wait = Promise<ValidateProperties>;
const BackboneElementValidator = {
  EndpointPayload: (data: unknown): Wait => _validateBackbone(data, 'Endpoint_Payload'),
  OrganizationQualification: (data: unknown): Wait => _validateBackbone(data, 'Organization_Qualification'),
  PatientContact: (data: unknown): Wait => _validateBackbone(data, 'Patient_Contact'),
  PatientCommunication: (data: unknown): Wait => _validateBackbone(data, 'Patient_Communication'),
  PatientLink: (data: unknown): Wait => _validateBackbone(data, 'Patient_Link'),
  PersonCommunication: (data: unknown): Wait => _validateBackbone(data, 'Person_Communication'),
  PersonLink: (data: unknown): Wait => _validateBackbone(data, 'Person_Link'),
  PractitionerCommunication: (data: unknown): Wait => _validateBackbone(data, 'Practitioner_Communication'),
  PractitionerQualification: (data: unknown): Wait => _validateBackbone(data, 'Practitioner_Qualification'),
  RelatedPersonCommunication: (data: unknown): Wait => _validateBackbone(data, 'RelatedPerson_Communication'),
};

export default BackboneElementValidator;
