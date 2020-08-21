import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import {Search} from './';

describe('Search comopoent', () => {
  it('matches snapshot', () => {
    const { container } = render(<Search />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const utils = render(<Search />);
    // utils.getByText('+');

  });
});

