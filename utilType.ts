export type MargeObject<T> = {
  [K in keyof T]: T[K];
};

export type AllValue<T extends object> = T[keyof T];
