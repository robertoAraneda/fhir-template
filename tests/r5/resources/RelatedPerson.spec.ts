import { IRelatedPerson } from '../../../src/r5/interfaces/resources';
import FHIRContext from '../../../src';
import RelatedPersonBuilder from '../../../src/r5/models/resources/RelatedPersonBuilder';
import { RelatedPersonValidator } from '../../../src/r5/models/resources/RelatedPersonValidator';

describe('RelatedPerson FHIR R5', () => {
  let builder: RelatedPersonBuilder;
  const context = new FHIRContext();
  const { Validator, RelatedPerson } = context.forR5();

  // create global
  beforeEach(() => {
    builder = RelatedPerson.builder();
  });

  it('should be able to create a new coding and validate with correct data [Example RelatedPerson/benedicte]', async () => {
    const item: IRelatedPerson = {
      resourceType: 'RelatedPerson',
      id: 'benedicte',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Generated</div>',
      },
      identifier: [
        {
          use: 'usual',
          type: {
            text: 'INSEE',
          },
          system: 'urn:oid:1.2.250.1.61',
          value: '272117510400399',
        },
      ],
      active: true,
      patient: {
        reference: 'Patient/example',
      },
      relationship: [
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v2-0131',
              code: 'N',
            },
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode',
              code: 'WIFE',
            },
          ],
        },
      ],
      name: [
        {
          family: 'du Marché',
          _family: {
            extension: [
              {
                url: 'http://hl7.org/fhir/StructureDefinition/humanname-own-prefix',
                valueString: 'VV',
              },
            ],
          },
          given: ['Bénédicte'],
        },
      ],
      telecom: [
        {
          system: 'phone',
          value: '+33 (237) 998327',
        },
      ],
      gender: 'female',
      address: [
        {
          line: ['43, Place du Marché Sainte Catherine'],
          city: 'Paris',
          postalCode: '75004',
          country: 'FRA',
        },
      ],
      photo: [
        {
          contentType: 'image/jpeg',
          url: 'Binary/f016',
        },
      ],
    };

    expect(() => RelatedPersonValidator(item)).not.toThrow();
  });

  it('should be able to validate a new coding and validate with wrong data [Example RelatedPerson/f001]', async () => {
    const item = new RelatedPerson({
      resourceType: 'RelatedPerson',
      id: 'f001',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Generated</div>',
      },
      identifier: [
        {
          use: 'official',
          type: {
            text: 'BSN',
          },
          system: 'urn:oid:2.16.840.1.113883.2.4.6.3',
        },
      ],
      patient: {
        reference: 'Patient/f001',
      },
      relationship: [
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode',
              code: 'SIGOTHR',
            },
          ],
        },
      ],
      name: [
        {
          use: 'usual',
          family: 'Abels',
          given: ['Sarah'],
        },
      ],
      telecom: [
        {
          system: 'phone',
          value: '0690383372',
          use: 'mobile',
        },
        {
          system: 'email',
          value: 's.abels@kpn.nl',
          use: 'home',
        },
      ],
      gender: 'female',
    });

    expect(item).toBeDefined();
  });

  it('should be able to validate a new coding and validate with wrong data [Example RelatedPerson/newborn-mom]', async () => {
    const item: IRelatedPerson = {
      resourceType: 'RelatedPerson',
      id: 'newborn-mom',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Generated</div>',
      },
      identifier: [
        {
          type: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
                code: 'SS',
              },
            ],
          },
          system: 'http://hl7.org/fhir/sid/us-ssn',
          value: '444222222',
        },
      ],
      active: true,
      patient: {
        reference: 'Patient/newborn',
      },
      relationship: [
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode',
              code: 'NMTH',
              display: 'natural mother',
            },
          ],
          text: 'Natural Mother',
        },
      ],
      name: [
        {
          use: 'official',
          family: 'Everywoman',
          given: ['Eve'],
        },
      ],
      telecom: [
        {
          system: 'phone',
          value: '555-555-2003',
          use: 'work',
        },
      ],
      gender: 'female',
      birthDate: '1973-05-31',
      address: [
        {
          use: 'home',
          line: ['2222 Home Street'],
        },
      ],
    };

    expect(() => RelatedPersonValidator(item)).not.toThrow();
  });

  it('should be able to create a new coding using builder methods [new RelatedPersonBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builder
      .addName({
        use: 'official',
        family: 'Chalmers',
        given: ['Peter', 'James'],
      })
      .addIdentifier({
        use: 'official',
        type: {
          text: 'BSN',
        },
        system: 'urn:oid:2.16.840.1.113883.23',
        value: '123456789',
      })
      .setPatient({
        reference: 'Patient/1',
      })
      .setGender('male')
      .setBirthDate('1974-12-25')
      .build();

    expect(item).toBeDefined();
    expect(item).toEqual({
      birthDate: '1974-12-25',
      gender: 'male',
      identifier: [
        {
          system: 'urn:oid:2.16.840.1.113883.23',
          type: {
            text: 'BSN',
          },
          use: 'official',
          value: '123456789',
        },
      ],
      name: [
        {
          family: 'Chalmers',
          given: ['Peter', 'James'],
          use: 'official',
        },
      ],
      patient: {
        reference: 'Patient/1',
      },
      resourceType: 'RelatedPerson',
    });
  });
});
