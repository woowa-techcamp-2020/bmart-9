import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import {HorizontalBar} from './';

describe('HorizontalBar comopoent', () => {
  it('matches snapshot', () => {
    const { container } = render(<HorizontalBar />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const utils = render(<HorizontalBar />);
    // utils.getByText('+');

  });
});

