import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { GetJsonService } from '../get-json.service';

@Component({
  selector: 'widian-joinus',
  templateUrl: './joinus.component.html',
  styleUrls: ['./joinus.component.css']
})
export class JoinusComponent implements OnInit {
  joinus = {};

  constructor(private getJsonService: GetJsonService) { }

  ngOnInit() {
    this.getJsonService.getJoin()
      .subscribe(
      (data) => {
        this.joinus = data;
      }
      );
  }

}
