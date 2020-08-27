import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import {CategoryNavBar} from './';

describe('CategoryNavBar comopoent', () => {
  it('matches snapshot', () => {
    const { container } = render(<CategoryNavBar />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const utils = render(<CategoryNavBar />);
    // utils.getByText('+');

  });
});

