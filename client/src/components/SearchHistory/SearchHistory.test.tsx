import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import {SearchHistory} from './';

describe('SearchHistory comopoent', () => {
  it('matches snapshot', () => {
    const { container } = render(<SearchHistory />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const utils = render(<SearchHistory />);
    // utils.getByText('+');

  });
});

