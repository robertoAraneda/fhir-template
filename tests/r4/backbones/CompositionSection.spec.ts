import FHIRContext from '../../../src';
import { ICompositionSection } from '../../../src/r4/interfaces/backbones';
import CompositionSectionBuilder from '../../../src/r4/models/backbones/CompositionSectionBuilder';
import ReferenceException from '../../../src/globals/exceptions/ReferenceException';
import { CompositionSectionValidator } from '../../../src/r4/models/backbones/CompositionSectionValidator';

describe('CompositionSection FHIR R4', () => {
  let builder: CompositionSectionBuilder;
  const { CompositionSection } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = CompositionSection.builder();
  });

  it('should be able to validate a new composition_section [new CompositionSection()]', () => {
    const item = new CompositionSection({
      id: '123',
      mode: 'working',
      focus: {
        reference: 'Patient/id',
      },
      author: [
        {
          reference: 'Practitioner/id',
        },
      ],
      code: {
        coding: [
          {
            system: 'http://loinc.org',
            code: '34133-9',
            display: 'Summarization of episode note',
          },
        ],
      },
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the composition</div>',
      },
      title: 'Title',
      orderedBy: {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/list-order',
            code: 'event-date',
            display: 'Sorted by Event Date',
          },
        ],
      },
      entry: [
        {
          reference: 'Observation/id',
        },
        {
          reference: 'Observation/id',
        },
      ],
      section: [
        {
          title: 'Title',
          code: {
            coding: [
              {
                system: 'http://loinc.org',
                code: '34133-9',
                display: 'Summarization of episode note',
              },
            ],
          },
          text: {
            status: 'generated',
            div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the composition</div>',
          },
          entry: [
            {
              reference: 'Observation/id',
            },
            {
              reference: 'Observation/id',
            },
          ],
          mode: 'working',
          section: [
            {
              mode: 'working',
              title: 'Title',
              entry: [
                {
                  reference: 'Observation/id',
                },
                {
                  reference: 'Observation/id',
                },
              ],
              section: [
                {
                  mode: 'working',
                  title: 'Title',
                  entry: [
                    {
                      reference: 'Observation/id',
                    },
                    {
                      reference: 'Observation/id',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });

    expect(item).toBeDefined();
  });

  it('should be able to validate a new composition_section [ICompositionSection]', () => {
    const item: ICompositionSection = {
      id: '123',
      mode: 'working',
      focus: {
        reference: 'Patient/id',
      },
      author: [
        {
          reference: 'Practitioner/id',
        },
      ],
      code: {
        coding: [
          {
            system: 'http://loinc.org',
            code: '34133-9',
            display: 'Summarization of episode note',
          },
        ],
      },
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the composition</div>',
      },
      title: 'Title',
      orderedBy: {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/list-order',
            code: 'event-date',
            display: 'Sorted by Event Date',
          },
        ],
      },
      entry: [
        {
          reference: 'Observation/id',
        },
        {
          reference: 'Observation/id',
        },
      ],
      section: [
        {
          title: 'Title',
          mode: 'changes',
          code: {
            coding: [
              {
                system: 'http://loinc.org',
                code: '34133-9',
                display: 'Summarization of episode note',
              },
            ],
          },
          text: {
            status: 'generated',
            div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the composition</div>',
          },
          entry: [
            {
              reference: 'Observation/id',
            },
            {
              reference: 'Observation/id',
            },
          ],
          section: [
            {
              mode: 'working',
              title: 'Title',
              entry: [
                {
                  reference: 'Observation/id',
                },
                {
                  reference: 'Observation/id',
                },
              ],
              section: [
                {
                  mode: 'working',
                  title: 'Title',
                  focus: {
                    reference: 'Patient/id',
                    identifier: {
                      system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
                      value: 'MRN12345',
                      period: {
                        start: '2001-05-06T00:00:00.000Z',
                        end: '2001-05-07T00:00:00.000Z',
                      },
                    },
                  },
                  entry: [
                    {
                      reference: 'Observation/id',
                    },
                    {
                      reference: 'Observation/id',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };

    expect(() => CompositionSectionValidator(item)).not.toThrow();

    /*

    expect(() => CompositionSectionValidator(item, 'ajv')).toThrow(
      "Invalid Backbone Element CompositionSection: \"The value '/party/reference' does not match with datatype 'string'\"",
    );

     */
  });

  it('should be able to create a new composition_section using builder methods [CompositionSection.builder()]', () => {
    const item = builder
      .setId('123')
      .setMode('changes')
      .addEntry({
        reference: 'Observation/id',
      })
      .addEntry({
        reference: 'Observation/id',
      })
      .setTitle('Title')
      .addSection(
        CompositionSection.builder()
          .setMode('working')
          .setTitle('Title')
          .setFocus({ reference: 'Patient/123' })
          .addEntry({
            reference: 'Observation/id',
          })
          .addEntry({
            reference: 'Observation/id',
          })
          .addSection(
            CompositionSection.builder()
              .setTitle('Title')
              .setMode('snapshot')
              .setFocus({ reference: 'Patient/123' })
              .addEntry({
                reference: 'Observation/id',
              })
              .build(),
          )
          .build(),
      )
      .build();

    expect(item).toEqual({
      entry: [
        {
          reference: 'Observation/id',
        },
        {
          reference: 'Observation/id',
        },
      ],
      id: '123',
      mode: 'changes',
      section: [
        {
          entry: [
            {
              reference: 'Observation/id',
            },
            {
              reference: 'Observation/id',
            },
          ],
          focus: {
            reference: 'Patient/123',
          },
          mode: 'working',
          section: [
            {
              entry: [
                {
                  reference: 'Observation/id',
                },
              ],
              focus: {
                reference: 'Patient/123',
              },
              mode: 'snapshot',
              title: 'Title',
            },
          ],
          title: 'Title',
        },
      ],
      title: 'Title',
    });
  });

  it('should be get errors validators if new composition_section has wrong data', () => {
    const item = {
      mode: 'working',
      title: 'Title',
      wrongProperty: 'wrongProperty', // Wrong property
    };

    expect(() => CompositionSectionValidator(item as ICompositionSection)).toThrowError(
      "InvalidFieldException: field(s) 'wrongProperty' is not a valid for CompositionSection",
    );
  });

  it('should be get errors validators if new composition_section has wrong references format', () => {
    const item = {
      id: '123',
      mode: 'working',
      title: 'Title',
      focus: {
        reference: '/id',
      },
    };

    expect(() => CompositionSectionValidator(item as ICompositionSection)).toThrowError(ReferenceException);
    expect(() => CompositionSectionValidator(item as ICompositionSection)).toThrowError(
      'ReferenceException: [value=/id]. Reference must be in the format {ResourceType}/{id}. Path: CompositionSection.focus.reference',
    );
  });

  it('should be get errors validators if new composition_section has wrong references resource', () => {
    const item = {
      id: '123',
      mode: 'working',
      title: 'Title',
      focus: {
        reference: 'Patient/id',
      },
      author: [
        {
          reference: 'Observation/id', // Wrong resource
        },
      ],
      entry: [
        {
          reference: 'Observation/id',
        },
        {
          reference: 'Observation/id',
        },
      ],
    };

    expect(() => CompositionSectionValidator(item as ICompositionSection)).toThrowError(ReferenceException);
    expect(() => CompositionSectionValidator(item as ICompositionSection)).toThrowError(
      'ReferenceException: [value=Observation]. ResourceType must be one of the following: [Practitioner, PractitionerRole, Device, Patient, RelatedPerson, Organization]. Path: CompositionSection.author[0].reference',
    );
  });
});
