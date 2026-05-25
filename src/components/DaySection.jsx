/* @jsx React.createElement */
import MealCard from './MealCard.jsx';

function DaySection({ day, onMealSelect }) {
  return (
    <section className="day-section">
      <div className="day-heading">
        <h2>{day.day}</h2>
        <span>{day.meals.length} meals</span>
      </div>
      <div className="meal-grid">
        {day.meals.length > 0 ? (
          day.meals.map((meal) => (
            <MealCard key={`${day.day}-${meal.type}`} meal={meal} onSelect={onMealSelect} />
          ))
        ) : (
          <p className="empty-state">No meals match this filter.</p>
        )}
      </div>
    </section>
  );
}

export default DaySection;
