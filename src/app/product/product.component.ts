import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { GetJsonService } from '../get-json.service';

@Component({
  selector: 'widian-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product = {};

  constructor(private getJsonService: GetJsonService) { }

  ngOnInit() {
    this.getJsonService.getProduct()
      .subscribe(
      (data) => {
        this.product = data;
      }
      );

  }

}
