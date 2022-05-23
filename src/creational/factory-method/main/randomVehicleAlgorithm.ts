import { BicycleFactory } from "../factories/BicycleFactory";
import { CarFactory } from "../factories/CarFactory";
import { Vehicle } from "../vehicle/Vehicle";

export function randomCarAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();

  const car1 = carFactory.getVehicle("Fusca");
  const car2 = carFactory.getVehicle("Celta");
  const bicycle = bicycleFactory.getVehicle("Bicicleta");

  const cars = [car1, car2, bicycle];

  return cars[Math.round(Math.random() * (cars.length - 1))];
}
