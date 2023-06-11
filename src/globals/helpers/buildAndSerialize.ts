export interface BuildAndSerialize<T> {
  build: () => T;
  serialize: () => string;
}
export const createBuildAndSerializeMethods = <T>(entity: unknown): BuildAndSerialize<T> => {
  const serialize = JSON.stringify(entity, null, 2);
  return {
    build: () => JSON.parse(serialize),
    serialize: () => serialize,
  };
};
