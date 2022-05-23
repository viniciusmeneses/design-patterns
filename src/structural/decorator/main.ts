import { ProductCustomizationDecorator } from "./product/ProductCustomizationDecorator";
import { ProductDecorator } from "./product/ProductDecorator";
import { ProductStampDecorator } from "./product/ProductStampDecorator";
import { TShirt } from "./product/TShirt";

const tshirt = new TShirt();
const tshirtWithStamp = new ProductStampDecorator(tshirt);
const customizedTshirt = new ProductCustomizationDecorator(tshirtWithStamp);

console.log(tshirt.getName());
console.log(tshirtWithStamp.getName());
console.log(customizedTshirt.getName());
