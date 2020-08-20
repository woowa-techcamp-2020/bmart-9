import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import {MainContainer} from './';

describe('MainContainer comopoent', () => {
  it('matches snapshot', () => {
    const { container } = render(<MainContainer />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const utils = render(<MainContainer />);
    // utils.getByText('+');

  });
});

