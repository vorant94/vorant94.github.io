import { type CollectionEntry } from 'astro:content';
import { useEffect, useRef, type ReactElement } from 'react';
import { useMediaQuery } from 'react-responsive';

interface CommentsProps {
  post: CollectionEntry<'posts'>;
}

export function Comments({ post }: CommentsProps): ReactElement {
  const ref = useRef<HTMLElement>(null);

  const isDark = useMediaQuery(
    { query: '(prefers-color-scheme: dark)' },
    undefined,
    (isDark) => {
      const iframe =
        document.querySelector<HTMLIFrameElement>('.utterances-frame');
      if (!iframe) {
        return;
      }

      iframe.contentWindow?.postMessage(
        { type: 'set-theme', theme: isDark ? 'github-dark' : 'github-light' },
        'https://utteranc.es',
      );
    },
  );

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const scriptElem = document.createElement('script');
    scriptElem.src = 'https://utteranc.es/client.js';
    scriptElem.setAttribute('repo', 'vorant94/digital-garden');
    scriptElem.setAttribute('issue-term', post.slug);
    scriptElem.setAttribute('label', 'comment');
    scriptElem.setAttribute('theme', isDark ? 'github-dark' : 'github-light');
    scriptElem.async = true;
    scriptElem.crossOrigin = 'anonymous';

    ref.current.appendChild(scriptElem);
  }, []);

  return <section ref={ref}></section>;
}
