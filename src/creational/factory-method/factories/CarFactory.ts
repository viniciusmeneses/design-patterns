import { Car } from "../vehicle/Car";
import { Vehicle } from "../vehicle/Vehicle";
import { VehicleFactory } from "./VehicleFactory";

export class CarFactory extends VehicleFactory {
  public getVehicle(vehicleName: string): Vehicle {
    return new Car(vehicleName);
  }
}
