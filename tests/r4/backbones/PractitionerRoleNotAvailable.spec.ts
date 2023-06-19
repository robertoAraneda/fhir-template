import FHIRContext from '../../../src';
import { _validateBackbone } from '../../../src/r4/validators/BaseValidator';
import { IPractitionerRoleNotAvailable } from '../../../src/r4/interfaces/backbones';

import { IPractitionerRoleNotAvailableBuilder } from '../../../src/r4/models/backbones/PractitionerRoleNotAvailableBuilder';

describe('PractitionerRoleNotAvailable FHIR R4', () => {
  let builder: IPractitionerRoleNotAvailableBuilder;
  const { PractitionerRoleNotAvailable } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = PractitionerRoleNotAvailable.builder();
  });

  it('should be able to validate a new practitioner_role_not_available [new PractitionerRoleNotAvailable()]', async () => {
    const item = new PractitionerRoleNotAvailable({
      id: '123',
      description: 'test',
      during: {
        start: '2020-01-01',
        end: '2020-01-02',
      },
    });

    const validate = await _validateBackbone(item, 'PractitionerRole_NotAvailable');
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new practitioner_role_not_available [IPractitionerRoleNotAvailable]', async () => {
    const item: IPractitionerRoleNotAvailable = {
      id: '123',
      description: 'test',
      during: {
        start: '2020-01-01',
        end: '2020-01-02',
      },
    };

    const validate = await _validateBackbone(item, 'PractitionerRole_NotAvailable');
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new practitioner_role_not_available using builder methods [new PractitionerRoleNotAvailable()]', async () => {
    const item = builder
      .setId('123')
      .setDescription('test')
      .setDuring({
        start: '2020-01-01',
        end: '2020-01-02',
      })
      .build();

    const validate = await _validateBackbone(item, 'PractitionerRole_NotAvailable');
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();

    expect(item).toEqual({
      description: 'test',
      during: {
        end: '2020-01-02',
        start: '2020-01-01',
      },
      id: '123',
    });
  });

  it('should be get errors validators if new address has wrong data', async () => {
    const item = {
      id: '123',
      wrongProperty: '123',
    };

    const validate = await _validateBackbone(item, 'PractitionerRole_NotAvailable');

    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors?.length).toBe(1);
    expect(validate.errors).toEqual([
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
