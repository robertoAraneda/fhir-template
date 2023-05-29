import { PatientBuilder } from './src/r5/builders/PatientBuilder';
import { HumanNameBuilder } from './src/r5/builders/HumanNameBuilder';
import { CodeableConceptBuilder } from './src/r5/builders/CodeableConceptBuilder';
import { CodingBuilder } from './src/r5/builders/CodingBuilder';
import { Reference } from './src/r5/datatypes/Reference';
import { Patient } from './src/r5/resources/Patient';
import { PatientLink as LinkPatientDt } from './src/r5/datatypes/PatientLink';
import { PatientLinkBuilder } from './src/r5/builders/PatientLinkBuilder';
import { Organization } from './src/r5/resources/Organization';
import { LinkType } from './src/r5/enumerators/LinkType';
import { ContactPoint } from './src/r5/datatypes/ContactPoint';
import { ContactPointUse } from './src/r5/enumerators/ContactPointUse';
import { ContactPointSystem } from './src/r5/enumerators/ContactPointSystem';
import { Identifier } from './src/r5/datatypes/Identifier';
import { AdministrativeGenderVS } from './src/r5/valuesets/AdministrativeGenderVS';
import { PatientContactBuilder } from './src/r5/builders/PatientContactBuilder';
import { CodeableConcept } from './src/r5/datatypes/CodeableConcept';
import { Coding } from './src/r5/datatypes/Coding';
import { PersonBuilder } from './src/r5/builders/PersonBuilder';
import { Person } from './src/r5/resources/Person';
import { RelatedPersonBuilder } from './src/r5/builders/RelatedPersonBuilder';
import { RelatedPerson } from './src/r5/resources/RelatedPerson';
import { AddressBuilder } from './src/r5/builders/AddressBuilder';
import { Address } from './src/r5/datatypes/Address';
import { OrganizationBuilder } from './src/r5/builders/OrganizationBuilder';
import { createContext } from './src/index';
import { FhirContextR5 } from './src/r5';
import { PractitionerBuilder } from './src/r5/builders/PractitionerBuilder';
import { HumanName } from './lib/r5/datatypes/HumanName';
import { PractitionerQualificationBuilder } from './src/r5/builders/PractitionerQualificationBuilder';
import { PractitionerQualification } from './lib/r5/datatypes/PractitionerQualification';

const patientBuilder = new PatientBuilder();

const humanNameBuilder = new HumanNameBuilder();
const humanName = humanNameBuilder
  .addGiven('John')
  .addGiven('Smith')
  .addPrefix('Mr.')
  .addSuffix('Jr.')
  .setFamily('Doe')
  .build();
const coding = new CodingBuilder()
  .setCode('M')
  .setSystem('http://terminology.hl7.org/CodeSystem/v3-MaritalStatus')
  .setDisplay('Married')
  .setUserSelected(true)
  .build();
const codeableConcept = new CodeableConceptBuilder().addCoding(coding).setText('Married').build();

console.log(JSON.stringify(codeableConcept, null, 2));

const p2 = new Patient();
p2.id = 5;

const o2 = new Organization();
o2.id = 1;

const patientLinkContent = new LinkPatientDt();
patientLinkContent.type = LinkType.REFER;
patientLinkContent.other = new Reference<Patient>({ reference: new Patient({ id: 1 }) });

const patientLinkBuilder = new PatientLinkBuilder();
const patientLink = patientLinkBuilder
  .setOther(new Reference<Patient>({ reference: new Patient({ id: 1 }) }))
  .setType(LinkType.REPLACES)
  .build();

const contact = new PatientContactBuilder()
  .addRelationship(
    new CodeableConcept({
      coding: [
        new Coding({
          code: 'emergency',
          system: 'http://terminology.hl7.org/CodeSystem/v2-0131',
          display: 'Emergency',
        }),
      ],
    }),
  )
  .setOrganization(new Reference<Organization>({ reference: new Organization({ id: 1 }) }))
  .addTelecom(
    new ContactPoint({
      use: ContactPointUse.MOBILE,
      system: ContactPointSystem.EMAIL,
      value: '555-555-5555',
    }),
  )
  .build();

const patient = patientBuilder
  .setId(1)
  .setText({
    status: 'generated',
    div: '<div xmlns="http://www.w3.org/1999/xhtml">John Smith Doe</div>',
  })
  .addName(humanName)
  .setBirthDate('1983-12-06')
  .setActive(true)
  .setMaritalStatus(codeableConcept)
  .addTelecom(
    new ContactPoint({
      use: ContactPointUse.MOBILE,
      system: ContactPointSystem.EMAIL,
      value: '555-555-5555',
    }),
  )
  .addIdentifier(
    new Identifier({
      use: 'usual',
      system: 'urn:oid:2.16.840.1.113883.4.1',
      value: '12345',
    }),
  )
  .setGender(AdministrativeGenderVS.FEMALE)
  .addLink(patientLink)
  .setMultipleBirth(1)
  .setManagingOrganization({
    reference: new Organization({ id: 1 }),
  })
  .addPhoto({
    contentType: 'image/jpeg',
  })
  .addContact(contact)
  .addCommunication({
    language: {
      coding: [
        {
          code: 'en-US',
        },
      ],
    },
    preferred: true,
  })
  .build();

console.log(JSON.stringify(patient, null, 2));

const person = new PersonBuilder()
  .addName({
    use: 'official',
    family: 'Doe',
    given: ['John', 'Smith'],
    text: 'John Smith Doe',
  })
  .addIdentifier({
    use: 'usual',
    system: 'urn:oid:2.16.840.1.113883.4.1',
    value: '12345',
  })
  .addLink({
    target: new Reference<Person>({ reference: new Person({ id: 1 }) }),
    assurance: 'level1',
  })
  .addTelecom({
    use: 'mobile',
    system: 'email',
    value: '555-555-5555',
  })
  .build();

console.log(JSON.stringify(person, null, 2));

const relatedPerson = new RelatedPersonBuilder()
  .setId(1)
  .addName(humanName)
  .setBirthDate('1983-12-06')
  .setActive(true)
  .setText({
    div: '<div "xmlns="http://www.w3.org/1999/xhtml">John Smith Doe Jr. Esq. MD</div>',
    status: 'generated',
  })
  .setGender(AdministrativeGenderVS.OTHER)
  .build();

const rp = new RelatedPerson({
  meta: {
    profile: ['http://hl7.org/fhir/StructureDefinition/Patient'],
  },
});

const address = new AddressBuilder()
  .addLine('123 Main St.')
  .setMultipleLines(['123 Main St.', 'Apt. 1'])
  .setCity('New York')
  .setState('NY')
  .setPostalCode('10001')
  .setCountry('USA')
  .build();

const ad = new Address({
  line: ['123 Main St.'],
  city: 'New York',
  country: 'USA',
});

console.log(JSON.stringify(ad, null, 2));
console.log(JSON.stringify(address, null, 2));

console.log(JSON.stringify(relatedPerson, null, 2));

const org = new OrganizationBuilder()
  .addIdentifier({
    use: 'usual',
    system: 'urn:oid:2.16.840.1.113883.4.1',
    value: '12345',
  })
  .setDescription('A great organization')
  .setName('Great Organization')
  .addAlias('Great Org')
  .addQualification({
    identifier: [
      {
        use: 'usual',
        system: 'urn:oid:2.16.840.1.113883.4.1',
        value: '12345',
      },
    ],
    code: {
      coding: [
        {
          code: 'MD',
          system: 'http://terminology.hl7.org/CodeSystem/v2-0360/2.7',
          display: 'Medical Doctor',
        },
      ],
    },
  })
  .addContact({
    address: {
      line: ['123 Main St.'],
    },
    telecom: [
      {
        value: '555-555-5555',
        system: ContactPointSystem.EMAIL,
        use: ContactPointUse.MOBILE,
      },
    ],
  })
  .setActive(true)
  .build();

console.log(JSON.stringify(org, null, 2));

const context = createContext('R5') as FhirContextR5;

const pat = {
  resourceType: 'Patient',
  id: '1',
  name: 'string',
  identifier: [
    {
      use: 'usual',
      assigner: { reference: 'Organization/1' },
    },
  ],
};

const validatePat = context.validate('Patient', pat);

const organ = {
  resourceType: 'Organization',
  id: '1',
  name: 'Great Organization',
  contact: [
    {
      telecom: [
        {
          system: 'email',
          value: '555-555-5555',
          use: 'mobile',
        },
      ],
    },
  ],
};
const validateOrg = context.validate('Organization', organ);

console.log(JSON.stringify(validatePat, null, 2));

const hn = new HumanName({
  use: 'official',
  family: 'Doe',
  given: ['John', 'Smith'],
  text: 'John Smith Doe',
});

const prQualification: PractitionerQualification = new PractitionerQualificationBuilder()
  .getIdentifier(0)
  .set({
    use: 'usual',
    system: 'urn:oid:2.16.840.1.113883.4.1',
    value: '12345',
  })
  .addIdentifier({
    use: 'usual',
    system: 'urn:oid:2.16.840.1.113883.4.1',
    value: '123456',
    period: {
      end: '2020-01-01',
      start: '2019-01-01',
    },
    assigner: new Reference<Organization | string>({ reference: new Organization({ id: 1 }) }),
  });

console.log(JSON.stringify(prQualification, null, 2));

const practitioner = new PractitionerBuilder()
  .addIdentifier({
    use: 'usual',
    system: 'urn:oid:2.16.840.1.113883.4.1',
    value: '12345',
  })
  .addName({
    use: 'official',
    family: 'Doe',
    given: ['John', 'Smith'],
    text: 'John Smith Doe',
  })
  .addName(hn)
  .setActive(true)
  .setDeceased<string>('2020-01-01')
  .getCommunication(0)
  .set({
    preferred: true,
    language: {
      coding: [
        {
          code: 'en-US',
        },
      ],
    },
  })
  .addQualification({
    identifier: [
      {
        system: 'http://terminology.hl7.org/CodeSystem/v2-0360/2.7',
        use: 'usual',
        value: '12345',
        assigner: new Reference<Organization | string>({
          reference: new Organization({ id: 1 }),
        }),
      },
    ],
    code: {
      coding: [
        {
          code: 'MD',
          system: 'http://terminology.hl7.org/CodeSystem/v2-0360/2.7',
          display: 'Medical Doctor',
        },
      ],
    },
    issuer: new Reference<Organization | string>({
      reference: 'Organization/1',
    }),
  })
  .build();

console.log(JSON.stringify(practitioner, null, 2));
