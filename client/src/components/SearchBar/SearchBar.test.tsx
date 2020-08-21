import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import {SearchBar} from './';

describe('SearchBar comopoent', () => {
  it('matches snapshot', () => {
    const { container } = render(<SearchBar />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const utils = render(<SearchBar />);
    // utils.getByText('+');

  });
});

