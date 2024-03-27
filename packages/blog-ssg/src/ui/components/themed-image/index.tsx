import type { ComponentPropsWithoutRef, FC } from 'react';

// in some cases you must set both height and width or prefer width over height because of this tailwindcss default
// https://github.com/tailwindlabs/tailwindcss/issues/506
export const ThemedImage: FC<ThemedImageProps> = function ({
  src,
  srcDark,
  ...rest
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
        {...rest}
      />
    </picture>
  );
};

export interface ThemedImageProps extends ComponentPropsWithoutRef<'img'> {
  srcDark?: string;
}
