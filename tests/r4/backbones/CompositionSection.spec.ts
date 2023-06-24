import FHIRContext from '../../../src';
import { ICompositionSection } from '../../../src/r4/interfaces/backbones';
import CompositionSectionBuilder from '../../../src/r4/models/backbones/CompositionSectionBuilder';

describe('CompositionSection FHIR R4', () => {
  let builder: CompositionSectionBuilder;
  const { CompositionSection: Entity } = new FHIRContext().forR4();

  // create global
  beforeEach(() => {
    builder = Entity.builder();
  });

  it('should be able to validate a new composition_section [new CompositionSection()]', async () => {
    expect(
      () =>
        new Entity({
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
                    },
                  ],
                },
              ],
            },
          ],
        }),
    ).not.toThrow();
  });

  it('should be able to validate a new composition_section [ICompositionSection]', async () => {
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

    expect(() => Entity.validate(item)).not.toThrow();

    /*

    expect(() => CompositionSection.validate(item, 'ajv')).toThrow(
      "Invalid Backbone Element CompositionSection: \"The value '/party/reference' does not match with datatype 'string'\"",
    );

     */
  });

  it('should be able to create a new composition_section using builder methods [CompositionSection.builder()]', async () => {
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
        Entity.builder()
          .setTitle('Title')
          .setFocus({ reference: 'Patient/123' })
          .addEntry({
            reference: 'Observation/id',
          })
          .addEntry({
            reference: 'Observation/id',
          })
          .addSection(
            Entity.builder()
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
            },
          ],
          title: 'Title',
        },
      ],
      title: 'Title',
    });
  });

  it('should be get errors validators if new composition_section has wrong data', async () => {
    const item = {
      wrongProperty: 'wrongProperty', // Wrong property
    };

    expect(() => Entity.validate(item as any, 'format')).toThrowError(
      'Invalid Backbone Element Composition_Section: "must NOT have additional properties: [wrongProperty]',
    );
  });

  it('should be get errors validators if new composition_section has wrong references format', async () => {
    const item = {
      id: '123',
      mode: 'working',
      focus: {
        reference: '/id',
      },
    };

    expect(() => Entity.validate(item as any, 'reference')).toThrowError('Invalid Reference');
  });

  it('should be get errors validators if new composition_section has wrong references resource', async () => {
    const item = {
      id: '123',
      mode: 'working',
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

    expect(() => Entity.validate(item as any, 'reference')).toThrowError('Invalid Reference');
  });
});
