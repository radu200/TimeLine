import { useState, useEffect } from 'react';
import TimeEvent from '../../components/cards/TimeEvent';
import * as mocks from '../../mocks';
import * as types from '../../types';
import './styles.css';

interface IState {
  timeEvents: Array<types.ITimeEvent>;
  currentIndex: number;
}
const startIndex: number = 3;
const defaultTimeEvents: Array<types.ITimeEvent> = mocks.timeEvents.slice(0, startIndex).reverse();
const limit: number = 5;

const TimeLine = () => {
  const [state, setState] = useState<IState>({
    timeEvents: defaultTimeEvents,
    currentIndex: startIndex
  });


  useEffect(() => {
    const intervalId: ReturnType<typeof setInterval> = setInterval(() => {
      let currentTimeEvents: Array<types.ITimeEvent> = state.timeEvents;

      if (state.timeEvents.length + 1 > limit) {
        currentTimeEvents = state.timeEvents.slice(0, state.timeEvents.length - 1);
      }

      let mockData: Array<types.ITimeEvent> = mocks.timeEvents.slice(state.currentIndex, state.currentIndex + 1);
      let currentIndex: number = state.currentIndex + 1;
      const lastIndex: number = mocks.timeEvents.length - 1;

      if (state.currentIndex > lastIndex) {
        mockData = mocks.timeEvents.slice(0, 1);
        currentIndex = 1;
      }

      setState(state => ({ ...state, currentIndex, timeEvents: [...mockData, ...currentTimeEvents] }));

    }, 5000);

    return () => clearInterval(intervalId);
  }, [state.currentIndex, state.timeEvents]);

  return (
    <div className="timeline">
      {state.timeEvents.map((e) => (
        <div key={e.id} className={`container`}>
          <TimeEvent {...e} />
        </div>
      ))}
    </div>
  );
};
export default TimeLine;