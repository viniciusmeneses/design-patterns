import { ProductProtocol } from "./ProductProtocol";

export class TShirt implements ProductProtocol {
  private name = "Camiseta";
  private price = 49.9;

  public getName(): string {
    return this.name;
  }

  public getPrice(): number {
    return this.price;
  }
}
