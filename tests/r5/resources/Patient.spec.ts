import { IPatient } from '../../../src/r5/interfaces/resources';
import FHIRContext from '../../../src';
import PatientBuilder from '../../../src/r5/models/resources/PatientBuilder';
import { PatientValidator } from '../../../src/r5/models/resources/PatientValidator';

describe('Patient FHIR R5', () => {
  let builder: PatientBuilder;
  const context = new FHIRContext();
  const { Validator, Patient } = context.forR5();

  // create global
  beforeEach(() => {
    builder = Patient.builder();
  });

  it('should be able to create a new patient and validate with correct data [Example Patient/patient-example-sex-and-gender]', async () => {
    const item = new Patient({
      resourceType: 'Patient',
      id: 'patient-example-sex-and-gender',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Generated</div>',
      },
      extension: [
        {
          url: 'http://hl7.org/fhir/StructureDefinition/individual-genderIdentity',
          extension: [
            {
              url: 'value',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://snomed.info/sct',
                    code: '446141000124107',
                    display: 'Identifies as female gender (finding)',
                  },
                ],
              },
            },
            {
              url: 'period',
              valuePeriod: {
                start: '2001-05-06',
              },
            },
            {
              url: 'comment',
              valueString: 'Patient transitioned from male to female in 2001.',
            },
          ],
        },
        {
          url: 'http://hl7.org/fhir/StructureDefinition/individual-pronouns',
          extension: [
            {
              url: 'value',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://loinc.org',
                    code: 'LA29519-8',
                    display: 'she/her/her/hers/herself',
                  },
                ],
              },
            },
            {
              url: 'period',
              valuePeriod: {
                start: '2001-05-06',
              },
            },
            {
              url: 'comment',
              valueString: 'Patient transitioned from male to female in 2001.',
            },
          ],
        },
        {
          url: 'http://hl7.org/fhir/StructureDefinition/individual-recordedSexOrGender',
          extension: [
            {
              url: 'value',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://hl7.org/fhir/administrative-gender',
                    code: 'male',
                    display: 'Male',
                  },
                ],
              },
            },
            {
              url: 'type',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://loinc.org',
                    code: '76689-9',
                    display: 'Sex Assigned At Birth',
                  },
                ],
              },
            },
            {
              url: 'effectivePeriod',
              valuePeriod: {
                start: '1974-12-25',
              },
            },
            {
              url: 'acquisitionDate',
              valueDateTime: '2005-12-06',
            },
            {
              url: 'sourceDocument',
              valueCodeableReference: {
                reference: {
                  reference: 'DocumentReference/1',
                },
              },
            },
            {
              url: 'sourceField',
              valueString: 'SEX',
            },
            {
              url: 'jurisdiction',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'https://www.usps.com/',
                    code: 'OH',
                    display: 'Ohio',
                  },
                ],
              },
            },
            {
              url: 'comment',
              valueString:
                'Patient transitioned from male to female in 2001, but their birth certificate still indicates male.',
            },
          ],
        },
        {
          url: 'http://hl7.org/fhir/StructureDefinition/individual-recordedSexOrGender',
          extension: [
            {
              url: 'value',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://hl7.org/fhir/administrative-gender',
                    code: 'male',
                    display: 'Male',
                  },
                ],
              },
            },
            {
              url: 'type',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://local-code-system.org/recorded-sex-or-gender-type',
                    code: 'insurance-card',
                    display: 'Insurance Card',
                  },
                ],
              },
            },
            {
              url: 'effectivePeriod',
              valuePeriod: {
                start: '2021-05-25',
              },
            },
            {
              url: 'acquisitionDate',
              valueDateTime: '2021-06-06',
            },
            {
              url: 'sourceDocument',
              valueCodeableReference: {
                reference: {
                  reference: 'DocumentReference/2',
                },
              },
            },
            {
              url: 'sourceField',
              valueString: 'SEX',
            },
            {
              url: 'jurisdiction',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://local-code-system.org/recorded-sex-or-gender-jurisdiction',
                    code: 'ICCA-P',
                    display: 'Indigo Crucifix Cobalt Aegis Payer',
                  },
                ],
              },
            },
            {
              url: 'comment',
              valueString:
                'Patient transitioned from male to female in 2001, but their insurance card still indicates male.',
            },
          ],
        },
        {
          url: 'http://hl7.org/fhir/StructureDefinition/individual-recordedSexOrGender',
          extension: [
            {
              url: 'value',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://ohio.example.gov/drivers-license-sex',
                    code: 'M',
                    display: 'Male',
                  },
                ],
              },
            },
            {
              url: 'type',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://jurisdiction-specific.example.com/document-type-code-system',
                    code: 'drivers-license',
                    display: "Driver's License",
                  },
                ],
              },
            },
            {
              url: 'effectivePeriod',
              valuePeriod: {
                start: '1974-12-25',
              },
            },
            {
              url: 'acquisitionDate',
              valueDateTime: '2005-12-06',
            },
            {
              url: 'sourceDocument',
              valueCodeableReference: {
                reference: {
                  reference: 'DocumentReference/1',
                },
              },
            },
            {
              url: 'jurisdiction',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'https://www.usps.com/',
                    code: 'OH',
                    display: 'Ohio',
                  },
                ],
              },
            },
            {
              url: 'comment',
              valueString:
                "Patient transitioned from male to female in 2001, but their driver's license still indicates male.",
            },
          ],
        },
        {
          url: 'http://hl7.org/fhir/StructureDefinition/patient-sexParameterForClinicalUse',
          extension: [
            {
              url: 'value',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/sex-parameter-for-clinical-use',
                    code: 'specified',
                    display: 'Apply specified setting or reference range',
                  },
                ],
              },
            },
            {
              url: 'period',
              valuePeriod: {
                start: '2002-07-13',
              },
            },
            {
              url: 'comment',
              valueString: 'Patient transitioned from male to female in 2001.',
            },
            {
              url: 'supportingInfo',
              valueCodeableReference: {
                reference: {
                  reference: 'Observation/1',
                },
              },
            },
            {
              url: 'supportingInfo',
              valueCodeableReference: {
                reference: {
                  reference: 'MedicationStatement/2',
                },
              },
            },
          ],
        },
      ],
      identifier: [
        {
          use: 'usual',
          system: 'urn:oid:1.2.36.146.595.217.0.1',
          value: '12345',
        },
      ],
      active: true,
      name: [
        {
          use: 'official',
          family: 'Roth',
          given: ['Patrick'],
        },
        {
          use: 'usual',
          family: 'Roth',
          given: ['Patricia'],
        },
        {
          use: 'nickname',
          given: ['Pat'],
        },
      ],
      gender: 'male',
      birthDate: '1974-12-25',
      deceasedBoolean: false,
      managingOrganization: {
        reference: 'Organization/1',
      },
    });

    expect(item).toBeDefined();
  });

  it('should be able to create a new patient and validate with correct data [Example Patient/patient-example-sex-and-gender]', async () => {
    const item: IPatient = {
      resourceType: 'Patient',
      id: 'patient-example-sex-and-gender',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Generated</div>',
      },
      extension: [
        {
          url: 'http://hl7.org/fhir/StructureDefinition/individual-genderIdentity',
          extension: [
            {
              url: 'value',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://snomed.info/sct',
                    code: '446141000124107',
                    display: 'Identifies as female gender (finding)',
                  },
                ],
              },
            },
            {
              url: 'period',
              valuePeriod: {
                start: '2001-05-06',
              },
            },
            {
              url: 'comment',
              valueString: 'Patient transitioned from male to female in 2001.',
            },
          ],
        },
        {
          url: 'http://hl7.org/fhir/StructureDefinition/individual-pronouns',
          extension: [
            {
              url: 'value',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://loinc.org',
                    code: 'LA29519-8',
                    display: 'she/her/her/hers/herself',
                  },
                ],
              },
            },
            {
              url: 'period',
              valuePeriod: {
                start: '2001-05-06',
              },
            },
            {
              url: 'comment',
              valueString: 'Patient transitioned from male to female in 2001.',
            },
          ],
        },
        {
          url: 'http://hl7.org/fhir/StructureDefinition/individual-recordedSexOrGender',
          extension: [
            {
              url: 'value',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://hl7.org/fhir/administrative-gender',
                    code: 'male',
                    display: 'Male',
                  },
                ],
              },
            },
            {
              url: 'type',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://loinc.org',
                    code: '76689-9',
                    display: 'Sex Assigned At Birth',
                  },
                ],
              },
            },
            {
              url: 'effectivePeriod',
              valuePeriod: {
                start: '1974-12-25',
              },
            },
            {
              url: 'acquisitionDate',
              valueDateTime: '2005-12-06',
            },
            {
              url: 'sourceDocument',
              valueCodeableReference: {
                reference: {
                  reference: 'DocumentReference/1',
                },
              },
            },
            {
              url: 'sourceField',
              valueString: 'SEX',
            },
            {
              url: 'jurisdiction',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'https://www.usps.com/',
                    code: 'OH',
                    display: 'Ohio',
                  },
                ],
              },
            },
            {
              url: 'comment',
              valueString:
                'Patient transitioned from male to female in 2001, but their birth certificate still indicates male.',
            },
          ],
        },
        {
          url: 'http://hl7.org/fhir/StructureDefinition/individual-recordedSexOrGender',
          extension: [
            {
              url: 'value',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://hl7.org/fhir/administrative-gender',
                    code: 'male',
                    display: 'Male',
                  },
                ],
              },
            },
            {
              url: 'type',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://local-code-system.org/recorded-sex-or-gender-type',
                    code: 'insurance-card',
                    display: 'Insurance Card',
                  },
                ],
              },
            },
            {
              url: 'effectivePeriod',
              valuePeriod: {
                start: '2021-05-25',
              },
            },
            {
              url: 'acquisitionDate',
              valueDateTime: '2021-06-06',
            },
            {
              url: 'sourceDocument',
              valueCodeableReference: {
                reference: {
                  reference: 'DocumentReference/2',
                },
              },
            },
            {
              url: 'sourceField',
              valueString: 'SEX',
            },
            {
              url: 'jurisdiction',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://local-code-system.org/recorded-sex-or-gender-jurisdiction',
                    code: 'ICCA-P',
                    display: 'Indigo Crucifix Cobalt Aegis Payer',
                  },
                ],
              },
            },
            {
              url: 'comment',
              valueString:
                'Patient transitioned from male to female in 2001, but their insurance card still indicates male.',
            },
          ],
        },
        {
          url: 'http://hl7.org/fhir/StructureDefinition/individual-recordedSexOrGender',
          extension: [
            {
              url: 'value',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://ohio.example.gov/drivers-license-sex',
                    code: 'M',
                    display: 'Male',
                  },
                ],
              },
            },
            {
              url: 'type',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://jurisdiction-specific.example.com/document-type-code-system',
                    code: 'drivers-license',
                    display: "Driver's License",
                  },
                ],
              },
            },
            {
              url: 'effectivePeriod',
              valuePeriod: {
                start: '1974-12-25',
              },
            },
            {
              url: 'acquisitionDate',
              valueDateTime: '2005-12-06',
            },
            {
              url: 'sourceDocument',
              valueCodeableReference: {
                reference: {
                  reference: 'DocumentReference/1',
                },
              },
            },
            {
              url: 'jurisdiction',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'https://www.usps.com/',
                    code: 'OH',
                    display: 'Ohio',
                  },
                ],
              },
            },
            {
              url: 'comment',
              valueString:
                "Patient transitioned from male to female in 2001, but their driver's license still indicates male.",
            },
          ],
        },
        {
          url: 'http://hl7.org/fhir/StructureDefinition/patient-sexParameterForClinicalUse',
          extension: [
            {
              url: 'value',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/sex-parameter-for-clinical-use',
                    code: 'specified',
                    display: 'Apply specified setting or reference range',
                  },
                ],
              },
            },
            {
              url: 'period',
              valuePeriod: {
                start: '2002-07-13',
              },
            },
            {
              url: 'comment',
              valueString: 'Patient transitioned from male to female in 2001.',
            },
            {
              url: 'supportingInfo',
              valueCodeableReference: {
                reference: {
                  reference: 'Observation/1',
                },
              },
            },
            {
              url: 'supportingInfo',
              valueCodeableReference: {
                reference: {
                  reference: 'MedicationStatement/2',
                },
              },
            },
          ],
        },
      ],
      identifier: [
        {
          use: 'usual',
          system: 'urn:oid:1.2.36.146.595.217.0.1',
          value: '12345',
        },
      ],
      active: true,
      name: [
        {
          use: 'official',
          family: 'Roth',
          given: ['Patrick'],
        },
        {
          use: 'usual',
          family: 'Roth',
          given: ['Patricia'],
        },
        {
          use: 'nickname',
          given: ['Pat'],
        },
      ],
      gender: 'male',
      birthDate: '1974-12-25',
      deceasedBoolean: false,
      managingOrganization: {
        reference: 'Organization/1',
      },
    };

    expect(() => PatientValidator(item)).not.toThrow();
  });

  it('should be able to create a new patient and validate with correct data [Example Patient/glossy]', async function () {
    const item: IPatient = {
      resourceType: 'Patient',
      id: 'glossy',
      meta: {
        lastUpdated: '2014-11-13T11:41:00+11:00',
      },
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>Henry Levin the 7th</p>\n      <p>MRN: 123456. Male, 24-Sept 1932</p>\n    </div>',
      },
      extension: [
        {
          url: 'http://example.org/StructureDefinition/trials',
          valueCode: 'renal',
        },
      ],
      identifier: [
        {
          use: 'usual',
          system: 'http://www.goodhealth.org/identifiers/mrn',
          value: '123456',
        },
      ],
      active: true,
      name: [
        {
          family: 'Levin',
          given: ['Henry'],
          suffix: ['The 7th'],
        },
      ],
      gender: 'male',
      birthDate: '1932-09-24',
      generalPractitioner: [
        {
          reference: 'Practitioner/example',
          display: 'Dr Adam Careful',
        },
      ],
      managingOrganization: {
        reference: 'Organization/2',
        display: 'Good Health Clinic',
      },
    };

    expect(() => PatientValidator(item)).not.toThrow();
  });

  it('should be able to create a new patient and validate with correct data [Example Patient/dicom]', async function () {
    const item: IPatient = {
      resourceType: 'Patient',
      id: 'dicom',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml"> Patient MINT_TEST, ID = MINT1234. Age = 56y, Size =\n      1.83m, Weight = 72.58kg </div>',
      },
      extension: [
        {
          url: 'http://nema.org/fhir/extensions#0010:1010',
          valueQuantity: {
            value: 56,
            unit: 'Y',
          },
        },
        {
          url: 'http://nema.org/fhir/extensions#0010:1020',
          valueQuantity: {
            value: 1.83,
            unit: 'm',
          },
        },
        {
          url: 'http://nema.org/fhir/extensions#0010:1030',
          valueQuantity: {
            value: 72.58,
            unit: 'kg',
          },
        },
      ],
      identifier: [
        {
          system: 'http://nema.org/examples/patients',
          value: 'MINT1234',
        },
      ],
      active: true,
      name: [
        {
          family: 'MINT_TEST',
        },
      ],
      gender: 'male',
      _gender: {
        extension: [
          {
            url: 'http://nema.org/examples/extensions#gender',
            valueCoding: {
              system: 'http://nema.org/examples/gender',
              code: 'M',
            },
          },
        ],
      },
      managingOrganization: {
        reference: 'Organization/1',
      },
    };

    expect(() => PatientValidator(item)).not.toThrow();
  });

  it('should be able to validate a new patient and validate with wrong data', async () => {
    const item = {
      resourceType: 'Patient',
      wrongProperty: 'wrongProperty',
      id: 'pat2',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Generated</div>',
      },
      birthDate: '2012-01-01',
      identifier: [
        {
          use: 'usual',
          type: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
                code: 'MR',
              },
            ],
          },
          system: 'urn:oid:0.1.2.3.4.5.6.7',
          value: '123456',
        },
      ],
      active: 'true',
      name: [
        {
          use: 'official',
          family: 'Donald',
          given: ['Duck', 'D'],
        },
      ],
      gender: 'other',
      _gender: {
        extension: [
          {
            url: 'http://example.org/Profile/administrative-status',
            valueCodeableConcept: {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/v2-0001',
                  code: 'A',
                  display: 'Ambiguous',
                },
              ],
            },
          },
        ],
      },
      photo: [
        {
          contentType: 'image/gif',
          data: 'AAECAwQFBgcICwwODw==',
        },
      ],
      managingOrganization: {
        reference: 'Organization/1',
        display: 'ACME Healthcare, Inc',
      },
      link: [
        {
          other: {
            reference: 'Patient/pat1',
          },
          type: 'seealso',
        },
      ],
    };

    expect(() => PatientValidator(item as any)).toThrow(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for Patient",
    );
  });

  it('should be able to create a new patient using builder methods', async () => {
    // build() is a method that returns the object that was built
    const item = builder
      .setId('123')
      .setText({
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Generated</div>',
      })
      .setDeceasedBoolean(false)
      .setActive(true)
      .setGender('other')
      .setBirthDate('1974-12-25')
      .build();

    expect(item).toBeDefined();
    expect(item).toEqual({
      active: true,
      birthDate: '1974-12-25',
      deceasedBoolean: false,
      gender: 'other',
      id: '123',
      resourceType: 'Patient',
      text: {
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Generated</div>',
        status: 'generated',
      },
    });
  });
});
