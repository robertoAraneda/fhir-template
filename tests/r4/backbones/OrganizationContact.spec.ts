import FHIRContext from '../../../src';
import { OrganizationContact } from '../../../src/r4/models/backbones/OrganizationContact';
import { OrganizationContactBuilder } from '../../../src/r4/builders/backbones';
import { IOrganizationContact } from '../../../src/r4/interfaces/backbones';

describe('OrganizationContact FHIR R4', () => {
  let builder: OrganizationContactBuilder;
  let builderFromFunction: OrganizationContactBuilder;
  const { Validator, createBackboneElement, Builder } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = new OrganizationContactBuilder();
    builderFromFunction = Builder.backboneElements.OrganizationContactBuilder();
  });

  it('should be able to validate a new organization_contact [createBackboneElement]', async () => {
    const backboneElement = createBackboneElement('OrganizationContact', {
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

    const validate = await Validator.backboneElements.OrganizationContact(backboneElement);
    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
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

    const validateAddress = await Validator.backboneElements.OrganizationContact(item);
    expect(validateAddress.isValid).toBeTruthy();
    expect(validateAddress.errors).toBeUndefined();
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

    const validate = await Validator.backboneElements.OrganizationContact(item);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
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

  it('should be able to create a new address using builder methods [builders.dataTypes.AddressBuilder()]', async () => {
    const item = builderFromFunction
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
          start: '2020-01-01 HH:MM:SS',
          end: '2020-01-02',
        },
      },
    };

    const validate = await Validator.backboneElements.OrganizationContact(item);
    expect(validate.isValid).toBeFalsy();
    expect(validate.errors).toBeDefined();
    expect(validate.errors?.length).toBe(1);

    for (const error of validate.errors!) {
      expect(error.instancePath).toContain('period');
    }
  });
});
