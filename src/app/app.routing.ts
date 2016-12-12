import { Routes, RouterModule } from "@angular/router";
import { ProductComponent } from './product/product.component';
import { TechnologyComponent } from './technology/technology.component';
import { ServiceComponent } from './service/service.component';
import { PartnerComponent } from './partner/partner.component';
import { CustomerComponent } from './customer/customer.component';
import { ContactComponent } from './contact/contact.component';
import { JoinusComponent } from './joinus/joinus.component';
import { WelcomeComponent } from './welcome/welcome.component';

const APP_ROUTES: Routes=[
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'product', component: ProductComponent},
  { path: 'technology', component: TechnologyComponent},
  { path: 'service', component: ServiceComponent},
  { path: 'partner', component: PartnerComponent},
  { path: 'customer', component: CustomerComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'joinus', component: JoinusComponent}
]

export const routing=RouterModule.forRoot(APP_ROUTES);
