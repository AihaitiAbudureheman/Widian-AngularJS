import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { GetJsonService } from '../get-json.service';

@Component({
  selector: 'widian-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts = {};

  constructor(private getJsonService: GetJsonService) { }

  ngOnInit() {
    this.getJsonService.getContact()
      .subscribe(
      (data) => {
        this.contacts = data;
      }
      );
  }
}
