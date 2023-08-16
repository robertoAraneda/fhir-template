import FHIRContext from '../../../src';
import RelatedArtifactBuilder from '../../../src/r5/models/datatypes/RelatedArtifactBuilder';
import { RelatedArtifactValidator } from '../../../src/r5/models/datatypes/RelatedArtifactValidator';
import IRelatedArtifact from '../../../src/r5/interfaces/datatypes/IRelatedArtifact';

describe('RelatedArtifact FHIR R5', () => {
  let builder: RelatedArtifactBuilder;
  const { RelatedArtifact } = new FHIRContext().forR5();

  // create global
  beforeEach(() => {
    builder = RelatedArtifact.builder();
  });

  it('should be able to create a new attachment and validate with correct data [IRelatedArtifact]', async function () {
    const item: IRelatedArtifact = {
      type: 'amends',
      citation: 'citation',
      display: 'display',
      document: {
        url: 'url',
        data: 'data',
        contentType: 'contentType',
      },
    };

    expect(() => RelatedArtifactValidator(item)).not.toThrow();
  });

  it('should be able to create a new attachment and validate with correct data [new RelatedArtifact]', async function () {
    const item = new RelatedArtifact({
      type: 'amends',
      citation: 'citation',
      display: 'display',
      document: {
        url: 'url',
        data: 'data',
        contentType: 'contentType',
      },
    });

    expect(item).toBeDefined();
  });

  it('should return a RelatedArtifact with method', async function () {
    const item = builder
      .setId('id')
      .setType('citation')
      .addClassifier({
        coding: [
          {
            code: 'code',
            system: 'system',
          },
        ],
        text: 'text',
      })
      .setLabel('label')
      .setPublicationDate('2020-01-01')
      .addParamExtension('display', {
        extension: [
          {
            url: 'test',
            valueBoolean: true,
          },
        ],
      })
      .build();

    expect(item).toEqual({
      _display: {
        extension: [
          {
            url: 'test',
            valueBoolean: true,
          },
        ],
      },
      classifier: [
        {
          coding: [
            {
              code: 'code',
              system: 'system',
            },
          ],
          text: 'text',
        },
      ],
      id: 'id',
      label: 'label',
      publicationDate: '2020-01-01',
      type: 'citation',
    });
  });

  it('should return an error if attribute does not exist', async function () {
    const item = {
      type: 'notExist',
      notExist: 'not exist',
    } as any;

    expect(() => RelatedArtifactValidator(item)).toThrowError(
      "InvalidFieldException: field(s) 'notExist' is not a valid for RelatedArtifact",
    );
  });
});
