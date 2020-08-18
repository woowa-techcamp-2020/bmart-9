import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import {HamburgerIcon} from '.';

describe('HamburgerIcon comopoent', () => {
  it('matches snapshot', () => {
    const { container } = render(<HamburgerIcon />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const utils = render(<HamburgerIcon />);
    // utils.getByText('+');

  });
});

