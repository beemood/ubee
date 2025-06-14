export type ReplaceTemplateString = `${string}$name${string}`;

export type ReplaceOptions = {
  name: string;
  template: ReplaceTemplateString;
};
