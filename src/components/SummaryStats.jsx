/* @jsx React.createElement */

function SummaryStats({ plan, people }) {
  const meals = plan.flatMap((day) => day.meals || []);
  const totalCalories = meals.reduce((sum, meal) => sum + (meal.calories || 0), 0);
  const totalProtein = meals.reduce((sum, meal) => sum + (meal.protein || 0), 0);
  const mealPrepCount = meals.filter((meal) => meal.mealPrep).length;
  const averageCalories = Math.round(totalCalories / plan.length);

  return (
    <section className="summary-grid" aria-label="Weekly summary">
      <article className="summary-card">
        <span>Average calories</span>
        <strong>{averageCalories.toLocaleString()}</strong>
        <small>per person per day</small>
      </article>
      <article className="summary-card">
        <span>Weekly protein</span>
        <strong>{totalProtein.toLocaleString()}g</strong>
        <small>approximate per person</small>
      </article>
      <article className="summary-card">
        <span>Meal-prepped meals</span>
        <strong>{mealPrepCount}</strong>
        <small>out of {meals.length} meals</small>
      </article>
      <article className="summary-card">
        <span>Plan size</span>
        <strong>{people}</strong>
        <small>people</small>
      </article>
    </section>
  );
}

export default SummaryStats;
