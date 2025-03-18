import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Layout from '../layout';

test('renderiza o layout corretamente', () => {
  render(<Layout><p>Hello Test</p></Layout>);
  expect(screen.getByText('Hello Test')).toBeInTheDocument();
});
