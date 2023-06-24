import RequiredException from '../exceptions/RequiredException';

export function validateRequiredFieldHelper(fields: readonly string[], payload: any, entityName: string) {
  fields.forEach((field) => {
    if (!payload[field] && !payload[`_${field}`]) {
      throw new RequiredException(entityName, [
        {
          keyword: 'required',
          message: `${entityName}.${field} or ${entityName}._${field} is required`,
        },
      ]);
    }
  });
}
