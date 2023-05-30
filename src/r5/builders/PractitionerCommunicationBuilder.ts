import { CodeableConcept } from '../datatypes/CodeableConcept';
import { PractitionerCommunication } from '../backbones/PractitionerCommunication';

export class PractitionerCommunicationBuilder {
  private _language: CodeableConcept;
  private _preferred?: boolean;

  setLanguage(language: CodeableConcept): PractitionerCommunicationBuilder {
    this._language = language;

    return this;
  }

  setPreferred(preferred: boolean): PractitionerCommunicationBuilder {
    this._preferred = preferred;

    return this;
  }

  build(): PractitionerCommunication {
    return new PractitionerCommunication({
      language: this._language,
      preferred: this._preferred,
    });
  }
}
