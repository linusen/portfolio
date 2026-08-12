import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock next/link to render a simple anchor for tests
jest.mock('next/link', () => {
  return function Link({ children, href, className }: { children: React.ReactNode; href?: string; className?: string }) {
    return <a href={href} className={className}>{children}</a>;
  };
});

import { Header } from './components/Header';

describe('Header', () => {
  it('renders site title', () => {
    render(<Header />);
    expect(screen.getByText('Linus Lindgren')).toBeInTheDocument();
  });
});
