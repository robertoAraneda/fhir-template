import { IAttachment } from '../../interfaces/datatypes';
import ConstraintException from '../../../globals/exceptions/ConstraintException';
import { DataTypeAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import assert from 'assert';
import { ValidatorHelperR4 } from '../../../globals/helpers/ValidatorHelperR4';

export const attachmentKeys = DataTypeAttributesHelperR4<IAttachment>([
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
]);

function ValidateConstraint(payload: IAttachment): void {
  // att-1: If the Attachment has data, it SHALL have a contentType
  if (payload.data && !payload.contentType) {
    throw new ConstraintException('Attachment', 'If the Attachment has data, it SHALL have a contentType (att-1)');
  }
}

export function AttachmentValidator(payload: IAttachment | IAttachment[], path: string = 'Attachment'): void {
  assert(typeof payload === 'object', `Expected Attachment to be of type object, received ${typeof payload}`);
  if (Array.isArray(payload)) {
    payload.forEach((p, index) => {
      AttachmentValidator(p, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR4(payload, attachmentKeys, path);
  ValidateConstraint(payload);
}
