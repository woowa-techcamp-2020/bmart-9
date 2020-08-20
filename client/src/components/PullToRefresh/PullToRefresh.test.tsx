import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import {PullToRefresh} from './';

describe('PullToRefresh comopoent', () => {
  it('matches snapshot', () => {
    const { container } = render(<PullToRefresh />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const utils = render(<PullToRefresh />);
    // utils.getByText('+');

  });
});

