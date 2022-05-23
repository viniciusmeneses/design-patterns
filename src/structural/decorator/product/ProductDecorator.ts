import { ProductProtocol } from "./ProductProtocol";

export class ProductDecorator implements ProductProtocol {
  public constructor(protected product: ProductProtocol) {}

  public getName(): string {
    return this.product.getName();
  }

  public getPrice(): number {
    return this.product.getPrice();
  }
}
