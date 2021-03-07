declare global {
  const EXPERIMENTAL_FEATURE: boolean;
  const STABLE_FEATURE: boolean;

  interface Window {
    EXPERIMENTAL_FEATURE: boolean;
    STABLE_FEATURE: boolean;
  }
}

export {};
