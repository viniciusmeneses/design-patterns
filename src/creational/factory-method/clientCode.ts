import { CarFactory } from "./factories/CarFactory";
import { randomCarAlgorithm } from "./main/randomVehicleAlgorithm";

const carFactory = new CarFactory();
const fusca = carFactory.getVehicle("Fusca");
fusca.pickUp("Joana");
fusca.stop();

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  vehicle.pickUp("Teste");
  vehicle.stop();
}
