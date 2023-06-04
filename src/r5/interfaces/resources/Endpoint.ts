import { DomainResource } from '../base/DomainResource';
import { Identifier } from '../datatypes/Identifier';
import { EndpointStatus } from '../../enums/EndpointStatus';
import { EndpointStatusType } from '../../types/EndpointStatusType';
import { CodeableConcept } from '../datatypes/CodeableConcept';
import { Reference } from '../base/Reference';
import { Period } from '../datatypes/Period';
import { EndpointPayload } from '../backbones/EndpointPayload';
import { ContactPoint } from '../datatypes/ContactPoint';
import { Element } from '../base/Element';

export interface Endpoint extends DomainResource {
  /**
   * Identifies this endpoint across multiple systems.
   * @see http://hl7.org/fhir/endpoint-definitions.html#Endpoint.identifier
   */
  identifier?: Identifier[];
  /**
   * active | suspended | error | off | test.
   * Binding: EndpointStatus (required)
   * @see http://hl7.org/fhir/endpoint-definitions.html#Endpoint.status
   */
  status?: EndpointStatus | EndpointStatusType;
  _status?: Element;
  /**
   * Protocol/Profile/Standard to be used with this endpoint connection.
   * Binding: Endpoint Connection Type (Example)
   * @see http://hl7.org/fhir/endpoint-definitions.html#Endpoint.connectionType
   */
  connectionType: CodeableConcept[];
  /**
   * A name that this endpoint can be identified by.
   * @see http://hl7.org/fhir/endpoint-definitions.html#Endpoint.name
   */
  name?: string;

  /**
   * Extension for name
   */
  _name?: Element;
  /**
   * Additional details about the endpoint that could be displayed as further information to identify the description beyond its name.
   * @see http://hl7.org/fhir/endpoint-definitions.html#Endpoint.description
   */
  description?: string;
  _description?: Element;
  /**
   * The type of environment(s) exposed at this endpoint
   * Binding: Endpoint Environment (Extensible)
   * @see http://hl7.org/fhir/R5/endpoint-definitions.html#Endpoint.environmentType
   */
  environmentType?: CodeableConcept[];
  /**
   * Organization that manages this endpoint (might not be the organization that exposes the endpoint).
   * @see http://hl7.org/fhir/endpoint-definitions.html#Endpoint.managingOrganization
   */
  //TODO: Fix this type
  managingOrganization?: Reference;
  /**
   * Contact details for source (e.g. troubleshooting).
   * @see http://hl7.org/fhir/endpoint-definitions.html#Endpoint.contact
   */
  contact?: ContactPoint[];
  /**
   * The interval during which the endpoint is expected to be operational.
   * @see http://hl7.org/fhir/endpoint-definitions.html#Endpoint.period
   */
  period?: Period;
  /**
   * Set of payloads that are provided by this endpoint.
   * @see http://hl7.org/fhir/endpoint-definitions.html#Endpoint.payload
   */
  payload?: EndpointPayload[];
  /**
   * The technical base address for connecting to this endpoint.
   * @see http://hl7.org/fhir/endpoint-definitions.html#Endpoint.address
   */
  address: string;
  _address?: Element;
  /**
   * Usage depends on the channel type.
   * @see http://hl7.org/fhir/endpoint-definitions.html#Endpoint.header
   */
  header?: string[];
  _header?: Element;
}
