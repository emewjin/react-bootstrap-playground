import { render } from '@testing-library/react';
import { Lecture } from './Lecture';

it('should work', () => {
  const { getByText } = render(<Lecture />);

  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByText('지식공유자')).toBeInTheDocument();
});
