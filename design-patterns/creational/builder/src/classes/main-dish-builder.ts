import MealBuilderProtocol from "../interfaces/meal-builder-protocol";
import MealBox from "./meal-box";
import { Rice, Beans, Meat, Beverage, Dessert } from "./meals";

export default class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  makeMeal(): this {
    const rice = new Rice("Arroz", 35);
    const beans = new Beans("Feijão", 15);
    const meat = new Meat("Carne", 50);
    this._meal.add(rice, beans, meat);
    return this;
  }
  makeBeverage(): this {
    const beer = new Beverage("Cerveja", 10);
    this._meal.add(beer);
    return this;
  }
  makeDessert(): this {
    const iceCream = new Dessert("Sorvete", 15);
    this._meal.add(iceCream);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
