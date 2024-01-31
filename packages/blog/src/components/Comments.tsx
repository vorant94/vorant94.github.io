import type { Post } from '@/shared';
import {
  useEffect,
  useRef,
  type FunctionComponent,
  type RefObject,
} from 'react';
import { useMediaQuery } from 'react-responsive';

export const Comments: FunctionComponent<CommentsProps> = function ({ post }) {
  const utterances = useThemedUtterances(post.slug);

  return <section ref={utterances}></section>;
};

export interface CommentsProps {
  post: Post;
}

function useThemedUtterances(issueTerm: string): RefObject<HTMLElement> {
  const elRef = useRef<HTMLElement>(null);

  const isDark = useMediaQuery({ query: '(prefers-color-scheme: dark)' });
  useEffect(() => {
    const iframe =
      document.querySelector<HTMLIFrameElement>('.utterances-frame');
    // if iframe is found it means that effect is triggered by useMediaQuery and not by initial rendering,
    // hence we need to update theme on already attached iframe instead of attaching another one
    if (iframe) {
      if (!iframe.contentWindow) {
        throw Error(`Can't send theme change message`);
      }

      const message = {
        type: 'set-theme',
        theme: isDark ? 'github-dark' : 'github-light',
      };
      iframe.contentWindow.postMessage(message, 'https://utteranc.es');
    } else {
      if (!elRef.current) {
        throw new Error(`Can't find ref to attach comments to`);
      }

      const scriptElem = document.createElement('script');
      scriptElem.src = 'https://utteranc.es/client.js';
      scriptElem.setAttribute('repo', 'vorant94/digital-garden');
      scriptElem.setAttribute('issue-term', issueTerm);
      scriptElem.setAttribute('label', 'comment');
      scriptElem.setAttribute('theme', isDark ? 'github-dark' : 'github-light');
      scriptElem.async = true;
      scriptElem.crossOrigin = 'anonymous';

      elRef.current.appendChild(scriptElem);
    }

    // since we are in the MPA-mode as a result of Astro, there is no need to clean up attached script
    // on component disconnect, because disconnect happens only upon navigating out from current page
  }, [isDark]);

  return elRef;
}
