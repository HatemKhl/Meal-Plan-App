/* @jsx React.createElement */

function Header({ currentPage, onPageChange }) {
  return (
    <header className="site-header">
      <div className="header-content">
        <div className="header-text">
          <p className="eyebrow">7-day plan for 2 people</p>
          <h1>Weekly Meal Plan</h1>
          <p className="header-copy">
            Meal planning, kitchen inventory, and quick prep notes in one simple place.
          </p>
        </div>
        <nav className="site-nav" aria-label="Primary navigation">
          <button
            className={currentPage === 'meal-plan' ? 'active' : ''}
            type="button"
            onClick={() => onPageChange('meal-plan')}
          >
            Meal Plan
          </button>
          <button
            className={currentPage === 'ingredients' ? 'active' : ''}
            type="button"
            onClick={() => onPageChange('ingredients')}
          >
            Ingredients
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
