/* @jsx React.createElement */

function FilterBar({
  dayNames,
  selectedDay,
  allDaysLabel,
  showMealPrepOnly,
  onDayChange,
  onMealPrepToggle,
}) {
  return (
    <section className="filter-bar" aria-label="Meal plan filters">
      <div className="button-group" role="group" aria-label="Meal prep filter">
        <button
          className={!showMealPrepOnly ? 'active' : ''}
          type="button"
          onClick={() => onMealPrepToggle(false)}
        >
          Show all meals
        </button>
        <button
          className={showMealPrepOnly ? 'active' : ''}
          type="button"
          onClick={() => onMealPrepToggle(true)}
        >
          Meal-prepped only
        </button>
      </div>

      <label className="day-picker">
        <span>Day</span>
        <select value={selectedDay} onChange={(event) => onDayChange(event.target.value)}>
          <option value={allDaysLabel}>{allDaysLabel}</option>
          {dayNames.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </label>
    </section>
  );
}

export default FilterBar;
