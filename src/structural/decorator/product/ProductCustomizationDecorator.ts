import { ProductDecorator } from "./ProductDecorator";

export class ProductCustomizationDecorator extends ProductDecorator {
  public getName(): string {
    return this.product.getName() + " Customzizada";
  }

  public getPrice(): number {
    return this.product.getPrice() + 50;
  }
}
