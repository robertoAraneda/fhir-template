import { IRelatedPersonCommunication } from '../../../src/r4/interfaces/backbones';
import FHIRContext from '../../../src';
import { RelatedPersonCommunicationBuilder } from '../../../src/r4/models/backbones/RelatedPersonCommunicationBuilder';

import { RelatedPersonCommunicationValidator } from '../../../src/r4/models/backbones/RelatedPersonCommunicationValidator';

describe('RelatedPersonCommunication FHIR R4', () => {
  let builder: RelatedPersonCommunicationBuilder;
  const { RelatedPersonCommunication } = new FHIRContext().forR4();

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

  it('should be able to create a new related_person_communication payload using builder methods [RelatedPersonCommunication.builder()]', async () => {
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

  it('should be able to validate a new related_person_communication payload and validate with wrong data', async () => {
    const item = {
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
      wrongProperty: 'test', // wrong property
    };

    expect(() => RelatedPersonCommunicationValidator(item)).toThrowError(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for RelatedPersonCommunication",
    );
  });
});
