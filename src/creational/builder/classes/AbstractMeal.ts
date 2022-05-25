import { MealCompositeProtocol } from "../interfaces/MealCompositeProtocol";

export abstract class AbstractMeal implements MealCompositeProtocol {
  public constructor(private name: string, private price: number) {}

  public getPrice(): number {
    return this.price;
  }
}
