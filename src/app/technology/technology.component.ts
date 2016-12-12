import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { GetJsonService } from '../get-json.service';


@Component({
  selector: 'widian-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  tech = {};

  constructor(private getJsonService: GetJsonService) { }

  ngOnInit() {
    this.getJsonService.getTech()
      .subscribe(
      (data) => {
        this.tech = data;
      }
      );

  }

}
