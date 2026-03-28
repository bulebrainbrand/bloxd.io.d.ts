export type MargeObject<T> = {
  [K in keyof T]: T[K];
};
