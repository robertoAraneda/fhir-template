import { IPatientLink } from '../../../src/r5/interfaces/backbones';
import FHIRContext from '../../../src';
import PatientLinkBuilder from '../../../src/r5/models/backbones/PatientLinkBuilder';
import { PatientLinkValidator } from '../../../src/r5/models/backbones/PatientLinkValidator';

describe('PatientLink FHIR R5', () => {
  const { PatientLink } = new FHIRContext().forR5();
  let builder: PatientLinkBuilder;

  // create global
  beforeEach(() => {
    builder = PatientLink.builder();
  });

  it('should be able to create a new patient_link payload and validate with correct data [IPatientLink]', async () => {
    const item: IPatientLink = {
      id: '123',
      other: {
        reference: 'Patient/id',
      },
      type: 'replaced-by', // correct type
      extension: [
        {
          url: 'test',
          valueString: 'test',
        },
      ],
    };

    expect(() => PatientLinkValidator(item)).not.toThrow();
  });

  it('should be able to create a new patient_link payload and validate with correct data [new PatientLink()]', async () => {
    const item = new PatientLink({
      id: '123',
      other: {
        reference: 'Patient/id',
      },
      type: 'replaced-by', // correct type
      extension: [
        {
          url: 'test',
          valueString: 'test',
        },
      ],
    });

    expect(item).toBeDefined();
  });

  it('should be able to validate a new patient_link payload and validate with wrong data', async () => {
    const item = {
      id: '123',
      type: 'replaced-by',
      other: {
        reference: 'Patient/id',
      },
      extension: [
        {
          url: 'test',
          valueString: 'test',
        },
      ],
      wrongProperty: 'test', // wrong property
    };
    expect(() => PatientLinkValidator(item as any)).toThrow(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for PatientLink",
    );
  });

  it('should be able to create a new patient_link payload using builder methods [new PatientLinkBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builder
      .setOther({
        reference: 'Patient/123',
      })
      .setType('seealso')
      .addParamExtension('type', {
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
      _type: {
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
      other: {
        reference: 'Patient/123',
      },
      type: 'seealso',
    });
  });
});
