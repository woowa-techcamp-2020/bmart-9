import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import {ShowcaseCardSet} from './';

describe('ShowcaseCardSet comopoent', () => {
  it('matches snapshot', () => {
    const { container } = render(<ShowcaseCardSet />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const utils = render(<ShowcaseCardSet />);
    // utils.getByText('+');

  });
});

