import { DomainResource } from '../datatypes/DomainResource';
import { CodeableConcept } from '../datatypes/CodeableConcept';
import { EncounterStatus } from '../enums/EncounterStatus';
import { EncounterStatusType } from '../types/EncounterStatusType';
import { Identifier } from '../datatypes/Identifier';
import { CodeableReference } from '../datatypes/CodeableReference';
import { Reference } from '../datatypes/Reference';
import { Patient } from './Patient';
import { Organization } from './Organization';
import { EncounterParticipant } from '../backbones/EncounterParticipant';
import { VirtualServiceDetail } from '../datatypes/VirtualServiceDetail';
import { Period } from '../datatypes/Period';
import { Duration } from '../datatypes/Duration';
import { EncounterReason } from '../backbones/EncounterReason';
import { EncounterDiagnosis } from '../backbones/EncounterDiagnosis';
import { EncounterAdmission } from '../backbones/EncounterAdmission';
import { EncounterLocation } from '../backbones/EncounterLocation';
import {
  AccountReference,
  AppointmentReference,
  BasedOnReference,
  CareTeamReference,
  EpisodeOfCareReference,
  PartOfReference,
  ServiceProviderReference,
  ServiceTypeReference,
  SubjectReference,
} from '../types/EncounterTypes';

/**
 * @description An interaction during which services are provided to the patient
 * @summary Encounter
 * @see <a href="http://hl7.org/fhir/StructureDefinition/Encounter">StructureDefinition Encounter</a>
 * @see <a href="https://www.hl7.org/fhir/encounter.html">Encounter</a>
 * @author Roberto Araneda
 * @since  2023-05-29
 */
export class Encounter extends DomainResource {
  resourceType = 'Encounter';

  /**
   * @description Identifier(s) by which this encounter is known
   * @see {@link https://www.hl7.org/fhir/encounter-definitions.html#Encounter.identifier identifier}
   * @type {?Array.<Identifier>} identifier
   */
  identifier?: Identifier[];

  /**
   * @description 	planned | in-progress | on-hold | discharged | completed | cancelled | discontinued | entered-in-error | unknown.
   * @description Binding: {@link https://www.hl7.org/fhir/valueset-encounter-status.html Encounter Status} (Required)
   * @see {@link https://www.hl7.org/fhir/encounter-definitions.html#Encounter.status status}
   * @type {?EncounterStatus | EncounterStatusType} status
   */
  status?: EncounterStatus | EncounterStatusType;

  /**
   * @description Classification of patient encounter context - e.g. Inpatient, outpatient.
   * @description Binding: {@link https://www.hl7.org/fhir/valueset-encounter-class.html Encounter Class} (Prefered)
   * @see {@link https://www.hl7.org/fhir/encounter-definitions.html#Encounter.class class}
   * @type {?CodeableConcept} class
   */
  class?: CodeableConcept[];

  /**
   * @description 	Indicates the urgency of the encounter.
   * @description Binding: {@link https://www.hl7.org/fhir/valueset-encounter-priority.html Encounter Priority} (Example)
   * @see {@link https://www.hl7.org/fhir/encounter-definitions.html#Encounter.priority priority}
   * @type {?CodeableConcept} priority
   */
  priority?: CodeableConcept;

  /**
   * @description Specific type of encounter (e.g. e-mail consultation, surgical day-care, ...)
   * @description Binding: {@link https://www.hl7.org/fhir/valueset-encounter-type.html Encounter Type} (Example)
   * @see {@link https://www.hl7.org/fhir/encounter-definitions.html#Encounter.type type}
   * @type {?Array.<CodeableConcept>} type
   */
  type?: CodeableConcept[];
  serviceType?: CodeableReference<ServiceTypeReference>[];
  subject?: Reference<SubjectReference>;
  subjectStatus?: CodeableConcept;
  episodeOfCare?: Reference<EpisodeOfCareReference>[];
  basedOn?: Reference<BasedOnReference>[];
  careTeam?: Reference<CareTeamReference>[];
  partOf?: Reference<PartOfReference>;
  serviceProvider?: Reference<ServiceProviderReference>;
  participant?: EncounterParticipant[];
  appointment?: Reference<AppointmentReference>[];
  virtualService?: VirtualServiceDetail[];
  actualPeriod?: Period;
  plannedStartDate?: string;
  plannedEndDate?: string;
  length?: Duration;
  reason?: EncounterReason[];
  diagnosis?: EncounterDiagnosis[];
  account?: Reference<AccountReference>[];
  dietPreference?: CodeableConcept[];
  specialArrangement?: CodeableConcept[];
  specialCourtesy?: CodeableConcept[];
  admission: EncounterAdmission;
  location?: EncounterLocation[];

  constructor(args?: Partial<Encounter>) {
    super();
    Object.assign(this, args);
  }
}
