import { Patient } from '../resources/Patient';
import { Organization } from '../resources/Organization';
import { Encounter } from '../resources/Encounter';

export type ServiceTypeReference = any;
export type SubjectReference = Patient | string;
export type EpisodeOfCareReference = any;
export type BasedOnReference = any;
export type CareTeamReference = any;
export type PartOfReference = Encounter | string;
export type ServiceProviderReference = Organization | string;
export type AppointmentReference = any;
export type AccountReference = any;
