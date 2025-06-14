export type RenameTemplateString = `${string}$name${string}`;

export type RenameOptions = {
  name: string;
  template: RenameTemplateString;
};
