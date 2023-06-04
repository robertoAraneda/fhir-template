export const validateReference = (value: string, resources: string[]): void => {
  const resourceType = value.split('/');
  if (!resourceType.length || resourceType.length !== 2) {
    throw new Error('Invalid reference. Reference must be in the format {ResourceType}/{id}');
  }

  if (!resources.includes(resourceType[0])) {
    throw new Error(`Invalid reference. ${value} is not a valid resource type.`);
  }
};
