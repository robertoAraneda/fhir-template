import { IValidatorContext } from '../../../src/r4';
import FHIRContext from '../../../src';
import { PatientCommunication } from '../../../src/r4/models/backbones/PatientCommunication';
import { PatientCommunicationBuilder } from '../../../src/r4/builders/backbones';
import { IPatientCommunication } from '../../../src/r4/interfaces/backbones';

describe('PatientCommunication FHIR R4', () => {
  let builder: PatientCommunicationBuilder;
  let builderFromFunction: PatientCommunicationBuilder;
  const { Validator, createBackboneElement, Builder } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = new PatientCommunicationBuilder();
    builderFromFunction = Builder.backboneElements.PatientCommunicationBuilder();
  });

  it('should be able to validate a new patient_communication [createBackboneElement]', async () => {
    const backboneElement = createBackboneElement('PatientCommunication', {
      id: '123',
      preferred: true,
      language: {
        coding: [
          {
            code: '123',
            system: 'system',
          },
        ],
      },
    });

    const validate = await Validator.backboneElements.PatientCommunication(backboneElement);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new patient_communication [new PatientCommunication()]', async () => {
    const item = new PatientCommunication({
      id: '123',
      preferred: true,
      language: {
        coding: [
          {
            code: '123',
            system: 'system',
          },
        ],
      },
    });

    const validateAddress = await Validator.backboneElements.PatientCommunication(item);
    expect(validateAddress.isValid).toBeTruthy();
    expect(validateAddress.errors).toBeUndefined();
  });

  it('should be able to validate a new patient_communication [IPatientCommunication]', async () => {
    const item: IPatientCommunication = {
      id: '123',
      preferred: true,
      language: {
        coding: [
          {
            code: '123',
            system: 'system',
          },
        ],
      },
    };

    const validate = await Validator.backboneElements.PatientCommunication(item);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new patient_communication using builder methods [new PatientCommunication()]', async () => {
    const item = builder
      .setId('123')
      .setPreferred(true)
      .addParamExtension('preferred', {
        extension: [
          {
            url: 'preferred',
            valueDate: '2020-01-01',
          },
        ],
      })
      .build();

    expect(item).toEqual({
      _preferred: {
        extension: [
          {
            url: 'preferred',
            valueDate: '2020-01-01',
          },
        ],
      },
      id: '123',
      preferred: true,
    });
  });

  it('should be able to create a new address using builder methods [builders.dataTypes.AddressBuilder()]', async () => {
    const item = builderFromFunction
      .setId('123')
      .setPreferred(true)
      .addParamExtension('preferred', {
        extension: [
          {
            url: 'preferred',
            valueDate: '2020-01-01',
          },
        ],
      })
      .build();

    expect(item).toEqual({
      _preferred: {
        extension: [
          {
            url: 'preferred',
            valueDate: '2020-01-01',
          },
        ],
      },
      id: '123',
      preferred: true,
    });
  });

  it('should be get errors validators if new address has wrong data', async () => {
    const item = {
      id: '123',
      address: {
        id: '123',
        type: 'both',
        period: {
          start: '2020-01-01 HH:MM:SS',
          end: '2020-01-02',
        },
      },
    };

    const validate = await Validator.backboneElements.PatientCommunication(item);
    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors?.length).toBe(2);
    expect(validate.errors).toEqual([
      {
        instancePath: '',
        schemaPath: '#/required',
        keyword: 'required',
        params: {
          missingProperty: 'language',
        },
        message: "must have required property 'language'",
      },
      {
        instancePath: '',
        schemaPath: '#/additionalProperties',
        keyword: 'additionalProperties',
        params: {
          additionalProperty: 'address',
        },
        message: 'must NOT have additional properties',
      },
    ]);
  });
});
