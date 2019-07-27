import React from 'react';
import { Location } from '@reach/router';
import Icon from '../Icon';
import { Container, Item, Link, List } from './Navigation.styles';

const items = [
  {
    text: 'Lorem ipsum',
    to: '/',
  },
  {
    text: 'Lorem ipsum 2',
    to: '/page-2',
  },
];

const Navigation = () => (
  <Location>
    {({ location }) => (
      <Container as="nav" alignItems="center" justifyContent="space-between">
        <List>
          {items.map(({ text, to }) => {
            const isActive = location.pathname === to;
            return (
              <Item key={to}>
                <Link to={to} isActive={isActive}>
                  {text}
                </Link>
              </Item>
            );
          })}
        </List>
        <List>
          <Item>
            <Link to="https://github.com/lassegit/maexchenmeisterschaft.de" useRouter={false}>
              <Icon type="github" aria-labelledby="Github Link" />
            </Link>
          </Item>
        </List>
      </Container>
    )}
  </Location>
);

export default Navigation;
