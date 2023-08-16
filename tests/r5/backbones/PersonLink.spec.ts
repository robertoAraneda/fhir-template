import { IPersonLink } from '../../../src/r5/interfaces/backbones';
import FHIRContext from '../../../src';
import PersonLinkBuilder from '../../../src/r5/models/backbones/PersonLinkBuilder';
import { PersonLinkValidator } from '../../../src/r5/models/backbones/PersonLinkValidator';

describe('PersonLink FHIR R5', () => {
  const { PersonLink } = new FHIRContext().forR5();
  let builder: PersonLinkBuilder;

  // create global
  beforeEach(() => {
    builder = PersonLink.builder();
  });

  it('should be able to create a new person_link payload and validate with correct data [IPersonLink]', async () => {
    const item: IPersonLink = {
      id: '123',
      target: {
        reference: 'Patient/id',
      },
      assurance: 'level1', // correct type
      extension: [
        {
          url: 'test',
          valueString: 'test',
        },
      ],
    };

    expect(() => PersonLinkValidator(item)).not.toThrow();
  });

  it('should be able to create a new person_link payload and validate with correct data [new PersonLink()]', async () => {
    const item = new PersonLink({
      id: '123',
      target: {
        reference: 'Patient/id',
      },
      assurance: 'level1', // correct type
      extension: [
        {
          url: 'test',
          valueString: 'test',
        },
      ],
    });

    expect(item).toBeDefined();
  });

  it('should be able to validate a new person_link payload and validate with wrong data', async () => {
    const item = {
      id: '123',
      extension: [
        {
          url: 'test',
          valueString: 'test',
        },
      ],
      wrongProperty: 'test', // wrong property
    };

    expect(() => PersonLinkValidator(item as any)).toThrow(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for PersonLink",
    );
  });

  it('should be able to create a new person_link payload using builder methods [new PersonLinkBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builder
      .setTarget({
        reference: 'Patient/123',
      })
      .addParamExtension('assurance', {
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName',
            valueString: 'Jane Doe',
          },
        ],
      })
      .addExtension({
        url: 'http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName',
        valueString: 'Jane Doe',
      })
      .build();

    expect(item).toBeDefined();
    expect(item).toEqual({
      _assurance: {
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName',
            valueString: 'Jane Doe',
          },
        ],
      },
      extension: [
        {
          url: 'http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName',
          valueString: 'Jane Doe',
        },
      ],
      target: {
        reference: 'Patient/123',
      },
    });
  });
});
