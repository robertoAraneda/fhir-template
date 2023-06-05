import { PatientBuilder } from '../../src/r5/builders/resources';
import { IPatient } from '../../src/r5/interfaces/resources';
import { Patient } from '../../src/r5/resources';
import FHIRContext from '../../src';
import { IValidatorContext } from '../../src/r5';

describe('Patient', () => {
  let validator: IValidatorContext;
  let builder: PatientBuilder;

  beforeAll(() => {
    const context = new FHIRContext();
    validator = context.forR5().validators;
  });

  // create global
  beforeEach(() => {
    builder = new PatientBuilder();
  });

  it('should be able to create a new patient and validate with correct data [Example Patient/patient-example-sex-and-gender]', async () => {
    const dataType = new Patient({
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

    const validate = await validator.Patient(dataType);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new patient and validate with correct data [Example Patient/patient-example-sex-and-gender]', async () => {
    const dataType: IPatient = {
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

    const validate = await validator.Patient(dataType);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new patient and validate with correct data [Example Patient/animal]', async function () {
    const dataType: IPatient = {
      resourceType: 'Patient',
      id: 'animal',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml"><p style="border: 1px #661aff solid; background-color: #e6e6ff; padding: 10px;"><b>Kenzi </b> female, DoB: 2010-03-23 ( Dog Tag:\u00a01234123\u00a0(period:\u00a02010-05-31 --&gt; (ongoing)))</p><hr/><table class="grid"><tr><td style="background-color: #f3f5da" title="Record is active">Active:</td><td colspan="3">true</td></tr><tr><td style="background-color: #f3f5da" title="Nominated Contact: Emergency Contact">Emergency Contact:</td><td colspan="3"><ul><li>Peter James Chalmers </li><li>ph: (03) 5555 6473(WORK)</li></ul></td></tr><tr><td style="background-color: #f3f5da" title="Patient Links">Links:</td><td colspan="3"><ul><li>Managing Organization: <span>: Pete\'s Vetinary Services</span></li></ul></td></tr><tr><td style="background-color: #f3f5da" title="This patient is known to be an animal.">Patient Animal:</td><td colspan="3"><ul><li>species: <span title="Codes: {http://hl7.org/fhir/animal-species canislf}">Dog</span></li><li>breed: <span title="Codes: {http://snomed.info/sct 58108001}, {http://example.org/fhir/CodeSystem/animal-breed gret}">Golden retriever</span></li><li>genderStatus: <span title="Codes: {http://hl7.org/fhir/animal-genderstatus neutered}">Neutered</span></li></ul></td></tr></table></div>',
      },
      extension: [
        {
          url: 'http://hl7.org/fhir/StructureDefinition/patient-animal',
          extension: [
            {
              url: 'species',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://hl7.org/fhir/animal-species',
                    code: 'canislf',
                    display: 'Dog',
                  },
                ],
              },
            },
            {
              url: 'breed',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://snomed.info/sct',
                    code: '58108001',
                    display: 'Golden retriever',
                  },
                  {
                    system: 'http://example.org/fhir/CodeSystem/animal-breed',
                    code: 'gret',
                    display: 'Golden Retriever',
                  },
                ],
              },
            },
            {
              url: 'genderStatus',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://hl7.org/fhir/animal-genderstatus',
                    code: 'neutered',
                  },
                ],
              },
            },
          ],
        },
      ],
      identifier: [
        {
          system: 'http://www.maroondah.vic.gov.au/AnimalRegFees.aspx',
          value: '1234123',
          period: {
            start: '2010-05-31',
          },
          assigner: {
            display: 'Maroondah City Council',
          },
        },
      ],
      active: true,
      name: [
        {
          use: 'usual',
          given: ['Kenzi'],
        },
      ],
      gender: 'female',
      birthDate: '2010-03-23',
      contact: [
        {
          relationship: [
            {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/v2-0131',
                  code: 'C',
                },
              ],
            },
          ],
          name: {
            family: 'Chalmers',
            given: ['Peter', 'James'],
          },
          telecom: [
            {
              system: 'phone',
              value: '(03) 5555 6473',
              use: 'work',
            },
          ],
        },
      ],
      managingOrganization: {
        display: "Pete's Vetinary Services",
      },
    };

    const validate = await validator.Patient(dataType);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new patient and validate with correct data [Example Patient/glossy]', async function () {
    const dataType: IPatient = {
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

    const validate = await validator.Patient(dataType);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new patient and validate with correct data [Example Patient/dicom]', async function () {
    const dataType: IPatient = {
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

    const validate = await validator.Patient(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new patient and validate with wrong data', async () => {
    const dataType = {
      resourceType: 'Patient',
      id: 'pat2',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Generated</div>',
      },
      birthDate: '2012-01-01 HH:MM:SS',
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
          data: 'base64Data',
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

    const validate = await validator.Patient(dataType);

    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors).toHaveLength(1);
    expect(validate.errors).toEqual([
      {
        instancePath: '/active',
        keyword: 'type',
        message: 'must be boolean',
        params: {
          type: 'boolean',
        },
        schemaPath: 'base.schema.json#/definitions/boolean/type',
      },
    ]);
  });

  it('should be able to create a new patient using builder methods', async () => {
    // build() is a method that returns the object that was built
    const dataType = builder
      .setId('123')
      .setText({
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Generated</div>',
      })
      .setDeceased(false)
      .setActive(true)
      .setGender('other')
      .setBirthDate('1974-12-25')
      .build();

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
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
