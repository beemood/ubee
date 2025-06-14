import { ContentOptions } from './content.options.js';

/**
 * Say content
 * @param options {@link ContentOptions}
 */
export function contentAction(options: ContentOptions): void {
  console.log(options.template.replaceAll('$name', options.name));
}
