import { PatientContactBuilder, PatientLinkBuilder } from '../../../src/r5/builders/backbones';
import { IPatientLink } from '../../../src/r5/interfaces/backbones';
import { IValidatorContext } from '../../../src/r5';
import FHIRContext from '../../../src';
import { PatientLink } from '../../../src/r5/models/backbones/PatientLink';

describe('PatientLink FHIR R5', () => {
  const { Validator, Builder, createBackboneElement } = new FHIRContext().forR5();
  let builder: PatientLinkBuilder;
  let builderFromFunction: PatientLinkBuilder;

  // create global
  beforeEach(() => {
    builder = new PatientLinkBuilder();
    builderFromFunction = Builder.backboneElements.PatientLink();
  });

  it('should be able to create a new patient_link payload and validate with correct data [IPatientLink]', async () => {
    const dataType: IPatientLink = {
      id: '123',
      other: {
        reference: 'test',
      },
      type: 'replaced-by', // correct type
      extension: [
        {
          url: 'test',
          valueString: 'test',
        },
      ],
    };

    const validate = await Validator.backboneElements.PatientLink(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new patient_link payload and validate with correct data [new PatientLink()]', async () => {
    const dataType = new PatientLink({
      id: '123',
      other: {
        reference: 'test',
      },
      type: 'replaced-by', // correct type
      extension: [
        {
          url: 'test',
          valueString: 'test',
        },
      ],
    });

    const validate = await Validator.backboneElements.PatientLink(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new patient_link payload and validate with correct data', async () => {
    const dataType = createBackboneElement('PatientLink', {
      id: '123',
      other: {
        reference: 'test',
      },
      type: 'replaced-by', // correct type
      extension: [
        {
          url: 'test',
          valueString: 'test',
        },
      ],
    });

    const validate = await Validator.backboneElements.PatientLink(dataType);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new patient_link payload and validate with wrong data', async () => {
    const dataType = {
      id: '123',
      extension: [
        {
          url: 'test',
          valueString: 'test',
        },
      ],
      wrongProperty: 'test', // wrong property
    };

    const validate = await Validator.backboneElements.PatientLink(dataType);

    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors).toHaveLength(3);
    expect(validate.errors).toEqual([
      {
        instancePath: '',
        keyword: 'required',
        message: "must have required property 'other'",
        params: { missingProperty: 'other' },
        schemaPath: '#/required',
      },
      {
        instancePath: '',
        keyword: 'required',
        message: "must have required property 'type'",
        params: { missingProperty: 'type' },
        schemaPath: '#/required',
      },
      {
        instancePath: '',
        keyword: 'additionalProperties',
        message: 'must NOT have additional properties',
        params: { additionalProperty: 'wrongProperty' },
        schemaPath: '#/additionalProperties',
      },
    ]);
  });

  it('should be able to create a new patient_link payload using builder methods [new PatientLinkBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const dataType = builder
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

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
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
    });
  });

  it('should be able to create a new patient_link payload using builder methods [Builder.backboneElements.PatientLink()]', async () => {
    // build() is a method that returns the object that was built
    const dataType = builderFromFunction
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

    expect(dataType).toBeDefined();
    expect(dataType).toEqual({
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
    });
  });
});
