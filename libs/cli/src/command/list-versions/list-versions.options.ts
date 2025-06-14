export type ListVersionsTemplateString = `${string}$name${string}`;

export type ListVersionsOptions = {
  name: string;
  template: ListVersionsTemplateString;
};
