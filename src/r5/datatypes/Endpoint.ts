import { Element } from './Element';
import { Identifier } from './Identifier';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';
import { Organization } from '../resources/Organization';
import { ContactPoint } from './ContactPoint';
import { Period } from './Period';
import { EndpointPayload } from '../backbones/EndpointPayload';

export class Endpoint extends Element {
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
  status?: string;
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
   * Additional details about the endpoint that could be displayed as further information to identify the description beyond its name.
   * @see http://hl7.org/fhir/endpoint-definitions.html#Endpoint.description
   */
  description?: string;
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
  managingOrganization?: Reference<Organization | string>;
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
  /**
   * Usage depends on the channel type.
   * @see http://hl7.org/fhir/endpoint-definitions.html#Endpoint.header
   */
  header?: string[];

  constructor(args?: Partial<Endpoint>) {
    super();
    Object.assign(this, args);
  }
}
