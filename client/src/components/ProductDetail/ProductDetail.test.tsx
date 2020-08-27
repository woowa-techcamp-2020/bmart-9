import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import {ProductDetail} from './';

describe('ProductDetail comopoent', () => {
  it('matches snapshot', () => {
    const { container } = render(<ProductDetail />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const utils = render(<ProductDetail />);
    // utils.getByText('+');

  });
});

