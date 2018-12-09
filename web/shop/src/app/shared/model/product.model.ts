import {ProductCategoryModel} from "./product-category.model";

export class ProductModel {
  id: number = null;
  name: string = null;
  productCategoryDTO: ProductCategoryModel = null;
  price: number = null;
}
