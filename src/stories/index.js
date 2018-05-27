import React from 'react';

import {storiesOf} from '@storybook/react';
import App from '../App.tsx'

storiesOf('App', module)
  .add('Default', () => <App/>);
