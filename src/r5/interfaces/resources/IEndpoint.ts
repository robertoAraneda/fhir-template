import { EndpointStatusEnum } from '../../enums/EndpointStatusEnum';
import { EndpointStatusType } from '../../types';
import { IDomainResource, IElement, IReference } from '../base';
import { ICodeableConcept, IContactPoint, IIdentifier, IPeriod } from '../datatypes';
import { IEndpointPayload } from '../backbones';

export interface IEndpoint extends IDomainResource {
  /**
   * Identifies this endpoint across multiple systems.
   * @see http://hl7.org/fhir/endpoint-definitions.html#Endpoint.identifier
   */
  identifier?: IIdentifier[];
  /**
   * active | suspended | error | off | test.
   * Binding: EndpointStatus (required)
   * @see http://hl7.org/fhir/endpoint-definitions.html#Endpoint.status
   */
  status?: EndpointStatusEnum | EndpointStatusType;
  _status?: IElement;
  /**
   * Protocol/Profile/Standard to be used with this endpoint connection.
   * Binding: Endpoint Connection Type (Example)
   * @see http://hl7.org/fhir/endpoint-definitions.html#Endpoint.connectionType
   */
  connectionType: ICodeableConcept[];
  /**
   * A name that this endpoint can be identified by.
   * @see http://hl7.org/fhir/endpoint-definitions.html#Endpoint.name
   */
  name?: string;

  /**
   * Extension for name
   */
  _name?: IElement;
  /**
   * Additional details about the endpoint that could be displayed as further information to identify the description beyond its name.
   * @see http://hl7.org/fhir/endpoint-definitions.html#Endpoint.description
   */
  description?: string;
  _description?: IElement;
  /**
   * The type of environment(s) exposed at this endpoint
   * Binding: Endpoint Environment (Extensible)
   * @see http://hl7.org/fhir/R5/endpoint-definitions.html#Endpoint.environmentType
   */
  environmentType?: ICodeableConcept[];
  /**
   * Organization that manages this endpoint (might not be the organization that exposes the endpoint).
   * @see http://hl7.org/fhir/endpoint-definitions.html#Endpoint.managingOrganization
   */
  managingOrganization?: IReference;
  /**
   * Contact details for source (e.g. troubleshooting).
   * @see http://hl7.org/fhir/endpoint-definitions.html#Endpoint.contact
   */
  contact?: IContactPoint[];
  /**
   * The interval during which the endpoint is expected to be operational.
   * @see http://hl7.org/fhir/endpoint-definitions.html#Endpoint.period
   */
  period?: IPeriod;
  /**
   * Set of payloads that are provided by this endpoint.
   * @see http://hl7.org/fhir/endpoint-definitions.html#Endpoint.payload
   */
  payload?: IEndpointPayload[];
  /**
   * The technical base address for connecting to this endpoint.
   * @see http://hl7.org/fhir/endpoint-definitions.html#Endpoint.address
   */
  address: string;
  _address?: IElement;
  /**
   * Usage depends on the channel type.
   * @see http://hl7.org/fhir/endpoint-definitions.html#Endpoint.header
   */
  header?: string[];
  _header?: IElement;
}
