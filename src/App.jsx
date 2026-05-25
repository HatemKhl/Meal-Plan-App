/* @jsx React.createElement */
import { mealPlan } from './data/mealPlan.js';
import Header from './components/Header.jsx';
import SummaryStats from './components/SummaryStats.jsx';
import FilterBar from './components/FilterBar.jsx';
import WeekOverview from './components/WeekOverview.jsx';
import MealDetailsModal from './components/MealDetailsModal.jsx';

const ALL_DAYS = 'All days';

function App() {
  const [showMealPrepOnly, setShowMealPrepOnly] = React.useState(false);
  const [selectedDay, setSelectedDay] = React.useState(ALL_DAYS);
  const [selectedMeal, setSelectedMeal] = React.useState(null);

  const dayNames = React.useMemo(() => mealPlan.map((day) => day.day), []);

  const visiblePlan = React.useMemo(() => {
    return mealPlan
      .filter((day) => selectedDay === ALL_DAYS || day.day === selectedDay)
      .map((day) => ({
        ...day,
        meals: day.meals.filter((meal) => !showMealPrepOnly || meal.mealPrep),
      }));
  }, [selectedDay, showMealPrepOnly]);

  return (
    <>
      <Header />
      <main className="page-shell">
        <SummaryStats plan={mealPlan} people={2} />
        <FilterBar
          dayNames={dayNames}
          selectedDay={selectedDay}
          allDaysLabel={ALL_DAYS}
          showMealPrepOnly={showMealPrepOnly}
          onDayChange={setSelectedDay}
          onMealPrepToggle={setShowMealPrepOnly}
        />
        <WeekOverview plan={visiblePlan} onMealSelect={setSelectedMeal} />
      </main>
      <MealDetailsModal meal={selectedMeal} onClose={() => setSelectedMeal(null)} />
    </>
  );
}

export default App;
