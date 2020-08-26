import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import {TenCardsContainer} from './';

describe('TenCardsContainer comopoent', () => {
  it('matches snapshot', () => {
    const { container } = render(<TenCardsContainer />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const utils = render(<TenCardsContainer />);
    // utils.getByText('+');

  });
});

