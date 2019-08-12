import { configure } from '@storybook/react';
import '!style-loader!css-loader!sass-loader!./global-scss-loader.scss';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
