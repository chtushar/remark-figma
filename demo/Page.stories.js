import { within, userEvent } from '@storybook/testing-library';
import Page from './Page.svelte';

export default {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/svelte/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  Component: Page,
  props: args,
});

export const Demo = Template.bind({});
