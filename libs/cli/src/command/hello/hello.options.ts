export type HelloTemplateString = `${string}$name${string}`;

export type HelloOptions = {
  name: string;
  template: HelloTemplateString;
};
