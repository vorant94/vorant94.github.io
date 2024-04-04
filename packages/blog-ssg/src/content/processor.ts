import rehypeStringify from 'rehype-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified, type Plugin } from 'unified';
import { matter } from 'vfile-matter';

const remarkFrontmatterParse: Plugin = function () {
  return function (_, file) {
    matter(file);
  };
};

const remarkContentSlug: Plugin = function () {
  return function (_, file) {
    if (!file.dirname) {
      throw new Error(`Expected dirname to be defined`);
    }

    file.data.slug = file.dirname.split('/').at(-1);
  };
};

export const processor = unified()
  .use(remarkParse) // parses the content itself
  .use(remarkFrontmatter) // adds support for yaml frontmatter so it is treated separately from other content
  .use(remarkFrontmatterParse) // parses frontmatter and attaches it as metadata
  .use(remarkRehype) // converts content tree to html tree
  .use(remarkContentSlug) // attach slug of the content itself
  .use(rehypeStringify); // renders html tree to actual html
