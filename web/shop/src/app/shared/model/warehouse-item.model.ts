import {ProductModel} from "./product.model";

export class WarehouseItemModel {
  id: number = null;
  product: ProductModel = new ProductModel();
  quantity: number = null;
  price: number = null;
}
