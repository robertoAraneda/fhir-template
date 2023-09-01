import FHIRContext from '../../../src';
import { IPersonLink } from '../../../src/r4/interfaces/backbones';
import { IdentityAssuranceLevelEnum } from '../../../src/r4/enums';
import { PersonLinkBuilder } from '../../../src/r4/models/backbones/PersonLinkBuilder';

import { PersonLinkValidator } from '../../../src/r4/models/backbones/PersonLinkValidator';

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

    expect(item).toBeDefined();
  });

  it('should be able to validate a new person_link [IPersonLink]', async () => {
    const item: IPersonLink = {
      id: '123',
      target: {
        reference: 'Patient/123',
      },
      assurance: 'level4',
    };

    expect(() => PersonLinkValidator(item)).not.toThrow();
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

    expect(item).toBeDefined();

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
      target: {
        reference: 'Patient/123',
      },
      wrongProperty: 'wrongProperty',
    };
    expect(() => PersonLinkValidator(item)).toThrowError(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for PersonLink",
    );
  });
});
