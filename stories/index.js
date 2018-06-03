import React from 'react';
import { storiesOf } from '@storybook/react';
import { Circle, Button, FacebookLoader, ListItemLoader, MyCustomCard } from '../src';

storiesOf('Components', module)
  .add('Circle', () => <Circle size={40} />)
  .add('Button', () => <Button />)
  .add('Text', () => <Button />)
  .add('Image', () => <Button />);

storiesOf('Examples', module)
  .add('List Item loader', () => <ListItemLoader icon />)
  .add('custom stylex', () => <MyCustomCard />)
  .add('Facebook loader', () => <FacebookLoader />);

