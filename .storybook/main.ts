import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  async viteFinal(viteConf) {
    // note: important for gh-pages
    viteConf.base = '/website-components/';

    // return the customized config
    return viteConf;
  },
  staticDirs: ['../public'],
  stories: [
    '../src/stories/Introduction.mdx',
    '../src/stories/Colors.mdx',
    '../src/stories/Typography.mdx',
    '../src/stories/Breakpoints.mdx',
    '../src/stories/*.mdx',
    '../src/features/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
    '../src/components/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
    '../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
};

export default config;
