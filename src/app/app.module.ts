import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VieworderpageComponent } from './vieworderpage/vieworderpage.component';
import { ShippingaddressComponent } from './shippingaddress/shippingaddress.component';

@NgModule({
  declarations: [
    AppComponent,
    VieworderpageComponent,
    ShippingaddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [VieworderpageComponent]
})
export class AppModule { }
