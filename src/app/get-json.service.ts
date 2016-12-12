import { Injectable } from '@angular/core';
import { HttpModule, Http, Response,Headers } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class GetJsonService {


  constructor(private http:Http) {
  }

  getHeader(){
    return this.http.get('https://widian-3effe.firebaseio.com/headers.json')
    .map((response: Response) =>response.json());
  }
  getFooter(){
    return this.http.get('https://widian-3effe.firebaseio.com/footers.json')
    .map((response: Response) =>response.json());
  }
  getWelcome(){
    return this.http.get('https://widian-3effe.firebaseio.com/welcome.json')
    .map((response: Response) =>response.json());
  }
  getProduct(){
    return this.http.get('https://widian-3effe.firebaseio.com/product.json')
    .map((response: Response) =>response.json());
  }
  getTech(){
    return this.http.get('https://widian-3effe.firebaseio.com/tech.json')
    .map((response: Response) =>response.json());
  }
  getService(){
    return this.http.get('https://widian-3effe.firebaseio.com/service.json')
    .map((response: Response) =>response.json());
  }
  getPartner(){
    return this.http.get('https://widian-3effe.firebaseio.com/partner.json')
    .map((response: Response) =>response.json());
  }
  getCustomer(){
    return this.http.get('https://widian-3effe.firebaseio.com/customer.json')
    .map((response: Response) =>response.json());
  }
  getContact(){
    return this.http.get('https://widian-3effe.firebaseio.com/contact.json')
    .map((response: Response) =>response.json());
  }
  getJoin(){
    return this.http.get('https://widian-3effe.firebaseio.com/joinus.json')
    .map((response: Response) =>response.json());
  }








}
