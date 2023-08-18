import { DataTypeAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import IAnnotation from '../../interfaces/datatypes/IAnnotation';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const annotationKeysDefinitions = DataTypeAttributesHelperR5<IAnnotation>([
  {
    name: 'authorReference',
    isArray: false,
    isRequired: false,
    type: 'Reference',
    referenceValues: ['Practitioner', 'PractitionerRole', 'Patient', 'RelatedPerson', 'Organization'],
  },
  {
    name: 'authorString',
    isArray: false,
    isRequired: false,
    type: 'string',
  },
  {
    name: 'time',
    type: 'dateTime',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'text',
    type: 'markdown',
    isArray: false,
    isRequired: true,
  },
  {
    name: '_authorString',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_text',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_time',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);

export function AnnotationValidator(payload: IAnnotation | IAnnotation[], path: string = 'Annotation') {
  if (Array.isArray(payload)) {
    payload.forEach((p, index) => AnnotationValidator(p, `${path}[${index}]`));
    return;
  }

  ValidatorHelperR5(payload, annotationKeysDefinitions, path);
}
