import MainDishBuilder from "./classes/main-dish-builder";
import VeganDishBuilder from "./classes/vegan-dish-builder";

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDessert().makeBeverage();

console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

mainDishBuilder.reset();

const meal2 = new MainDishBuilder();

meal2.makeBeverage().makeBeverage();

console.log(meal2.getMeal());
console.log(meal2.getPrice());

const veganDishBuilder = new VeganDishBuilder();

const veganMeal = new VeganDishBuilder();
veganMeal.makeMeal();

console.log("\nVegan Meal: ", veganMeal.getMeal());
console.log("\nVegan Meal Price: ", veganMeal.getPrice());
