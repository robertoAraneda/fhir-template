export interface BuildAndSerialize<T> {
  build: () => T;
}
export const createBuildAndSerializeMethods = <T>(entity: unknown): BuildAndSerialize<T> => {
  const serialize = JSON.stringify(entity, null, 2);
  return {
    build: () => JSON.parse(serialize),
  };
};
