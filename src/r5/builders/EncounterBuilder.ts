import { DomainResourceBuilder } from './DomainResourceBuilder';
import { Encounter } from '../resources/Encounter';
import { Identifier } from '../datatypes/Identifier';
import { EncounterStatus } from '../enums/EncounterStatus';
import { EncounterStatusType } from '../types/EncounterStatusType';
import { CodeableConcept } from '../datatypes/CodeableConcept';
import { CodeableReference } from '../datatypes/CodeableReference';
import { Reference } from '../datatypes/Reference';
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

export class EncounterBuilder extends DomainResourceBuilder<EncounterBuilder, Encounter> {
  private _resourceType = 'Encounter';
  private _identifier?: Identifier[];
  private _status?: EncounterStatus | EncounterStatusType;
  private _class?: CodeableConcept[];
  private _priority?: CodeableConcept;
  private _type?: CodeableConcept[];
  private _serviceType?: CodeableReference<ServiceTypeReference>[];
  private _subject?: Reference<SubjectReference>;
  private _subjectStatus?: CodeableConcept;
  private _episodeOfCare?: Reference<EpisodeOfCareReference>[];
  private _basedOn?: Reference<BasedOnReference>[];
  private _careTeam?: Reference<CareTeamReference>[];
  private _partOf?: Reference<PartOfReference>;
  private _serviceProvider?: Reference<ServiceProviderReference>;
  private _participant?: EncounterParticipant[];
  private _appointment?: Reference<AppointmentReference>[];
  private _virtualService?: VirtualServiceDetail[];
  private _actualPeriod?: Period;
  private _plannedStartDate?: string;
  private _plannedEndDate?: string;
  private _length?: Duration;
  private _reason?: EncounterReason[];
  private _diagnosis?: EncounterDiagnosis[];
  private _account?: Reference<AccountReference>[];
  private _dietPreference?: CodeableConcept[];
  private _specialArrangement?: CodeableConcept[];
  private _specialCourtesy?: CodeableConcept[];
  private _admission: EncounterAdmission;
  private _location?: EncounterLocation[];

  addIdentifier(identifier: Identifier): EncounterBuilder {
    this._identifier = this._identifier || [];
    this._identifier.push(identifier);
    return this;
  }

  setStatus(status: EncounterStatus | EncounterStatusType): EncounterBuilder {
    this._status = status;
    return this;
  }

  addClass(klass: CodeableConcept): EncounterBuilder {
    this._class = this._class || [];
    this._class.push(klass);
    return this;
  }

  setPriority(priority: CodeableConcept): EncounterBuilder {
    this._priority = priority;
    return this;
  }

  addType(type: CodeableConcept): EncounterBuilder {
    this._type = this._type || [];
    this._type.push(type);
    return this;
  }

  addServiceType(serviceType: CodeableReference<ServiceTypeReference>): EncounterBuilder {
    this._serviceType = this._serviceType || [];
    this._serviceType.push(serviceType);
    return this;
  }

  setSubject(subject: Reference<SubjectReference>): EncounterBuilder {
    this._subject = subject;
    return this;
  }

  setSubjectStatus(subjectStatus: CodeableConcept): EncounterBuilder {
    this._subjectStatus = subjectStatus;
    return this;
  }

  addEpisodeOfCare(episodeOfCare: Reference<EpisodeOfCareReference>): EncounterBuilder {
    this._episodeOfCare = this._episodeOfCare || [];
    this._episodeOfCare.push(episodeOfCare);
    return this;
  }

  addBasedOn(basedOn: Reference<BasedOnReference>): EncounterBuilder {
    this._basedOn = this._basedOn || [];
    this._basedOn.push(basedOn);
    return this;
  }

  addCareTeam(careTeam: Reference<CareTeamReference>): EncounterBuilder {
    this._careTeam = this._careTeam || [];
    this._careTeam.push(careTeam);
    return this;
  }

  setPartOf(partOf: Reference<PartOfReference>): EncounterBuilder {
    this._partOf = partOf;
    return this;
  }

  setServiceProvider(serviceProvider: Reference<ServiceProviderReference>): EncounterBuilder {
    this._serviceProvider = serviceProvider;
    return this;
  }

  addParticipant(participant: EncounterParticipant): EncounterBuilder {
    this._participant = this._participant || [];
    this._participant.push(participant);
    return this;
  }

  addAppointment(appointment: Reference<AppointmentReference>): EncounterBuilder {
    this._appointment = this._appointment || [];
    this._appointment.push(appointment);
    return this;
  }

  addVirtualService(virtualService: VirtualServiceDetail): EncounterBuilder {
    this._virtualService = this._virtualService || [];
    this._virtualService.push(virtualService);
    return this;
  }

  setActualPeriod(actualPeriod: Period): EncounterBuilder {
    this._actualPeriod = actualPeriod;
    return this;
  }

  setPlannedStartDate(plannedStartDate: string): EncounterBuilder {
    this._plannedStartDate = plannedStartDate;
    return this;
  }

  setPlannedEndDate(plannedEndDate: string): EncounterBuilder {
    this._plannedEndDate = plannedEndDate;
    return this;
  }

  setLength(length: Duration): EncounterBuilder {
    this._length = length;
    return this;
  }

  addReason(reason: EncounterReason): EncounterBuilder {
    this._reason = this._reason || [];
    this._reason.push(reason);
    return this;
  }

  addDiagnosis(diagnosis: EncounterDiagnosis): EncounterBuilder {
    this._diagnosis = this._diagnosis || [];
    this._diagnosis.push(diagnosis);
    return this;
  }

  addAccount(account: Reference<AccountReference>): EncounterBuilder {
    this._account = this._account || [];
    this._account.push(account);
    return this;
  }

  addDietPreference(dietPreference: CodeableConcept): EncounterBuilder {
    this._dietPreference = this._dietPreference || [];
    this._dietPreference.push(dietPreference);
    return this;
  }

  addSpecialArrangement(specialArrangement: CodeableConcept): EncounterBuilder {
    this._specialArrangement = this._specialArrangement || [];
    this._specialArrangement.push(specialArrangement);
    return this;
  }

  addSpecialCourtesy(specialCourtesy: CodeableConcept): EncounterBuilder {
    this._specialCourtesy = this._specialCourtesy || [];
    this._specialCourtesy.push(specialCourtesy);
    return this;
  }

  setAdmission(admission: EncounterAdmission): EncounterBuilder {
    this._admission = admission;
    return this;
  }

  addLocation(location: EncounterLocation): EncounterBuilder {
    this._location = this._location || [];
    this._location.push(location);
    return this;
  }

  setMultipleIdentifier(identifiers: Identifier[]): EncounterBuilder {
    this._identifier = identifiers;
    return this;
  }

  setMultipleClass(classes: CodeableConcept[]): EncounterBuilder {
    this._class = classes;
    return this;
  }

  setMultipleType(types: CodeableConcept[]): EncounterBuilder {
    this._type = types;
    return this;
  }

  setMultipleServiceType(serviceTypes: CodeableReference<ServiceTypeReference>[]): EncounterBuilder {
    this._serviceType = serviceTypes;
    return this;
  }

  setMultipleEpisodeOfCare(episodeOfCares: Reference<EpisodeOfCareReference>[]): EncounterBuilder {
    this._episodeOfCare = episodeOfCares;
    return this;
  }

  setMultipleBasedOn(basedOns: Reference<BasedOnReference>[]): EncounterBuilder {
    this._basedOn = basedOns;
    return this;
  }

  setMultipleCareTeam(careTeams: Reference<CareTeamReference>[]): EncounterBuilder {
    this._careTeam = careTeams;
    return this;
  }

  setMultipleParticipant(participants: EncounterParticipant[]): EncounterBuilder {
    this._participant = participants;
    return this;
  }

  setMultipleAppointment(appointments: Reference<AppointmentReference>[]): EncounterBuilder {
    this._appointment = appointments;
    return this;
  }

  setMultipleVirtualService(virtualServices: VirtualServiceDetail[]): EncounterBuilder {
    this._virtualService = virtualServices;
    return this;
  }

  setMultipleReason(reasons: EncounterReason[]): EncounterBuilder {
    this._reason = reasons;
    return this;
  }

  setMultipleDiagnosis(diagnoses: EncounterDiagnosis[]): EncounterBuilder {
    this._diagnosis = diagnoses;
    return this;
  }

  setMultipleAccount(accounts: Reference<AccountReference>[]): EncounterBuilder {
    this._account = accounts;
    return this;
  }

  setMultipleDietPreference(dietPreferences: CodeableConcept[]): EncounterBuilder {
    this._dietPreference = dietPreferences;
    return this;
  }

  setMultipleArrangement(arrangements: CodeableConcept[]): EncounterBuilder {
    this._specialArrangement = arrangements;
    return this;
  }

  setMultipleCourtesy(courtesies: CodeableConcept[]): EncounterBuilder {
    this._specialCourtesy = courtesies;
    return this;
  }

  setMultipleLocation(locations: EncounterLocation[]): EncounterBuilder {
    this._location = locations;
    return this;
  }

  build(): Encounter {
    const domain = super.build();
    return new Encounter({
      resourceType: this._resourceType,
      ...domain,
      identifier: this._identifier,
      status: this._status,
      class: this._class,
      priority: this._priority,
      type: this._type,
      serviceType: this._serviceType,
      subject: this._subject,
      subjectStatus: this._subjectStatus,
      episodeOfCare: this._episodeOfCare,
      basedOn: this._basedOn,
      careTeam: this._careTeam,
      partOf: this._partOf,
      serviceProvider: this._serviceProvider,
      participant: this._participant,
      appointment: this._appointment,
      virtualService: this._virtualService,
      actualPeriod: this._actualPeriod,
      plannedStartDate: this._plannedStartDate,
      plannedEndDate: this._plannedEndDate,
      length: this._length,
      reason: this._reason,
      diagnosis: this._diagnosis,
      account: this._account,
      dietPreference: this._dietPreference,
      specialArrangement: this._specialArrangement,
      specialCourtesy: this._specialCourtesy,
      admission: this._admission,
      location: this._location,
    });
  }
}
