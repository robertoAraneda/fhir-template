import FHIRContext from '../../../src';
import { IPersonLink } from '../../../src/r4/interfaces/backbones';
import { IdentityAssuranceLevelEnum } from '../../../src/r4/enums';
import { _validateBackbone } from '../../../src/r4/validators/BaseValidator';
import { PersonLinkBuilder } from '../../../src/r4/models/backbones/PersonLinkBuilder';

describe('PersonLink FHIR R4', () => {
  let builder: PersonLinkBuilder;
  const { PersonLink } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = PersonLink.builder();
  });

  it('should be able to validate a new person_link [new PersonLink()]', async () => {
    const item = new PersonLink({
      id: '123',
      target: {
        reference: 'Patient/123',
      },
      assurance: 'level4',
    });

    const validate = await _validateBackbone(item, 'Person_Link');
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new person_link [IPersonLink]', async () => {
    const item: IPersonLink = {
      id: '123',
      target: {
        reference: 'Patient/123',
      },
      assurance: 'level4',
    };

    const validate = await _validateBackbone(item, 'Person_Link');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new person_link using builder methods [new PersonLink()]', async () => {
    const item = builder
      .setId('123')
      .setAssurance(IdentityAssuranceLevelEnum.LEVEL1)
      .setTarget({
        type: 'Patient',
        reference: 'Patient/123',
      })
      .addParamExtension('assurance', {
        extension: [
          {
            url: 'preferred',
            valueDate: '2020-01-01',
          },
        ],
      })
      .build();

    const validate = await _validateBackbone(item, 'Person_Link');

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();

    expect(item).toEqual({
      _assurance: {
        extension: [
          {
            url: 'preferred',
            valueDate: '2020-01-01',
          },
        ],
      },
      assurance: 'level1',
      id: '123',
      target: {
        reference: 'Patient/123',
        type: 'Patient',
      },
    });
  });

  it('should be get errors validators if new address has wrong data', async () => {
    const item = {
      id: '123',
      wrongProperty: 'wrongProperty',
    };

    const validate = await _validateBackbone(item, 'Person_Link');

    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors?.length).toBe(2);
    expect(validate.errors).toEqual([
      {
        instancePath: '',
        keyword: 'required',
        message: "must have required property 'target'",
        params: {
          missingProperty: 'target',
        },
        schemaPath: '#/required',
      },
      {
        instancePath: '',
        keyword: 'additionalProperties',
        message: 'must NOT have additional properties',
        params: {
          additionalProperty: 'wrongProperty',
        },
        schemaPath: '#/additionalProperties',
      },
    ]);
  });
});
