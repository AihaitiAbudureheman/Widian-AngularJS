import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Http,Response } from '@angular/http';
import { GetJsonService } from '../get-json.service';



@Component({
  selector: 'widian-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headers={};

    constructor(private getJsonService: GetJsonService) {}

  ngOnInit() {
    this.getJsonService.getHeader()
    .subscribe(
      (data)=>{
        this.headers=data;
      }
    );

  }

}
