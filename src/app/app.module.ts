import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,Http } from '@angular/http';
import { routing } from './app.routing';
import { GetJsonService } from './get-json.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { TechnologyComponent } from './technology/technology.component';
import { ServiceComponent } from './service/service.component';
import { PartnerComponent } from './partner/partner.component';
import { CustomerComponent } from './customer/customer.component';
import { ContactComponent } from './contact/contact.component';
import { JoinusComponent } from './joinus/joinus.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    TechnologyComponent,
    ServiceComponent,
    PartnerComponent,
    CustomerComponent,
    ContactComponent,
    JoinusComponent,
    FooterComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [GetJsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
