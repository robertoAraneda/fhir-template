import { RelatedPersonBuilder } from '../../src/r5/builders/resources/RelatedPersonBuilder';
import ResourceBuilder from '../../src/r5/ResourceBuilder';
import { RelatedPerson } from '../../src/r5/interfaces/resources/RelatedPerson';
import ResourceValidator from '../../src/r5/ResourceValidator';

describe('RelatedPerson', () => {
  let builder: RelatedPersonBuilder;

  // create global
  beforeEach(() => {
    builder = ResourceBuilder.RelatedPerson();
  });

  it('should be able to create a new coding and validate with correct data [Example RelatedPerson/benedicte]', async () => {
    const dataType: RelatedPerson = {
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

    const validate = await ResourceValidator.RelatedPerson(dataType);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new coding and validate with wrong data [Example RelatedPerson/peter]', async () => {
    const dataType: RelatedPerson = {
      resourceType: 'RelatedPerson',
      id: 'peter',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Generated</div>',
      },
      patient: {
        reference: 'Patient/animal',
      },
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
      name: [
        {
          use: 'official',
          family: 'Chalmers',
          given: ['Peter', 'James'],
        },
      ],
      telecom: [
        {
          system: 'phone',
          value: '(03) 5555 6473',
          use: 'work',
        },
      ],
      gender: 'male',
      address: [
        {
          use: 'home',
          line: ['534 Erewhon St'],
          city: 'PleasantVille',
          state: 'Vic',
          postalCode: '3999',
        },
      ],
      photo: [
        {
          contentType: 'image/jpeg',
          url: 'Binary/f012',
        },
      ],
      period: {
        start: '2012-03-11',
      },
    };

    const validate = await ResourceValidator.RelatedPerson(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new coding and validate with wrong data [Example RelatedPerson/f001]', async () => {
    const dataType: RelatedPerson = {
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
    };

    const validate = await ResourceValidator.RelatedPerson(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new coding and validate with wrong data [Example RelatedPerson/newborn-mom]', async () => {
    const dataType: RelatedPerson = {
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

    const validate = await ResourceValidator.RelatedPerson(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new coding using builder methods', async () => {
    // build() is a method that returns the object that was built
    const dataType = builder
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
      .setGender('male')
      .setBirthDate('1974-12-25')
      .build();

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
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
      resourceType: 'RelatedPerson',
    });
  });
});
