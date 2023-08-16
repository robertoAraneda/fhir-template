import { DataTypeAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import IRelatedArtifact from '../../interfaces/datatypes/IRelatedArtifact';
import RelatedArtifactTypeEnum from '../../enums/RelatedArtifactTypeEnum';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const RelatedArtifactKeysDefinitions = DataTypeAttributesHelperR5<IRelatedArtifact>([
  {
    name: 'type',
    type: 'code',
    isArray: false,
    isRequired: true,
    enumValues: Object.values(RelatedArtifactTypeEnum),
  },
  {
    name: 'classifier',
    type: 'CodeableConcept',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'label',
    type: 'string',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'display',
    type: 'string',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'citation',
    type: 'markdown',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'document',
    type: 'Attachment',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'resource',
    type: 'canonical',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'resourceReference',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceValues: 'all',
  },
  {
    name: 'publicationStatus',
    type: 'code',
    isArray: false,
    isRequired: false,
    enumValues: Object.values(RelatedArtifactTypeEnum),
  },
  {
    name: 'publicationDate',
    type: 'date',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_type',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_label',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_display',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_citation',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_publicationStatus',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_publicationDate',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);
export const RelatedArtifactValidator = (
  args: IRelatedArtifact | IRelatedArtifact[],
  path: string = 'RelatedArtifact',
) => {
  if (Array.isArray(args)) {
    args.forEach((item, index) => {
      RelatedArtifactValidator(item, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR5(args, RelatedArtifactKeysDefinitions, path);
};
