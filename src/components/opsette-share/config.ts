export type OpsetteShareConfig = {
  appName: string;
  tagline: string;
  url: string;
  logoSrc?: string;
};

export const opsetteShareConfig: OpsetteShareConfig = {
  appName: "Random Picker",
  tagline: "Pick a random item from your list.",
  url: "https://tools.opsette.io/random-picker/",
  logoSrc: "opsette-logo.png",
};
