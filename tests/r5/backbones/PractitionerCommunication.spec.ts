import { IPractitionerCommunication } from '../../../src/r5/interfaces/backbones';
import FHIRContext from '../../../src';
import PractitionerCommunicationBuilder from '../../../src/r5/models/backbones/PractitionerCommunicationBuilder';
import { PractitionerCommunicationValidator } from '../../../src/r5/models/backbones/PractitionerCommunicationValidator';

describe('PractitionerCommunication FHIR R5', () => {
  const { PractitionerCommunication } = new FHIRContext().forR5();
  let builder: PractitionerCommunicationBuilder;

  // create global
  beforeEach(() => {
    builder = PractitionerCommunication.builder();
  });

  it('should be able to create a new practitioner_communication payload and validate with correct data [IPractitionerCommunication]', async () => {
    const item: IPractitionerCommunication = {
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

    expect(() => PractitionerCommunicationValidator(item)).not.toThrow();
  });

  it('should be able to create a new practitioner_communication payload and validate with correct data [new PractitionerCommunication()]', async () => {
    const item = new PractitionerCommunication({
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

    expect(item).toBeDefined();
  });

  it('should be able to validate a new practitioner_communication payload and validate with wrong data', async () => {
    const item = {
      id: '123',
      preferred: 'bad data type', // wrong data type
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

    expect(() => PractitionerCommunicationValidator(item as any)).toThrow(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for PractitionerCommunication",
    );
  });

  it('should be able to create a new practitioner_communication payload using builder methods [new PractitionerCommunicationBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builder
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

    expect(item).toBeDefined();
    expect(item).toEqual({
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
