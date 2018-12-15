import { Injectable } from '@angular/core';
import {ProductModel} from "../model/product.model";
import {Observable} from "rxjs/internal/Observable";
import {map, startWith} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs/internal/Subject";
import {DictionaryModel} from "../model/dictionary.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Array<ProductModel> = [];
  private productsStream: Subject<Array<ProductModel>> = new Subject();

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Array<ProductModel>> {
    return this.http.get("/api/products").pipe(map((response: Array<ProductModel>) => {
      this.products = response;
      this.productsStream.next(this.products);
      return this.products;

    }));
  }

  public getProduct(id: number): Observable<ProductModel> {
    return this.http.get("/api/products/" + id).pipe(map((response: ProductModel) => {
      return response;
    }));
  }

  public getProductsDictionary(): Observable<DictionaryModel> {
    return this.http.get("/api/products/dictionary").pipe(map((response: DictionaryModel) => {
      return response;
    }));
  }

  public getProductStream(): Observable<Array<ProductModel>> {
    return this.productsStream.pipe(startWith(this.products));
  }

  public removeProduct(id: number) {
    return this.http.delete("/api/products/" + id);
  }

  public saveProduct(product: ProductModel): Observable<ProductModel> {
    if (product.id) {
      return this.http.put("/api/products/" + product.id, product).pipe(map((response: ProductModel) => {
        return response;
      }));
    } else {
      return this.http.post("/api/products", product).pipe(map((response: ProductModel) => {
        return response;
      }));
    }
  }

}
