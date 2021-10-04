import { render, screen } from '@testing-library/react';
import TimeEventC from '../TimeEvent';

describe('Time event card', () => {
  test('should render with right params', () => {
    render(
      <TimeEventC
        time={new Date('2021-09-17T16:25:00')}
        title={'title'}
        description={'description'}
      />
    );
    const time = screen.getByTestId('time');
    const title = screen.getByTestId('title');
    const description = screen.getByTestId('description');
    expect(time).toHaveTextContent('16:25');
    expect(title).toHaveTextContent('title');
    expect(description).toHaveTextContent('description');
  });
});
