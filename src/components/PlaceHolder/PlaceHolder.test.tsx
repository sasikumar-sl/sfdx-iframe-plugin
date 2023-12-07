import { render, screen } from '@testing-library/react';
import PlaceHolder from './PlaceHolder.components';

test('renders placeholder message', () => {
  render(<PlaceHolder />);

  expect(screen.getByText(/No Sentiments Detected/i)).toBeInTheDocument();
});
