import { render, screen } from '@testing-library/react';
import App from './App';
import MyComponent from './App';
import Dashboard from './NavBar/dashboard';

test('renders learn react link', () => {
  render(<MyComponent/>);
  render(<Dashboard/>)
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
