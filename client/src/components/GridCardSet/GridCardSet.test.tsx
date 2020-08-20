import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import {GridCardSet} from './';

describe('GridCardSet comopoent', () => {
  it('matches snapshot', () => {
    const { container } = render(<GridCardSet />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const utils = render(<GridCardSet />);
    // utils.getByText('+');

  });
});

