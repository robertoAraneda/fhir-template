import FHIRContext from '../../../src';
import { IPatientCommunication } from '../../../src/r4/interfaces/backbones';
import { PatientCommunicationBuilder } from '../../../src/r4/models/backbones/PatientCommunicationBuilder';

import { PatientCommunicationValidator } from '../../../src/r4/models/backbones/PatientCommunicationValidator';

describe('PatientCommunication FHIR R4', () => {
  let builder: PatientCommunicationBuilder;
  const { PatientCommunication } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = PatientCommunication.builder();
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

    expect(item).toBeInstanceOf(PatientCommunication);
    expect(item).toBeDefined();
    expect(item.id).toEqual('123');
    expect(item.preferred).toEqual(true);
    expect(item.language).toBeDefined();
    expect(item.language.coding).toBeDefined();
    expect(item.language.coding?.[0].code).toEqual('123');
    expect(item.language.coding?.[0].system).toEqual('system');
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

    expect(() => PatientCommunicationValidator(item)).not.toThrow();
  });

  it('should be able to create a new patient_communication using builder methods [new PatientCommunication()]', async () => {
    const item = builder
      .setId('123')
      .setPreferred(true)
      .setLanguage({
        coding: [
          {
            code: '123',
            system: 'system',
          },
        ],
      })
      .addParamExtension('preferred', {
        extension: [
          {
            url: 'preferred',
            valueDate: '2020-01-01',
          },
        ],
      })
      .build();

    expect(item).toBeDefined();

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
      language: {
        coding: [
          {
            code: '123',
            system: 'system',
          },
        ],
      },
      preferred: true,
    });
  });

  it('should be get errors validators if new address has wrong data', async () => {
    const item = {
      id: '123',
      language: {
        coding: [
          {
            code: '123',
            system: 'system',
          },
        ],
      },
      wrongProperty: 'wrongProperty',
    };

    expect(() => PatientCommunicationValidator(item)).toThrowError(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for PatientCommunication",
    );
  });
});
