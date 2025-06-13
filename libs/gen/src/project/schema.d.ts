export type ProjectType = 'lib' | 'cli' | 'gen' | 'api';

export interface ProjectGeneratorSchema {
  name: string;
  type: ProjectType;
}
