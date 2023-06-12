import { PractitionerRoleBuilder } from '../../../src/r4/builders/resources';
import { IPractitionerRole } from '../../../src/r4/interfaces/resources';
import FHIRContext from '../../../src';
import { PractitionerRole } from '../../../src/r4/models/resources';

describe('PractitionerRole Resource FHIR R4', () => {
  let builder: PractitionerRoleBuilder;
  let builderFromFunction: PractitionerRoleBuilder;
  const context = new FHIRContext();
  const { Validator, Builder, createResource } = context.forR4();

  // create global
  beforeEach(() => {
    builder = new PractitionerRoleBuilder();
    builderFromFunction = Builder.resources.PractitionerRole();
  });

  it('should be able to create a new practitioner role and validate with correct data [IPractitionerRole]', async () => {
    const item: IPractitionerRole = {
      resourceType: 'PractitionerRole',
      id: 'example',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t<p>\n\t\t\t\tDr Adam Careful is a Referring Practitioner for Acme Hospital from 1-Jan 2012 to 31-Mar\n\t\t\t\t2012\n\t\t\t</p>\n\t\t</div>',
      },
      identifier: [
        {
          system: 'http://www.acme.org/practitioners',
          value: '23',
          type: {
            coding: [
              {
                code: 'MD',
                system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
              },
            ],
          },
        },
      ],
      active: true,
      period: {
        start: '2012-01-01',
        end: '2012-03-31',
      },
      practitioner: {
        reference: 'Practitioner/example',
        display: 'Dr Adam Careful',
      },
      organization: {
        reference: 'Organization/f001',
      },
      code: [
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v2-0286',
              code: 'RP',
            },
          ],
        },
      ],
      specialty: [
        {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '408443003',
              display: 'General medical practice',
            },
          ],
        },
      ],
      location: [
        {
          reference: 'Location/1',
          display: 'South Wing, second floor',
        },
      ],
      healthcareService: [
        {
          reference: 'HealthcareService/example',
        },
      ],
      availableTime: [
        {
          daysOfWeek: ['mon', 'tue', 'wed'],
          availableStartTime: '09:00:00',
          availableEndTime: '16:30:00',
        },
        {
          daysOfWeek: ['thu', 'fri'],
          availableStartTime: '09:00:00',
          availableEndTime: '12:00:00',
        },
      ],
      notAvailable: [
        {
          description: 'Adam will be on extended leave during May 2017',
          during: {
            start: '2017-05-01',
            end: '2017-05-20',
          },
        },
        {
          description: 'Adam is generally unavailable on public holidays and during the Christmas/New Year break',
        },
      ],
      endpoint: [
        {
          reference: 'Endpoint/example',
        },
      ],
    };

    const validate = await Validator.resources.PractitionerRole(item);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new contact point and validate with wrong data [new PractitionerRole()]', async () => {
    const item = new PractitionerRole({
      resourceType: 'PractitionerRole',
      id: 'f007-0',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Generated</div>',
      },
      practitioner: {
        reference: 'Practitioner/f007',
        display: 'Simone Heps',
      },
      organization: {
        reference: 'Organization/f001',
        display: 'BMC',
      },
      code: [
        {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '59058001',
              display: 'General physician',
            },
          ],
        },
      ],
      specialty: [
        {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '394814009',
              display: 'General practice',
            },
          ],
        },
      ],
    });

    const validate = await Validator.resources.PractitionerRole(item);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to validate a new contact point and validate with wrong data [createResource()]', async () => {
    const item = createResource('PractitionerRole', {
      resourceType: 'PractitionerRole',
      id: 'f007-0',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Generated</div>',
      },
      practitioner: {
        reference: 'Practitioner/f007',
        display: 'Simone Heps',
      },
      organization: {
        reference: 'Organization/f001',
        display: 'BMC',
      },
      code: [
        {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '59058001',
              display: 'General physician',
            },
          ],
        },
      ],
      specialty: [
        {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '394814009',
              display: 'General practice',
            },
          ],
        },
      ],
    });

    const validate = await Validator.resources.PractitionerRole(item);

    expect(validate.isValid).toBeTruthy();
    expect(validate.errors).toBeUndefined();
  });

  it('should be able to create a new contact point using builder methods [new PractitionerRoleBuilder()]', async () => {
    // build() is a method that returns the object that was built
    const item = builder
      .addCode({
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '59058001',
          },
        ],
      })
      .addParamExtension('active', {
        extension: [
          {
            url: 'active',
            valueBoolean: true,
          },
        ],
      })
      .setActive(true)
      .addHealthcareService({
        reference: 'HealthcareService/example',
      })
      .build();

    expect(item).toBeDefined();
    expect(item).toEqual({
      _active: {
        extension: [
          {
            url: 'active',
            valueBoolean: true,
          },
        ],
      },
      active: true,
      code: [
        {
          coding: [
            {
              code: '59058001',
              system: 'http://snomed.info/sct',
            },
          ],
        },
      ],
      healthcareService: [
        {
          reference: 'HealthcareService/example',
        },
      ],
      resourceType: 'PractitionerRole',
    });
  });

  it('should be able to create a new contact point using builder methods [Builder.resources.PractitionerRole()]', async () => {
    // build() is a method that returns the object that was built
    const item = builderFromFunction
      .addCode({
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '59058001',
          },
        ],
      })
      .addParamExtension('active', {
        extension: [
          {
            url: 'active',
            valueBoolean: true,
          },
        ],
      })
      .setActive(true)
      .addHealthcareService({
        reference: 'HealthcareService/example',
      })
      .build();

    expect(item).toBeDefined();
    expect(item).toEqual({
      _active: {
        extension: [
          {
            url: 'active',
            valueBoolean: true,
          },
        ],
      },
      active: true,
      code: [
        {
          coding: [
            {
              code: '59058001',
              system: 'http://snomed.info/sct',
            },
          ],
        },
      ],
      healthcareService: [
        {
          reference: 'HealthcareService/example',
        },
      ],
      resourceType: 'PractitionerRole',
    });
  });
});
