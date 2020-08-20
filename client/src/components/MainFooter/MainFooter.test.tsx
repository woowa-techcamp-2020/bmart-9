import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import {MainFooter} from './';

describe('MainFooter comopoent', () => {
  it('matches snapshot', () => {
    const { container } = render(<MainFooter />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const utils = render(<MainFooter />);
    // utils.getByText('+');

  });
});

