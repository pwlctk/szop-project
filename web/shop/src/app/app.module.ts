import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from "./app-routing.module";
import {MainComponent} from './layout/main/main.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedModule} from "./shared/shared.module";
import {ContentComponent} from './layout/content/content.component';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {HomeComponent} from './home/home.component';
import {ProductCategoriesComponent} from './admin-panel/product-categories/product-categories.component';
import {ProductsComponent} from './admin-panel/products/products.component';
import {EditProductCategoryComponent} from './admin-panel/edit-product-category/edit-product-category.component';
import {EditProductComponent} from './admin-panel/edit-product/edit-product.component';
import {OrdersComponent} from './admin-panel/orders/orders.component';
import {WarehouseComponent} from './admin-panel/warehouse/warehouse.component';
import {ProductCategoryService} from "./shared/service/product-category.service";
import {ProductCategoriesResolve, ProductCategoryResolve} from "./shared/resolve/product-category.resolve";
import {ProductService} from "./shared/service/product.service";
import {ProductResolve, ProductsDictionaryResolve, ProductsResolve} from "./shared/resolve/product.resolve";
import {EditWarehouseItemComponent } from './admin-panel/edit-warehouse-item/edit-warehouse-item.component';
import {WarehouseItemService} from "./shared/service/warehouse-item.service";
import {WarehouseItemResolve, WarehouseItemsResolve} from "./shared/resolve/warehouse-item.resolve";

@NgModule({
  declarations: [
    MainComponent,
    ContentComponent,
    AdminPanelComponent,
    HomeComponent,
    ProductCategoriesComponent,
    ProductsComponent,
    EditProductCategoryComponent,
    EditProductComponent,
    OrdersComponent,
    WarehouseComponent,
    EditWarehouseItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    ProductsDictionaryResolve,
    ProductCategoryService,
    ProductCategoriesResolve,
    ProductCategoryResolve,
    ProductService,
    ProductsResolve,
    ProductResolve,
    WarehouseItemService,
    WarehouseItemsResolve,
    WarehouseItemResolve
  ],
  bootstrap: [MainComponent]
})
export class AppModule {
}
