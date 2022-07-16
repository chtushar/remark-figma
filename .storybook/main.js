module.exports = {
  stories: [
    '../demo/**/*.stories.mdx',
    '../demo/**/*.stories.@(js|jsx|ts|tsx|svelte)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/svelte',
};
