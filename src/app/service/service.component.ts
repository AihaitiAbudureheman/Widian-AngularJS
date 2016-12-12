import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { GetJsonService } from '../get-json.service';

@Component({
  selector: 'widian-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  services = {};

  constructor(private getJsonService: GetJsonService) { }

  ngOnInit() {
    this.getJsonService.getService()
      .subscribe(
      (data) => {
        this.services = data;
      }
      );

  }

}
