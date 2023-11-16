const Storybook = {
  name: 'Storybook',
  url: 'https://storybook.js.org/',
};

const Support = {
  name: 'Support',
  url: 'https://storybook.js.org/',
};

const ProductOne = [
  // first item is the title
  { name: 'Product One', url: null },
  { name: 'Get Started', url: 'https://storybook.js.org/' },
  { name: 'Guides', url: 'https://storybook.js.org/' },
  { name: 'Frameworks', url: 'https://storybook.js.org/' },
  { name: 'API Reference', url: 'https://storybook.js.org/' },
];

const ProductTwo = [
  { name: 'Product Two', url: null },
  { name: 'Get Started', url: 'https://storybook.js.org/' },
  { name: 'Guides', url: 'https://storybook.js.org/' },
  { name: 'Frameworks', url: 'https://storybook.js.org/' },
  { name: 'API Reference', url: 'https://storybook.js.org/' },
];

const ProductThree = [
  { name: 'Product Three', url: null },
  { name: 'Get Started', url: 'https://storybook.js.org/' },
  { name: 'Guides', url: 'https://storybook.js.org/' },
  { name: 'Frameworks', url: 'https://storybook.js.org/' },
];

const GuidesDeveloperLinks: Record<
  string,
  { name: string; url: string | null }[]
> = {
  one: ProductOne,
  two: ProductTwo,
  three: ProductThree,
};

export const Links = {
  Storybook,
  Support,
  GuidesDeveloperLinks,
};
