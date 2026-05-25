# Weekly Meal Plan

Weekly Meal Plan is a mobile-friendly static website for a 7-day meal plan for two people. It shows breakfast, lunch, dinner, and snacks for each day, with meal photos, calories, macros, meal-prep labels, and tap-to-open meal details. It also includes an editable ingredients page for tracking kitchen inventory.

This is a simple React + Vite website. It does not use a backend, database, login system, API, secrets, environment variables, or private user information.

## Run it locally

Install the project:

```bash
npm install
```

Start the local website:

```bash
npm run dev
```

Vite will show a local link, usually `http://localhost:5173`. Open that link in your browser.

## Build it

Create the production build:

```bash
npm run build
```

The finished static files will be created in the `dist` folder.

## Deploy it on Vercel

1. Push this repository to GitHub.
2. Go to [Vercel](https://vercel.com/).
3. Choose **Add New Project**.
4. Import this GitHub repository.
5. Keep the default Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`
6. Click **Deploy**.

Vercel will give you a shareable website link after deployment.

## Edit the meal plan

Meal data is stored in:

```text
src/data/mealPlan.js
```

Each day has four meals: breakfast, lunch, dinner, and snack. You can edit meal names, calories, macros, ingredients, prep steps, notes, and whether a meal is marked as meal-prepped.

To mark a meal as meal-prepped, set:

```js
mealPrep: true
```

To remove the label, set:

```js
mealPrep: false
```

## Edit the ingredients list

The starter ingredients are stored in:

```text
src/data/ingredients.js
```

The Ingredients page lets you edit quantities and macro estimates in the browser. Those changes are saved locally on that device using browser storage. Because this is a static site, edits made on one person's phone or computer do not automatically sync to another person's device.

## Safety note

Do not commit private information, secrets, API keys, passwords, or environment variables to this project. This website is designed to use only local meal plan data and public/static food image URLs.
