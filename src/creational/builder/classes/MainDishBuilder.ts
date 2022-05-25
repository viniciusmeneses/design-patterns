import { MealBuilderProtocol } from "../interfaces/MealBuilderProtocol";
import { MealBox } from "./MealBox";
import { Beans, Beverage, Dessert, Meat, Rice } from "./Meals";

export class MainDishBuilder implements MealBuilderProtocol {
  private meal: MealBox = new MealBox();

  public makeMeal(): this {
    const rice = new Rice("Arroz", 5);
    const beans = new Beans("Feijão", 10);
    const meat = new Meat("Carne", 20);

    this.meal.add(rice, beans, meat);
    return this;
  }

  public makeBeverage(): this {
    const beverage = new Beverage("Bebida", 3);
    this.meal.add(beverage);
    return this;
  }

  public makeDessert(): this {
    const dessert = new Dessert("Sobremesa", 6);
    this.meal.add(dessert);
    return this;
  }

  public reset(): this {
    this.meal = new MealBox();
    return this;
  }

  public getMeal(): MealBox {
    return this.meal;
  }
}
