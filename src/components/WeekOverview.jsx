/* @jsx React.createElement */
import DaySection from './DaySection.jsx';

function WeekOverview({ plan, onMealSelect }) {
  return (
    <section className="week-overview" aria-label="Weekly meal overview">
      {plan.map((day) => (
        <DaySection key={day.day} day={day} onMealSelect={onMealSelect} />
      ))}
    </section>
  );
}

export default WeekOverview;
