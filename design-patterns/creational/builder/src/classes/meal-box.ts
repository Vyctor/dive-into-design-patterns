import MealCompositeProtocol from "../interfaces/meal-composite-protocol";

export default class MealBox implements MealCompositeProtocol {
  private readonly _children: MealCompositeProtocol[] = [];

  getPrice(): number {
    return this._children.reduce((acc, meal) => acc + meal.getPrice(), 0);
  }

  add(...meal: MealCompositeProtocol[]): void {
    this._children.push(...meal);
  }
}
