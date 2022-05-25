import { MealCompositeProtocol } from "../interfaces/MealCompositeProtocol";

export class MealBox implements MealCompositeProtocol {
  private readonly children: MealCompositeProtocol[] = [];

  public getPrice(): number {
    return this.children.reduce((sum, meal) => sum + meal.getPrice(), 0);
  }

  public add(...meal: MealCompositeProtocol[]): void {
    this.children.push(...meal);
  }
}
