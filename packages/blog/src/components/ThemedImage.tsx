import type { FunctionComponent, ImgHTMLAttributes } from 'react';

// in some cases you must set both height and width or prefer width over height because of this tailwindcss default
// https://github.com/tailwindlabs/tailwindcss/issues/506
export const ThemedImage: FunctionComponent<ThemedImageProps> = function ({
  src,
  srcDark,
  ...props
}) {
  return (
    <picture>
      {srcDark && (
        <source
          srcSet={srcDark}
          media="(prefers-color-scheme:dark)"
        />
      )}
      <img
        src={src}
        {...props}
      />
    </picture>
  );
};

export interface ThemedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  srcDark?: string;
}
