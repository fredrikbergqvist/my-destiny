import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories');
  require('../src/stories/card');
}

configure(loadStories, module);
