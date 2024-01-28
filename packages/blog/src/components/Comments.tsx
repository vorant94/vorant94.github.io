import type { Post } from '@/shared';
import { useEffect, useRef, type FunctionComponent } from 'react';
import { useMediaQuery } from 'react-responsive';

export const Comments: FunctionComponent<CommentsProps> = function ({ post }) {
  const ref = useRef<HTMLElement>(null);

  const isDark = useMediaQuery({ query: '(prefers-color-scheme: dark)' });

  useEffect(() => {
    if (!ref.current) {
      throw new Error(`Can't find ref to attach comments to`);
    }

    const iframe =
      document.querySelector<HTMLIFrameElement>('.utterances-frame');
    // if iframe is found it means that effect is triggered by useMediaQuery and not by initial rendering,
    // hence we need to update theme on already attached iframe instead of attaching another one
    if (iframe) {
      iframe.contentWindow?.postMessage(
        { type: 'set-theme', theme: isDark ? 'github-dark' : 'github-light' },
        'https://utteranc.es',
      );
    } else {
      const scriptElem = document.createElement('script');
      scriptElem.src = 'https://utteranc.es/client.js';
      scriptElem.setAttribute('repo', 'vorant94/digital-garden');
      scriptElem.setAttribute('issue-term', post.slug);
      scriptElem.setAttribute('label', 'comment');
      scriptElem.setAttribute('theme', isDark ? 'github-dark' : 'github-light');
      scriptElem.async = true;
      scriptElem.crossOrigin = 'anonymous';

      ref.current.appendChild(scriptElem);
    }
  }, [isDark]);

  return <section ref={ref}></section>;
};

export interface CommentsProps {
  post: Post;
}
