import { PatientBuilder } from './src/r5/builders/PatientBuilder';
import { HumanNameBuilder } from './src/r5/builders/HumanNameBuilder';
import { CodeableConceptBuilder } from './src/r5/builders/CodeableConceptBuilder';
import { CodingBuilder } from './src/r5/builders/CodingBuilder';
import { BackboneElementBuilder } from './src/r5/builders/BackboneElementBuilder';
import { Reference } from './src/r5/datatypes/Reference';
import { Patient } from './src/r5/resources/Patient';
import { PatientLink, PatientLink as LinkPatientDt } from './src/r5/datatypes/PatientLink';
import { PatientLinkBuilder } from './src/r5/builders/PatientLinkBuilder';
import { Organization } from './src/r5/resources/Organization';
import { LinkType } from './src/r5/enumerators/LinkType';
import { ContactPoint } from './src/r5/datatypes/ContactPoint';
import { ContactPointUse } from './src/r5/enumerators/ContactPointUse';
import { ContactPointSystem } from './src/r5/enumerators/ContactPointSystem';
import { Identifier } from './src/r5/datatypes/Identifier';
import { AdministrativeGenderVS } from './src/r5/valuesets/AdministrativeGenderVS';

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

const patient = patientBuilder
  .setId(1)
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
