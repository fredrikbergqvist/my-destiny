import {configure} from '@storybook/react';
import staticMarkup from 'react-storybook-addon-static-markup'
import {setAddon} from "@storybook/react/dist/client/preview/index";

setAddon(staticMarkup)

function loadStories() {
  require('../src/stories');
  require('../src/stories/components');
  require('../src/stories/card');
}

configure(loadStories, module);
