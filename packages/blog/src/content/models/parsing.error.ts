import type { ContentModel } from './content.model.js';

export class ParsingError extends Error {
  constructor(content: ContentModel, error: unknown) {
    super(
      `Failed to parse content ${content.id}, details are ${error instanceof Error ? error.message : JSON.stringify(error)}`,
    );
  }
}
