import { elementAttributes } from '../base/Element';
import { IExtension } from '../../interfaces/datatypes';
import ConstraintException from '../../../globals/exceptions/ConstraintException';
import { DataTypeAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import { ValidatorHelperR4 } from '../../validators/ValidatorHelperR4';

export const extensionAttributes: string[] = [
  ...elementAttributes,
  'url',
  'valueAddress',
  'valueAttachment',
  'valueBase64Binary',
  'valueBoolean',
  'valueCanonical',
  'valueCode',
  'valueCodeableConcept',
  'valueCoding',
  'valueContactPoint',
  'valueDate',
  'valueDateTime',
  'valueDecimal',
  'valueId',
  'valueIdentifier',
  'valueInstant',
  'valueInteger',
  'valueMarkdown',
  'valueOid',
  'valuePeriod',
  'valuePositiveInt',
  'valueQuantity',
  'valueString',
  'valueTime',
  'valueUnsignedInt',
  'valueUri',
  'valueUrl',
  'valueUuid',
  'valueDuration',
  'valueHumanName',
  'valueMeta',
  'valueReference',
  '_url',
  '_valueBase64Binary',
  '_valueBoolean',
  '_valueCanonical',
  '_valueCode',
  '_valueDate',
  '_valueDateTime',
  '_valueDecimal',
  '_valueId',
  '_valueInstant',
  '_valueInteger',
  '_valueMarkdown',
  '_valueOid',
  '_valuePositiveInt',
  '_valueString',
  '_valueTime',
  '_valueUnsignedInt',
  '_valueUri',
  '_valueUrl',
  '_valueUuid',
];

export const extensionKeys = DataTypeAttributesHelperR4<IExtension>([
  {
    name: 'url',
    type: 'uri',
    isRequired: true,
    isArray: false,
  },
  {
    name: 'valueBase64Binary',
    type: 'base64Binary',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueBoolean',
    type: 'boolean',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueCanonical',
    type: 'canonical',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueCode',
    type: 'code',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueDate',
    type: 'date',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueDateTime',
    type: 'dateTime',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueDecimal',
    type: 'decimal',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueId',
    type: 'id',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueInstant',
    type: 'instant',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueInteger',
    type: 'integer',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueMarkdown',
    type: 'markdown',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueOid',
    type: 'oid',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valuePositiveInt',
    type: 'positiveInt',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueString',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueTime',
    type: 'time',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueUnsignedInt',
    type: 'unsignedInt',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueUri',
    type: 'uri',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueUrl',
    type: 'url',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueUuid',
    type: 'uuid',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueAddress',
    type: 'Address',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueAttachment',
    type: 'Attachment',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueCodeableConcept',
    type: 'CodeableConcept',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueCoding',
    type: 'Coding',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueContactPoint',
    type: 'ContactPoint',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueDuration',
    type: 'Duration',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueHumanName',
    type: 'HumanName',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueIdentifier',
    type: 'Identifier',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valuePeriod',
    type: 'Period',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueQuantity',
    type: 'Quantity',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueRange',
    type: 'Range',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueReference',
    type: 'Reference',
    isRequired: false,
    isArray: false,
    referenceValues: 'all',
  },
  {
    name: 'valueSignature',
    type: 'Signature',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'valueMeta',
    type: 'Meta',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_url',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueBase64Binary',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueBoolean',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueCanonical',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueCode',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueDate',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueDateTime',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueDecimal',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueId',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueInstant',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueInteger',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueMarkdown',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueOid',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valuePositiveInt',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueString',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueTime',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueUnsignedInt',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueUri',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueUrl',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_valueUuid',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
]);

function validateConstraints(args: IExtension, path: string): void {
  // + Rule: Must have either extensions or value[x], not both

  const keys = Object.keys(args) as (keyof IExtension)[];
  const included = ['id', 'url'] as (keyof IExtension)[];

  included.forEach((key) => {
    if (keys.includes(key)) {
      keys.splice(keys.indexOf(key), 1);
    }
  });

  if (keys.length > 1 && keys.includes('extension')) {
    throw new ConstraintException('Extension', `must have either extensions or value[x], not both for ${path}`);
  }
}

export function ExtensionValidator(payload: IExtension | IExtension[], path: string = 'Extension'): void {
  if (Array.isArray(payload)) {
    payload.forEach((extension, index) => {
      ExtensionValidator(extension, `${path}[${index}]`);
    });
    return;
  }

  validateConstraints(payload, path);
  ValidatorHelperR4(payload, extensionKeys, path);
}
