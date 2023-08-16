import { IPatientCommunication } from '../../../src/r5/interfaces/backbones';
import FHIRContext from '../../../src';
import PatientCommunicationBuilder from '../../../src/r5/models/backbones/PatientCommunicationBuilder';
import { PatientCommunicationValidator } from '../../../src/r5/models/backbones/PatientCommunicationValidator';

describe('PatientCommunication FHIR R5', () => {
  const { PatientCommunication } = new FHIRContext().forR5();
  let builder: PatientCommunicationBuilder;

  // create global
  beforeEach(() => {
    builder = PatientCommunication.builder();
  });

  it('should be able to create a new patient_communication payload and validate with correct data [IPatientCommunication]', async () => {
    const dataType: IPatientCommunication = {
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

    expect(() => PatientCommunicationValidator(dataType)).not.toThrow();
  });

  it('should be able to create a new patient_communication payload and validate with correct data [new PatientCommunication()]', async () => {
    const dataType = new PatientCommunication({
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

    expect(dataType).toBeDefined();
  });

  it('should be able to validate a new patient_communication payload and validate with wrong data', async () => {
    const dataType = {
      id: '123',
      preferred: true, // wrong data type
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

    expect(() => PatientCommunicationValidator(dataType)).toThrow(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for PatientCommunication",
    );
  });

  it('should be able to create a new patient_communication payload using builder methods [new PatientCommunicationBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const dataType = builder
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

    expect(dataType).toBeDefined();

    expect(dataType).toEqual({
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
