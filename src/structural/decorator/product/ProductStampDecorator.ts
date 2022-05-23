import { ProductDecorator } from "./ProductDecorator";

export class ProductStampDecorator extends ProductDecorator {
  public getName(): string {
    return this.product.getName() + " Estampada";
  }

  public getPrice(): number {
    return this.product.getPrice() + 10;
  }
}
