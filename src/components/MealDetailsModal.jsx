/* @jsx React.createElement */

const fallbackImage =
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80';

function DetailList({ title, items, emptyText }) {
  return (
    <div className="detail-block">
      <h3>{title}</h3>
      {items?.length ? (
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>{emptyText}</p>
      )}
    </div>
  );
}

function MealDetailsModal({ meal, onClose }) {
  if (!meal) {
    return null;
  }

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section
        className="meal-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="meal-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="close-button" type="button" onClick={onClose} aria-label="Close meal details">
          x
        </button>
        <img src={meal.image || fallbackImage} alt={meal.name || 'Meal details'} />
        <div className="modal-content">
          <div>
            <span className="meal-type">{meal.type || 'Meal'}</span>
            <h2 id="meal-modal-title">{meal.name || 'Untitled meal'}</h2>
            {meal.mealPrep && <span className="prep-label inline">Meal Prep</span>}
          </div>

          <div className="macro-detail-grid">
            <span>{meal.calories ?? 0} calories</span>
            <span>{meal.protein ?? 0}g protein</span>
            <span>{meal.carbs ?? 0}g carbs</span>
            <span>{meal.fat ?? 0}g fat</span>
          </div>

          <DetailList
            title="Ingredients"
            items={meal.ingredients}
            emptyText="Ingredients can be added in the meal plan data file."
          />
          <DetailList
            title="Prep steps"
            items={meal.steps}
            emptyText="Prep steps can be added in the meal plan data file."
          />

          <div className="detail-block">
            <h3>Notes</h3>
            <p>{meal.notes || 'No special notes for this meal.'}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MealDetailsModal;
