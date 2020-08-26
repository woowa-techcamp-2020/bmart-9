import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import {SixCardsContainer} from './';

describe('SixCardsContainer comopoent', () => {
  it('matches snapshot', () => {
    const { container } = render(<SixCardsContainer />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const utils = render(<SixCardsContainer />);
    // utils.getByText('+');

  });
});

