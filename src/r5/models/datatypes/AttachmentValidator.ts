import { IAttachment } from '../../interfaces/datatypes';
import ConstraintException from '../../../globals/exceptions/ConstraintException';
import { DataTypeAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const attachmentKeys = DataTypeAttributesHelperR5<IAttachment>([
  {
    name: 'contentType',
    type: 'code',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'language',
    type: 'code',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'data',
    type: 'base64Binary',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'url',
    type: 'url',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'size',
    type: 'unsignedInt',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'hash',
    type: 'base64Binary',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'title',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'creation',
    type: 'dateTime',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'width',
    type: 'positiveInt',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'height',
    type: 'positiveInt',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'frames',
    type: 'positiveInt',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'duration',
    type: 'decimal',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'pages',
    type: 'positiveInt',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_contentType',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_language',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_data',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_url',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_size',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_hash',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_title',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_creation',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_width',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_height',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_frames',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_duration',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_pages',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);

function ValidateConstraint(payload: IAttachment): void {
  // att-1: If the Attachment has data, it SHALL have a contentType
  if (payload.data && !payload.contentType) {
    throw new ConstraintException('Attachment', 'If the Attachment has data, it SHALL have a contentType (att-1)');
  }
}

export function AttachmentValidator(payload: IAttachment | IAttachment[], path: string = 'Attachment'): void {
  if (Array.isArray(payload)) {
    payload.forEach((p, index) => {
      AttachmentValidator(p, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR5(payload, attachmentKeys, path);
  ValidateConstraint(payload);
}
