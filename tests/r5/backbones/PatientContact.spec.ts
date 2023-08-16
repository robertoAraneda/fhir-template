import { IPatientContact } from '../../../src/r5/interfaces/backbones';
import FHIRContext from '../../../src';
import PatientContactBuilder from '../../../src/r5/models/backbones/PatientContactBuilder';
import { PatientContactValidator } from '../../../src/r5/models/backbones/PatientContactValidator';

describe('PatientContact FHIR R5', () => {
  const { PatientContact } = new FHIRContext().forR5();
  let builder: PatientContactBuilder;

  // create global
  beforeEach(() => {
    builder = PatientContact.builder();
  });

  it('should be able to create a new patient_contact payload and validate with correct data [IPatientContact]', async () => {
    const item: IPatientContact = {
      id: '123',
      gender: 'female',
      relationship: [
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v2-0131',
              code: 'N',
              display: 'Next-of-Kin',
            },
          ],
        },
      ],
      name: {
        use: 'official',
        given: ['John'],
        family: 'Doe',
      },
    };

    expect(() => PatientContactValidator(item)).not.toThrow();
  });

  it('should be able to create a new patient_contact payload and validate with correct data [new PatientContact()]', async () => {
    const item = new PatientContact({
      id: '123',
      gender: 'female',
      relationship: [
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v2-0131',
              code: 'N',
              display: 'Next-of-Kin',
            },
          ],
        },
      ],
      name: {
        use: 'official',
        given: ['John'],
        family: 'Doe',
      },
    });

    expect(item).toBeDefined();
  });

  it('should be able to validate a new patient_contact payload and validate with wrong data', async () => {
    const item = {
      id: '123',
      issuer: {
        reference: 'test',
      },
      period: {
        start: 'wrong date', // wrong date
        end: '2023-01-01',
      },
      code: {
        coding: [
          {
            system: 'http://hl7.org/fhir/organization-qualification',
            code: 'any',
          },
        ],
      },
      wrongProperty: 'test', // wrong property
    };

    expect(() => PatientContactValidator(item)).toThrowError(
      "InvalidFieldException: field(s) 'issuer, code, wrongProperty' is not a valid for PatientContact",
    );
  });

  it('should be able to create a new patient_contact payload using builder methods [new PatientContactBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builder
      .setId('123')
      .setGender('male')
      .addTelecom({
        use: 'home',
        system: 'phone',
        value: '1234567890',
      })
      .addParamExtension('gender', {
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName',
            valueString: 'Jane Doe',
          },
        ],
      })
      .addExtension({
        url: 'http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName',
        valueString: 'Jane Doe',
      })
      .build();

    expect(item).toBeDefined();

    expect(item).toEqual({
      _gender: {
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName',
            valueString: 'Jane Doe',
          },
        ],
      },
      extension: [
        {
          url: 'http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName',
          valueString: 'Jane Doe',
        },
      ],
      gender: 'male',
      id: '123',
      telecom: [
        {
          system: 'phone',
          use: 'home',
          value: '1234567890',
        },
      ],
    });
  });
});
