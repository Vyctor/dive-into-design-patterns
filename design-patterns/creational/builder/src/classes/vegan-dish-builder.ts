import MealBuilderProtocol from "../interfaces/meal-builder-protocol";
import MealBox from "./meal-box";
import { Rice, Beans, Meat, Beverage, Dessert } from "./meals";
export default class VeganDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  makeMeal(): this {
    const rice = new Rice("Arroz", 35);
    const beans = new Beans("Feijão", 15);
    this._meal.add(rice, beans);
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
