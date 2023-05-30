import { RelatedPersonBuilder } from '../src/r5/builders/RelatedPersonBuilder';
import { RelatedPerson } from '../src/r5/resources/RelatedPerson';
import { Reference } from '../src/r5/datatypes/Reference';
import { Organization } from '../src/r5/resources/Organization';
import { Identifier } from '../src/r5/datatypes/Identifier';
import { IdentifierBuilder } from '../src/r5/builders/IdentifierBuilder';
import { Period } from '../src/r5/datatypes/Period';
import { Patient } from '../src/r5/resources/Patient';
import { HumanName } from '../src/r5/datatypes/HumanName';
import { NameUse } from '../src/r5/enums/NameUse';
import { ContactPointSystem } from '../src/r5/enums/ContactPointSystem';
import { ContactPoint } from '../src/r5/datatypes/ContactPoint';
import { ContactPointUse } from '../src/r5/enums/ContactPointUse';
import { Address } from '../src/r5/datatypes/Address';
import { AddressUse } from '../src/r5/enums/AddressUse';
import { AddressType } from '../src/r5/enums/AddressType';
import { CodeableConcept } from '../src/r5/datatypes/CodeableConcept';
import { Coding } from '../src/r5/datatypes/Coding';
import { AdministrativeGender } from '../src/r5/enums/AdministrativeGender';
import { Attachment } from '../lib/r5/datatypes/Attachment';
import { RelatedPersonCommunication } from '../src/r5/backbones/RelatedPersonCommunication';

describe('RelatedPersonBuilder', () => {
  it('[build] should be return default object', () => {
    const relatedPerson = new RelatedPersonBuilder().build();

    const json = JSON.parse(JSON.stringify(relatedPerson));

    expect(relatedPerson).toBeInstanceOf(RelatedPerson);
    expect(json).toStrictEqual({
      resourceType: 'RelatedPerson',
    });
  });

  it('[addIdentifier] should be return with identifier', () => {
    const identifier: Identifier = {
      use: 'usual',
      system: 'http://hl7.org/fhir/sid/us-ssn',
      value: '444222222',
      period: {
        start: '2019-01-01',
        end: '2020-01-01',
      },
      assigner: new Reference({
        reference: new Organization({ id: 2 }),
        type: 'Organization',
        display: 'Organization',
      }),
    };

    const relatedPerson = new RelatedPersonBuilder()
      .addIdentifier(identifier)
      .addIdentifier({
        use: 'usual',
        system: 'http://hl7.org/fhir/sid/us-ssn',
        value: '444222222',
        period: {
          start: '2019-01-01',
          end: '2020-01-01',
        },
        assigner: {
          reference: 'Organization/2',
          type: 'Organization',
          display: 'Organization',
        },
      })
      .build();

    const json = JSON.parse(JSON.stringify(relatedPerson));

    expect(relatedPerson).toBeInstanceOf(RelatedPerson);
    expect(relatedPerson.identifier).toHaveLength(2);
    expect(json).toStrictEqual({
      resourceType: 'RelatedPerson',
      identifier: [
        {
          use: 'usual',
          system: 'http://hl7.org/fhir/sid/us-ssn',
          value: '444222222',
          period: {
            start: '2019-01-01',
            end: '2020-01-01',
          },
          assigner: {
            reference: 'Organization/2',
            type: 'Organization',
            display: 'Organization',
          },
        },
        {
          use: 'usual',
          system: 'http://hl7.org/fhir/sid/us-ssn',
          value: '444222222',
          period: {
            start: '2019-01-01',
            end: '2020-01-01',
          },
          assigner: {
            reference: 'Organization/2',
            type: 'Organization',
            display: 'Organization',
          },
        },
      ],
    });
  });

  it('[setMultipleIdentifier] should be return with identifier', () => {
    //builder with object
    const identifier1: Identifier = new IdentifierBuilder()
      .setUse('usual')
      .setSystem('http://hl7.org/fhir/sid/us-ssn')
      .setValue('444222222')
      .setPeriod({
        start: '2019-01-01',
        end: '2020-01-01',
      })
      .setAssigner<string>({
        reference: 'Organization/2',
        type: 'Organization',
        display: 'Organization',
      })
      .build();

    // Builder with instances
    const identifier2: Identifier = new IdentifierBuilder()
      .setUse('usual')
      .setSystem('http://hl7.org/fhir/sid/us-ssn')
      .setValue('444222222')
      .setPeriod({
        start: '2019-01-01',
        end: '2020-01-01',
      })
      .setAssigner<Organization>(
        new Reference<Organization>({
          reference: new Organization({ id: 2 }),
          type: 'Organization',
          display: 'Organization',
        }),
      )
      .build();

    // constructor
    const identifier3: Identifier = new Identifier({
      value: '444222222',
      assigner: new Reference({
        reference: new Organization({ id: 2 }),
        type: 'Organization',
        display: 'Organization',
      }),
      period: new Period({
        end: '2020-01-01',
        start: '2019-01-01',
      }),
      use: 'usual',
      system: 'http://hl7.org/fhir/sid/us-ssn',
    });

    // Object
    const identifier4: Identifier = {
      period: {
        start: '2019-01-01',
        end: '2020-01-01',
      },
      assigner: {
        reference: 'Organization/2',
        type: 'Organization',
        display: 'Organization',
      },
      value: '444222222',
      use: 'usual',
      system: 'http://hl7.org/fhir/sid/us-ssn',
    };

    const relatedPerson = new RelatedPersonBuilder()
      .setMultipleIdentifier([identifier1, identifier2, identifier3, identifier4])
      .build();

    const json = JSON.parse(JSON.stringify(relatedPerson));

    expect(relatedPerson).toBeInstanceOf(RelatedPerson);
    expect(relatedPerson.identifier).toHaveLength(4);

    expect(json).toStrictEqual({
      resourceType: 'RelatedPerson',
      identifier: [
        {
          use: 'usual',
          system: 'http://hl7.org/fhir/sid/us-ssn',
          value: '444222222',
          period: {
            start: '2019-01-01',
            end: '2020-01-01',
          },
          assigner: {
            reference: 'Organization/2',
            type: 'Organization',
            display: 'Organization',
          },
        },
        {
          use: 'usual',
          system: 'http://hl7.org/fhir/sid/us-ssn',
          value: '444222222',
          period: {
            start: '2019-01-01',
            end: '2020-01-01',
          },
          assigner: {
            reference: 'Organization/2',
            type: 'Organization',
            display: 'Organization',
          },
        },
        {
          use: 'usual',
          system: 'http://hl7.org/fhir/sid/us-ssn',
          value: '444222222',
          period: {
            start: '2019-01-01',
            end: '2020-01-01',
          },
          assigner: {
            reference: 'Organization/2',
            type: 'Organization',
            display: 'Organization',
          },
        },
        {
          use: 'usual',
          system: 'http://hl7.org/fhir/sid/us-ssn',
          value: '444222222',
          period: {
            start: '2019-01-01',
            end: '2020-01-01',
          },
          assigner: {
            reference: 'Organization/2',
            type: 'Organization',
            display: 'Organization',
          },
        },
      ],
    });
  });

  it('[setActive] should be return with active attribute', () => {
    const relatedPerson = new RelatedPersonBuilder().setActive(true).build();

    const json = JSON.parse(JSON.stringify(relatedPerson));

    expect(relatedPerson).toBeInstanceOf(RelatedPerson);
    expect(json).toStrictEqual({
      resourceType: 'RelatedPerson',
      active: true,
    });
  });

  it('[setPatient] should be return with patient attribute and with instance of Reference', () => {
    const relatedPerson = new RelatedPersonBuilder()
      .setPatient(
        new Reference<Patient>({
          reference: new Patient({ id: 1 }),
          type: 'Patient',
          display: 'Patient',
        }),
      )
      .build();

    const json = JSON.parse(JSON.stringify(relatedPerson));

    expect(relatedPerson).toBeInstanceOf(RelatedPerson);
    expect(json).toStrictEqual({
      resourceType: 'RelatedPerson',
      patient: {
        reference: 'Patient/1',
        type: 'Patient',
        display: 'Patient',
      },
    });
  });

  it('[setPatient] should be return with patient attribute', () => {
    const relatedPerson = new RelatedPersonBuilder()
      .setPatient({
        reference: new Patient({ id: 1 }),
        type: 'Patient',
        display: 'Patient',
      })
      .build();

    const json = JSON.parse(JSON.stringify(relatedPerson));

    expect(relatedPerson).toBeInstanceOf(RelatedPerson);
    expect(json).toStrictEqual({
      resourceType: 'RelatedPerson',
      patient: {
        reference: 'Patient/1',
        type: 'Patient',
        display: 'Patient',
      },
    });
  });

  it('[addName] should be return with name attribute', () => {
    const relatedPerson = new RelatedPersonBuilder()
      .addName(
        new HumanName({
          use: NameUse.NICKNAME,
          family: 'Doe',
          given: ['John'],
          prefix: ['Dr'],
          period: new Period({
            end: '2020-01-01',
            start: '2019-01-01',
          }),
          suffix: ['MD'],
          text: 'John Doe',
        }),
      )
      .addName({
        use: 'usual',
        family: 'Doe',
        given: ['John'],
        prefix: ['Dr'],
        period: {
          start: '2019-01-01',
          end: '2020-01-01',
        },
        text: 'John Doe',
        suffix: ['MD'],
      })
      .build();

    const json = JSON.parse(JSON.stringify(relatedPerson));

    expect(relatedPerson).toBeInstanceOf(RelatedPerson);
    expect(relatedPerson.name).toHaveLength(2);
    expect(json).toStrictEqual({
      resourceType: 'RelatedPerson',
      name: [
        {
          use: 'nickname',
          family: 'Doe',
          given: ['John'],
          prefix: ['Dr'],
          period: {
            start: '2019-01-01',
            end: '2020-01-01',
          },
          text: 'John Doe',
          suffix: ['MD'],
        },
        {
          use: 'usual',
          family: 'Doe',
          given: ['John'],
          prefix: ['Dr'],
          period: {
            start: '2019-01-01',
            end: '2020-01-01',
          },
          text: 'John Doe',
          suffix: ['MD'],
        },
      ],
    });
  });

  it('[addTelecom] should be return with telecom attribute', () => {
    const relatedPerson = new RelatedPersonBuilder()
      .addTelecom(
        new ContactPoint({
          system: ContactPointSystem.PHONE,
          value: '123456789',
          use: ContactPointUse.HOME,
          rank: 1,
          period: new Period({
            start: '2019-01-01',
            end: '2020-01-01',
          }),
        }),
      )
      .addTelecom({
        system: 'phone',
        value: '123456789',
        use: 'home',
        rank: 1,
        period: {
          start: '2019-01-01',
          end: '2020-01-01',
        },
      })
      .build();

    const json = JSON.parse(JSON.stringify(relatedPerson));

    expect(relatedPerson).toBeInstanceOf(RelatedPerson);
    expect(relatedPerson.telecom).toHaveLength(2);
    expect(json).toStrictEqual({
      resourceType: 'RelatedPerson',
      telecom: [
        {
          system: 'phone',
          value: '123456789',
          use: 'home',
          rank: 1,
          period: {
            start: '2019-01-01',
            end: '2020-01-01',
          },
        },
        {
          system: 'phone',
          value: '123456789',
          use: 'home',
          rank: 1,
          period: {
            start: '2019-01-01',
            end: '2020-01-01',
          },
        },
      ],
    });
  });

  it('[addAddress] should be return with address attribute', () => {
    const relatedPerson = new RelatedPersonBuilder()
      .addAddress(
        new Address({
          use: AddressUse.HOME,
          type: AddressType.BOTH,
          text: 'Rua dos bobos',
          line: ['0'],
          city: 'São Paulo',
          district: 'São Paulo',
          postalCode: '00000000',
          country: 'Brazil',
          period: new Period({
            start: '2019-01-01',
            end: '2020-01-01',
          }),
        }),
      )
      .addAddress({
        use: 'home',
        type: 'both',
        text: 'Rua dos bobos',
        line: ['0'],
        city: 'São Paulo',
        district: 'São Paulo',
        postalCode: '00000000',
        country: 'Brazil',
        period: {
          start: '2019-01-01',
          end: '2020-01-01',
        },
      })
      .build();

    const json = JSON.parse(JSON.stringify(relatedPerson));

    expect(relatedPerson).toBeInstanceOf(RelatedPerson);
    expect(relatedPerson.address).toHaveLength(2);
    expect(json).toStrictEqual({
      resourceType: 'RelatedPerson',
      address: [
        {
          use: 'home',
          type: 'both',
          text: 'Rua dos bobos',
          line: ['0'],
          city: 'São Paulo',
          district: 'São Paulo',
          postalCode: '00000000',
          country: 'Brazil',
          period: {
            start: '2019-01-01',
            end: '2020-01-01',
          },
        },
        {
          use: 'home',
          type: 'both',
          text: 'Rua dos bobos',
          line: ['0'],
          city: 'São Paulo',
          district: 'São Paulo',
          postalCode: '00000000',
          country: 'Brazil',
          period: {
            start: '2019-01-01',
            end: '2020-01-01',
          },
        },
      ],
    });
  });

  it('[addRelationship] should return relationship attribute', function () {
    const relatedPerson = new RelatedPersonBuilder()
      .addRelationship(
        new CodeableConcept({
          coding: [
            new Coding({
              system: 'http://terminology.hl7.org/CodeSystem/v2-0131',
              code: 'C',
              display: 'Consultant',
            }),
          ],
          text: 'Consultant',
        }),
      )
      .addRelationship({
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/v2-0131',
            code: 'C',
            display: 'Consultant',
          },
        ],
        text: 'Consultant',
      })
      .build();

    const json = JSON.parse(JSON.stringify(relatedPerson));

    expect(relatedPerson).toBeInstanceOf(RelatedPerson);
    expect(relatedPerson.relationship).toHaveLength(2);
    expect(json).toStrictEqual({
      resourceType: 'RelatedPerson',
      relationship: [
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v2-0131',
              code: 'C',
              display: 'Consultant',
            },
          ],
          text: 'Consultant',
        },
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v2-0131',
              code: 'C',
              display: 'Consultant',
            },
          ],
          text: 'Consultant',
        },
      ],
    });
  });

  it('[setGender] should return gender attribute', function () {
    const relatedPerson = new RelatedPersonBuilder().setGender(AdministrativeGender.MALE).build();

    const json = JSON.parse(JSON.stringify(relatedPerson));

    expect(relatedPerson).toBeInstanceOf(RelatedPerson);
    expect(json).toStrictEqual({
      resourceType: 'RelatedPerson',
      gender: 'male',
    });
  });

  it('[setBirthDate] should return birthDate attribute', function () {
    const relatedPerson = new RelatedPersonBuilder().setBirthDate('1990-01-01').build();

    const json = JSON.parse(JSON.stringify(relatedPerson));

    expect(relatedPerson).toBeInstanceOf(RelatedPerson);
    expect(json).toStrictEqual({
      resourceType: 'RelatedPerson',
      birthDate: '1990-01-01',
    });
  });

  it('[addPhoto] should return photo attribute', function () {
    const relatedPerson = new RelatedPersonBuilder()
      .addPhoto(
        new Attachment({
          contentType: 'image/png',
          data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAA',
          creation: '2020-01-01',
          frames: 1,
          hash: 'hash',
          height: 100,
          duration: 1,
          url: 'https://www.example.com/image.png',
          language: 'pt-BR',
          pages: 1,
          size: 100,
          title: 'title',
          width: 100,
        }),
      )
      .addPhoto({
        contentType: 'image/png',
        data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAA',
        creation: '2020-01-01',
        frames: 1,
        hash: 'hash',
        height: 100,
        duration: 1,
        url: 'https://www.example.com/image.png',
        language: 'pt-BR',
        pages: 1,
        size: 100,
        title: 'title',
        width: 100,
      })
      .build();

    const json = JSON.parse(JSON.stringify(relatedPerson));

    expect(relatedPerson).toBeInstanceOf(RelatedPerson);
    expect(relatedPerson.photo).toHaveLength(2);
    expect(json).toStrictEqual({
      resourceType: 'RelatedPerson',
      photo: [
        {
          contentType: 'image/png',
          data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAA',
          creation: '2020-01-01',
          frames: 1,
          hash: 'hash',
          height: 100,
          duration: 1,
          url: 'https://www.example.com/image.png',
          language: 'pt-BR',
          pages: 1,
          size: 100,
          title: 'title',
          width: 100,
        },
        {
          contentType: 'image/png',
          data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAA',
          creation: '2020-01-01',
          frames: 1,
          hash: 'hash',
          height: 100,
          duration: 1,
          url: 'https://www.example.com/image.png',
          language: 'pt-BR',
          pages: 1,
          size: 100,
          title: 'title',
          width: 100,
        },
      ],
    });
  });

  it('[addCommunication] should return communication attribute', function () {
    const relatedPerson = new RelatedPersonBuilder()
      .addCommunication(
        new RelatedPersonCommunication({
          language: new CodeableConcept({
            coding: [
              new Coding({
                system: 'http://hl7.org/fhir/ValueSet/languages',
                code: 'pt-BR',
                display: 'Portuguese (Brazil)',
                version: '1.0.0',
                userSelected: true,
              }),
            ],
            text: 'Portuguese (Brazil)',
          }),
          preferred: true,
        }),
      )
      .addCommunication({
        language: {
          coding: [
            {
              system: 'http://hl7.org/fhir/ValueSet/languages',
              code: 'pt-BR',
              display: 'Portuguese (Brazil)',
              version: '1.0.0',
              userSelected: true,
            },
          ],
          text: 'Portuguese (Brazil)',
        },
        preferred: true,
      })
      .build();

    const json = JSON.parse(JSON.stringify(relatedPerson));

    expect(relatedPerson).toBeInstanceOf(RelatedPerson);
    expect(relatedPerson.communication).toHaveLength(2);
    expect(json).toStrictEqual({
      resourceType: 'RelatedPerson',
      communication: [
        {
          language: {
            coding: [
              {
                system: 'http://hl7.org/fhir/ValueSet/languages',
                code: 'pt-BR',
                display: 'Portuguese (Brazil)',
                version: '1.0.0',
                userSelected: true,
              },
            ],
            text: 'Portuguese (Brazil)',
          },
          preferred: true,
        },
        {
          language: {
            coding: [
              {
                system: 'http://hl7.org/fhir/ValueSet/languages',
                code: 'pt-BR',
                display: 'Portuguese (Brazil)',
                version: '1.0.0',
                userSelected: true,
              },
            ],
            text: 'Portuguese (Brazil)',
          },
          preferred: true,
        },
      ],
    });
  });
});
