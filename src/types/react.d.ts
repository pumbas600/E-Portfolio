declare namespace React {
  export interface CSSProperties {
    /* Allow css variables to be specified in the style prop */
    [cssVariable: `--${string}`]: string | number | undefined;
  }
}
