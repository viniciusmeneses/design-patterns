import { MainDishBuilder } from "./classes/MainDishBuilder";
import { VeganDishBuilder } from "./classes/VeganDishBuilder";

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDessert();
console.log(mainDishBuilder.getMeal());

mainDishBuilder.reset();

const meal = mainDishBuilder.makeBeverage().getMeal();
console.log(meal);

const veganDishBuilder = new VeganDishBuilder();
const veganMeal = veganDishBuilder.makeMeal().getMeal();
console.log(veganMeal);
