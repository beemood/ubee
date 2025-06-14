export type ContentTemplateString = `${string}$name${string}`;

export type ContentOptions = {
  name: string;
  template: ContentTemplateString;
};
