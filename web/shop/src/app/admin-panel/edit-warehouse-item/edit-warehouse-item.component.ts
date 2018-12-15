import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {WarehouseItemModel} from "../../shared/model/warehouse-item.model";
import {WarehouseItemService} from "../../shared/service/warehouse-item.service";
import {DictionaryModel} from "../../shared/model/dictionary.model";

@Component({
  selector: 'app-edit-warehouse-item',
  templateUrl: './edit-warehouse-item.component.html',
  styleUrls: ['./edit-warehouse-item.component.css']
})
export class EditWarehouseItemComponent implements OnInit {

  warehouseItem: WarehouseItemModel = new WarehouseItemModel();
  products: Array<DictionaryModel> = [];

  constructor(private warehouseItemService: WarehouseItemService,
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.data['warehouseItem']) {
      this.warehouseItem = this.route.snapshot.data['warehouseItem'];
    }

    if (this.route.snapshot.data['products']) {
      this.products = this.route.snapshot.data['products'];
    }

    console.log()
  }

  saveProduct() {
    this.warehouseItemService.saveWarehouseItem(this.warehouseItem).subscribe(() => {
      this.back();
    });
  }

  back() {
    this.location.back();
  }

}
