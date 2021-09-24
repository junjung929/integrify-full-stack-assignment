import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import UserCard from '.';
import { User } from '../../types';

test('renders card', () => {
  const dummy: User = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  };
  const component = (
    <Router>
      <UserCard user={dummy} />
    </Router>
  );
  render(component);
  const linkElement = screen.getByText(/more details/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute('href', '/users/1');
  screen.getByText(/Leanne Graham/i);
  screen.getByText(/@Bret/i);
  screen.getByText(/hildegard.org/i);
});
