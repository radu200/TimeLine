import * as utils from '../../utils';
import "./styles.css";

interface ITimeEvent {
  time: Date,
  title: string,
  description: string;
}

const TimeEvent = ({
  time,
  title,
  description,
}: ITimeEvent) => {
  return (
    <div className="card">
      <div className="card-time">
        <p data-testid="time">{utils.getTime(time)}</p>
      </div>
      <div>
        <p data-testid="title" > {title}</p>
        <p data-testid="description">{description}</p>
      </div>
    </div >
  );
};

export default TimeEvent;
