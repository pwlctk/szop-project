import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WarehouseItemModel} from "../../shared/model/warehouse-item.model";
import {WarehouseItemService} from "../../shared/service/warehouse-item.service";

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

  warehouseItems: Array<WarehouseItemModel> = [];

  constructor(private warehouseItemService: WarehouseItemService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.warehouseItems = this.route.snapshot.data['warehouseItems'];
  }

  removeWarehouseItem(warehouseItemId: number, index: number) {
    this.warehouseItemService.removeWarehouseItem(warehouseItemId).subscribe(() => {
      this.warehouseItems.splice(index, 1);
    });
  }

}
