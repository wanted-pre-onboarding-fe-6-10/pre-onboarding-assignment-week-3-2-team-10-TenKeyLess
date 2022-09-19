import * as React from 'react';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: string[];
    fontSizes: string[];
    space: string[];
    colors: { [key in keyof typeof colors]: string };
    secondaryColors: { [key in keyof typeof secondaryColors]: string };
  }

  export interface ThemedStyledComponentsModule<T> {
    createGlobalStyle(
      strings: TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): React.ComponentClass;
  }

  export function createGlobalStyle(
    strings: TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ): React.ComponentClass;
}
