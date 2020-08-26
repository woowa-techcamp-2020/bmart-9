import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import {FourCardsContainer} from './';

describe('FourCardsContainer comopoent', () => {
  it('matches snapshot', () => {
    const { container } = render(<FourCardsContainer />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const utils = render(<FourCardsContainer />);
    // utils.getByText('+');

  });
});

