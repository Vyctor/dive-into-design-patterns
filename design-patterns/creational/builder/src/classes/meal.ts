import MealCompositeProtocol from "../interfaces/meal-composite-protocol";

export default abstract class Meal implements MealCompositeProtocol {
  constructor(private name: string, private _price: number) {}

  getPrice(): number {
    return this._price;
  }
}
