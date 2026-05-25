/* @jsx React.createElement */
import { ingredientCategories } from '../data/ingredients.js';

const STORAGE_KEY = 'weekly-meal-plan-ingredients';

function flattenIngredients(categories) {
  return categories.flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      id: `${category.name}-${item.name}`.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      category: category.name,
    })),
  );
}

function IngredientsPage() {
  const defaultIngredients = React.useMemo(() => flattenIngredients(ingredientCategories), []);
  const [ingredients, setIngredients] = React.useState(() => {
    try {
      const savedIngredients = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return Array.isArray(savedIngredients) ? savedIngredients : defaultIngredients;
    } catch {
      return defaultIngredients;
    }
  });
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  React.useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ingredients));
  }, [ingredients]);

  const categories = ['All', ...ingredientCategories.map((category) => category.name)];
  const visibleIngredients = ingredients.filter(
    (ingredient) => selectedCategory === 'All' || ingredient.category === selectedCategory,
  );

  function updateIngredient(id, field, value) {
    setIngredients((currentIngredients) =>
      currentIngredients.map((ingredient) =>
        ingredient.id === id
          ? {
              ...ingredient,
              [field]: ['calories', 'protein', 'carbs', 'fat'].includes(field)
                ? Number(value)
                : value,
            }
          : ingredient,
      ),
    );
  }

  function resetIngredients() {
    setIngredients(defaultIngredients);
  }

  return (
    <section className="ingredients-page">
      <div className="ingredients-heading">
        <div>
          <p className="eyebrow">Kitchen repository</p>
          <h2>Ingredients</h2>
          <p>
            Update quantities and nutrition estimates for the foods you already have.
            Changes save in this browser automatically.
          </p>
        </div>
        <button className="secondary-button" type="button" onClick={resetIngredients}>
          Reset list
        </button>
      </div>

      <div className="category-tabs" role="group" aria-label="Ingredient categories">
        {categories.map((category) => (
          <button
            className={selectedCategory === category ? 'active' : ''}
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="ingredients-grid">
        {visibleIngredients.map((ingredient) => (
          <article className="ingredient-card" key={ingredient.id}>
            <div className="ingredient-card-header">
              <span>{ingredient.category}</span>
              <h3>{ingredient.name}</h3>
            </div>

            <label className="field full-width">
              <span>Quantity</span>
              <input
                value={ingredient.quantity}
                onChange={(event) => updateIngredient(ingredient.id, 'quantity', event.target.value)}
              />
            </label>

            <div className="macro-input-grid">
              <label className="field">
                <span>Calories</span>
                <input
                  min="0"
                  type="number"
                  value={ingredient.calories}
                  onChange={(event) => updateIngredient(ingredient.id, 'calories', event.target.value)}
                />
              </label>
              <label className="field">
                <span>Protein</span>
                <input
                  min="0"
                  type="number"
                  value={ingredient.protein}
                  onChange={(event) => updateIngredient(ingredient.id, 'protein', event.target.value)}
                />
              </label>
              <label className="field">
                <span>Carbs</span>
                <input
                  min="0"
                  type="number"
                  value={ingredient.carbs}
                  onChange={(event) => updateIngredient(ingredient.id, 'carbs', event.target.value)}
                />
              </label>
              <label className="field">
                <span>Fat</span>
                <input
                  min="0"
                  type="number"
                  value={ingredient.fat}
                  onChange={(event) => updateIngredient(ingredient.id, 'fat', event.target.value)}
                />
              </label>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default IngredientsPage;
