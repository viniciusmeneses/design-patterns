import { Vehicle } from "../vehicle/Vehicle";

export abstract class VehicleFactory {
  public pickUp(customerName: string, vehicleName: string): Vehicle {
    const car = this.getVehicle(vehicleName);
    car.pickUp(customerName);
    return car;
  }

  // Factory method
  public abstract getVehicle(vehicleName: string): Vehicle;
}
