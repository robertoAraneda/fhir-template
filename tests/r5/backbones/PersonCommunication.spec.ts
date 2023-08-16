import { IPersonCommunication } from '../../../src/r5/interfaces/backbones';
import FHIRContext from '../../../src';
import PersonCommunicationBuilder from '../../../src/r5/models/backbones/PersonCommunicationBuilder';
import { PersonCommunicationValidator } from '../../../src/r5/models/backbones/PersonCommunicationValidator';

describe('PatientCommunication FHIR R5', () => {
  const { PersonCommunication } = new FHIRContext().forR5();
  let builder: PersonCommunicationBuilder;

  // create global
  beforeEach(() => {
    builder = PersonCommunication.builder();
  });

  it('should be able to create a new patient_communication payload and validate with correct data [IPersonCommunication]', async () => {
    const item: IPersonCommunication = {
      id: '123',
      preferred: true,
      language: {
        coding: [
          {
            system: 'http://hl7.org/fhir/ValueSet/languages',
            code: 'en',
            display: 'English',
          },
        ],
      },
    };

    expect(() => PersonCommunicationValidator(item)).not.toThrow();
  });

  it('should be able to create a new patient_communication payload and validate with correct data [new PersonCommunication()]', async () => {
    const item = new PersonCommunication({
      id: '123',
      preferred: true,
      language: {
        coding: [
          {
            system: 'http://hl7.org/fhir/ValueSet/languages',
            code: 'en',
            display: 'English',
          },
        ],
      },
    });

    expect(item).toBeDefined();
  });

  it('should be able to validate a new patient_communication payload and validate with wrong data', async () => {
    const item = {
      id: '123',
      preferred: 'bad data type', // wrong data type
      language: {
        coding: [
          {
            system: 'http://hl7.org/fhir/ValueSet/languages',
            code: 'en',
            display: 'English',
          },
        ],
      },
      wrongProperty: 'test', // wrong property
    };

    expect(() => PersonCommunicationValidator(item as any)).toThrow();
  });

  it('should be able to create a new patient_communication payload using builder methods [new PersonCommunicationBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builder
      .setLanguage({
        coding: [
          {
            code: 'any',
            system: 'http://hl7.org/fhir/organization-qualification',
            display: 'test',
          },
        ],
      })
      .addParamExtension('preferred', {
        extension: [
          {
            url: 'test',
            valueString: 'test',
          },
        ],
      })
      .build();

    expect(item).toBeDefined();
    expect(item).toEqual({
      _preferred: {
        extension: [
          {
            url: 'test',
            valueString: 'test',
          },
        ],
      },
      language: {
        coding: [
          {
            code: 'any',
            display: 'test',
            system: 'http://hl7.org/fhir/organization-qualification',
          },
        ],
      },
    });
  });
});
