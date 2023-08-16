import { IRelatedPersonCommunication } from '../../../src/r5/interfaces/backbones';
import FHIRContext from '../../../src';
import RelatedPersonCommunicationBuilder from '../../../src/r5/models/backbones/RelatedPersonCommunicationBuilder';
import { RelatedPersonCommunicationValidator } from '../../../src/r5/models/backbones/RelatedPersonCommunicationValidator';

describe('RelatedPersonCommunication FHIR R5', () => {
  const { RelatedPersonCommunication } = new FHIRContext().forR5();
  let builder: RelatedPersonCommunicationBuilder;

  // create global
  beforeEach(() => {
    builder = RelatedPersonCommunication.builder();
  });

  it('should be able to create a new related_person_communication payload and validate with correct data [IRelatedPersonCommunication]', async () => {
    const item: IRelatedPersonCommunication = {
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

    expect(() => RelatedPersonCommunicationValidator(item)).not.toThrow();
  });

  it('should be able to create a new related_person_communication payload and validate with correct data [new RelatedPersonCommunication()]', async () => {
    const item = new RelatedPersonCommunication({
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

  it('should be able to validate a new related_person_communication payload and validate with wrong data', async () => {
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

    expect(() => RelatedPersonCommunicationValidator(item as any)).toThrow(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for RelatedPersonCommunication",
    );
  });

  it('should be able to create a new related_person_communication payload using builder methods [new RelatedPersonCommunicationBuilder()]', async () => {
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
