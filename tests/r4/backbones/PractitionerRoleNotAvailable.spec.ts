import FHIRContext from '../../../src';
import { IPractitionerRoleNotAvailable } from '../../../src/r4/interfaces/backbones';
import { PractitionerRoleNotAvailableBuilder } from '../../../src/r4/models/backbones/PractitionerRoleNotAvailableBuilder';

import { PractitionerRoleNotAvailableValidator } from '../../../src/r4/models/backbones/PractitionerRoleNotAvailableValidator';

describe('PractitionerRoleNotAvailable FHIR R4', () => {
  let builder: PractitionerRoleNotAvailableBuilder;
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

    expect(item).toBeDefined();
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

    expect(() => PractitionerRoleNotAvailableValidator(item)).not.toThrow();
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

    expect(item).toBeDefined();

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
      description: 'test',
      wrongProperty: '123',
    };

    expect(() => PractitionerRoleNotAvailableValidator(item as IPractitionerRoleNotAvailable)).toThrowError(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for PractitionerRoleNotAvailable",
    );
  });
});
