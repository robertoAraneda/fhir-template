import { IExtendedContactDetail } from '../../../src/r5/interfaces/datatypes';
import FHIRContext from '../../../src';
import ExtendedContactDetailBuilder from '../../../src/r5/models/datatypes/ExtendedContactDetailBuilder';

import { ExtendedContactDetailValidator } from '../../../src/r5/models/datatypes/ExtendedContactDetailValidator';

describe('ExtendedContactDetail FHIR R5', () => {
  let builder: ExtendedContactDetailBuilder;
  const { ExtendedContactDetail } = new FHIRContext().forR5();

  // create global
  beforeEach(() => {
    builder = ExtendedContactDetail.builder();
  });

  it('should be able to create a new contact point and validate with correct data [new ExtendedContactDetail()]', async () => {
    const item = new ExtendedContactDetail({
      id: '123',
      name: [
        {
          family: 'test',
          given: ['test'],
          use: 'old',
        },
      ],
      address: {
        type: 'both',
        text: 'test',
        line: ['test'],
        city: 'test',
      },
      purpose: {
        coding: [
          {
            system: 'test',
            code: 'test',
          },
        ],
        text: 'test',
      },
      extension: [
        {
          url: 'test',
          valueString: 'test',
        },
      ],
    });

    expect(item).toBeDefined();
  });

  it('should be able to create a new contact point and validate with correct data [IExtendedContactDetail]', async () => {
    const item: IExtendedContactDetail = {
      id: '123',
      name: [
        {
          family: 'test',
          given: ['test'],
          use: 'old',
        },
      ],
      address: {
        type: 'both',
        text: 'test',
        line: ['test'],
        city: 'test',
      },
      purpose: {
        coding: [
          {
            system: 'test',
            code: 'test',
          },
        ],
        text: 'test',
      },
    };

    expect(() => ExtendedContactDetailValidator(item)).not.toThrow();
  });

  it('should be able to validate a new contact point and validate with wrong data', async () => {
    const item = {
      id: '123',
      name: [
        {
          family: 'test',
          given: ['test'],
          use: 'old',
        },
      ],
      address: {
        type: 'both',
        text: 'test',
        line: ['test'],
        city: 'test',
      },
      purpose: {
        coding: [
          {
            system: 'test',
            code: 'test',
          },
        ],
        text: 'test',
      },
      test: 'test', // wrong property
    };

    expect(() => ExtendedContactDetailValidator(item as any)).toThrowError(
      "InvalidFieldException: field(s) 'test' is not a valid for ExtendedContactDetail",
    );
  });

  it('should be able to create a new contact point using builder methods', async () => {
    // build() is a method that returns the object that was built
    const item = builder
      .setId('123')
      .setAddress({
        type: 'both',
        text: 'test',
        line: ['test'],
      })
      .setPurpose({
        coding: [
          {
            system: 'test',
            code: 'test',
          },
        ],
      })
      .setOrganization({
        reference: 'Organization/test',
        display: 'test',
        type: 'test',
      })
      .build();

    expect(item).toBeDefined();
    expect(item).toEqual({
      address: {
        line: ['test'],
        text: 'test',
        type: 'both',
      },
      id: '123',
      organization: {
        display: 'test',
        reference: 'Organization/test',
        type: 'test',
      },
      purpose: {
        coding: [
          {
            code: 'test',
            system: 'test',
          },
        ],
      },
    });
  });
});
