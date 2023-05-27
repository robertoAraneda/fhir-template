import { PatientBuilder } from './lib/r5/builders/PatientBuilder';
import { HumanNameBuilder } from './lib/r5/builders/HumanNameBuilder';
import { CodeableConceptBuilder } from './src/r5/builders/CodeableConceptBuilder';
import { CodingBuilder } from './src/r5/builders/CodingBuilder';

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
  .setCode('code')
  .setSystem('system')
  .setDisplay('display')
  .setUserSelected(true)
  .build();
const codeableConcept = new CodeableConceptBuilder().addCoding(coding).setText('text').build();

console.log(JSON.stringify(codeableConcept, null, 2));
const patient = patientBuilder
  .setId(1)
  .addName(humanName)
  .setBirthDate('1983-12-06')
  .setActive(true)
  .setMaritalStatus({
    coding: [
      {
        system: 'http://terminology.hl7.org/CodeSystem/v3-MaritalStatus',
        code: 'M',
        display: 'Married',
      },
    ],
    text: 'Married',
  })
  .build();

console.log(JSON.stringify(patient, null, 2));
