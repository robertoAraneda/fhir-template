import FHIRContext from '../../../src';
import { IOrganizationContact } from '../../../src/r4/interfaces/backbones';
import { OrganizationContactBuilder } from '../../../src/r4/models/backbones/OrganizationContactBuilder';

import { OrganizationContactValidator } from '../../../src/r4/models/backbones/OrganizationContactValidator';

describe('OrganizationContact FHIR R4', () => {
  let builder: OrganizationContactBuilder;
  const { OrganizationContact } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = OrganizationContact.builder();
  });

  it('should be able to validate a new organization_contact [new OrganizationContact()]', async () => {
    const item = new OrganizationContact({
      id: '123',
      address: {
        id: '123',
        type: 'both',
        period: {
          start: '2020-01-01',
          end: '2020-01-02',
        },
      },
    });

    expect(item).toBeDefined();
  });

  it('should be able to validate a new organization_contact [IOrganizationContact]', async () => {
    const item: IOrganizationContact = {
      id: '123',
      address: {
        id: '123',
        type: 'both',
        period: {
          start: '2020-01-01',
          end: '2020-01-02',
        },
      },
    };

    expect(() => OrganizationContactValidator(item)).not.toThrow();
  });

  it('should be able to create a new organization_contact using builder methods [new OrganizationContact()]', async () => {
    const item = builder
      .setId('123')
      .setAddress({
        city: 'Anytown',
        use: 'home',
        type: 'postal',
      })
      .addTelecom({
        use: 'old',
        system: 'url',
        value: '123-456-7890',
      })
      .build();

    expect(item).toBeDefined();

    expect(item).toEqual({
      address: {
        city: 'Anytown',
        type: 'postal',
        use: 'home',
      },
      id: '123',
      telecom: [
        {
          system: 'url',
          use: 'old',
          value: '123-456-7890',
        },
      ],
    });
  });

  it('should be get errors validators if new address has wrong data', async () => {
    const item = {
      id: '123',
      address: {
        id: '123',
        type: 'both',
        period: {
          start: '2020-01-01',
          end: '2020-01-02',
        },
      },
      wrongProperty: 'wrongProperty',
    };

    expect(() => OrganizationContactValidator(item as IOrganizationContact)).toThrowError(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for OrganizationContact",
    );
  });
});
