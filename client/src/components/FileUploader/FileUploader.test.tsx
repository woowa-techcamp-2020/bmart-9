import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import {FileUploader} from './';

describe('FileUploader comopoent', () => {
  it('matches snapshot', () => {
    const { container } = render(<FileUploader />);
    expect(container).toMatchSnapshot();
  });

  it('shows the elemnts correctly', () => {
    const utils = render(<FileUploader />);
    // utils.getByText('+');

  });
});

