import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import {Header} from './';

describe('Header comopoent', () => {
  it('matches snapshot', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const utils = render(<Header />);
    // utils.getByText('+');

  });
});

