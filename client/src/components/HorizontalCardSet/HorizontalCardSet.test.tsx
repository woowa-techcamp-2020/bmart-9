import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import {HorizontalCardSet} from './';

describe('HorizontalCardSet comopoent', () => {
  it('matches snapshot', () => {
    const { container } = render(<HorizontalCardSet />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const utils = render(<HorizontalCardSet />);
    // utils.getByText('+');

  });
});

