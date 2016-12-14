import React from 'react';
import List from 'components/List/List';

const listItems = [
  { title: 'One' },
  { title: 'Two' },
  { title: 'Three' },
  { title: 'Four' }
];

export default () => (
  <article className="women">
    <List items={listItems} />
  </article>
);
