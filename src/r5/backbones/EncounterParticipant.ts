import { BackboneElement } from '../datatypes/BackboneElement';
import { CodeableConcept } from '../datatypes/CodeableConcept';
import { Period } from '../datatypes/Period';
import { Reference } from '../datatypes/Reference';
import { Practitioner } from '../resources/Practitioner';
import { Patient } from '../resources/Patient';
import { RelatedPerson } from '../resources/RelatedPerson';
import { PractitionerRole } from '../resources/PractitionerRole';

type EncounterParticipantActorReference = Patient | Practitioner | RelatedPerson | PractitionerRole | string;
export class EncounterParticipant extends BackboneElement {
  type?: CodeableConcept[];
  period?: Period;
  actor?: Reference<EncounterParticipantActorReference>;

  constructor(args?: Partial<EncounterParticipant>) {
    super();
    Object.assign(this, args);
  }
}
