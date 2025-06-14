import { ContentOptions } from './content.options.js';

/**
 * Read all projects' package.json file and create a single array json under content directory.
 * @param options {@link ContentOptions}
 */
export function contentAction(options: ContentOptions): void {
  console.log(options.template.replaceAll('$name', options.name));
}
