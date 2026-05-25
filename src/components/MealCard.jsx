/* @jsx React.createElement */

const fallbackImage =
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80';

function MealCard({ meal, onSelect }) {
  return (
    <button className="meal-card" type="button" onClick={() => onSelect(meal)}>
      <div className="meal-image-wrap">
        <img src={meal.image || fallbackImage} alt={meal.name || 'Prepared meal'} />
        {meal.mealPrep && <span className="prep-label">Meal Prep</span>}
      </div>
      <div className="meal-content">
        <span className="meal-type">{meal.type || 'Meal'}</span>
        <h3>{meal.name || 'Untitled meal'}</h3>
        <div className="macro-row" aria-label="Macro summary">
          <span>{meal.calories ?? 0} cal</span>
          <span>{meal.protein ?? 0}g protein</span>
          <span>{meal.carbs ?? 0}g carbs</span>
          <span>{meal.fat ?? 0}g fat</span>
        </div>
      </div>
    </button>
  );
}

export default MealCard;
