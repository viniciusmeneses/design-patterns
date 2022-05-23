import { Vehicle } from "./Vehicle";

export class Bicycle implements Vehicle {
  public constructor(private name: string) {}

  public pickUp(customerName: string): void {
    console.log(`${this.name} está buscando ${customerName}`);
  }
  public stop(): void {
    console.log(`${this.name} parou`);
  }
}
