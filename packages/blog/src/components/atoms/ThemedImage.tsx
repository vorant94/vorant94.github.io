import type { ImgHTMLAttributes, ReactElement } from 'react';

// in some cases you must set both height and width or  prefer width over height because of this tailwindcss default
// https://github.com/tailwindlabs/tailwindcss/issues/506
export function ThemedImage({
  src,
  srcDark,
  ...props
}: ThemedImageProps): ReactElement {
  return (
    <picture>
      <source
        srcSet={srcDark}
        media="(prefers-color-scheme:dark)"
      />
      <img
        src={src}
        {...props}
      />
    </picture>
  );
}

export interface ThemedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  srcDark: string;
}
